import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Card, Table, Badge, Dropdown } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import { MdClose } from "react-icons/md";
import Web3 from "web3";
import { ESCROW_PROTOCOL } from "../../../utils/address";
import EscrowFactory from "../../../utils/abis/EscrowFactory.json";
import EscrowABI from "../../../utils/abis/EscrowABI.json";
import axios from "axios";

const colors = ["red", "blue", "green", "dodgerblue"];
const ResourceList = ({ account }) => {
  const [sidebaropen, setSideBarOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [validation, setValidation] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [tokencount, setTokenCount] = useState(0);
  const [holders, setHolders] = useState([]);
  const [tokeninfo, setTokenInfo] = useState(null);
  const [totalbalance, setTotalBalance] = useState(0);
  const [isAddToken, setIsAddToken] = useState(false);

  async function fetchData() {
    const escrowContract = await new window.web3.eth.Contract(
      EscrowABI,
      ESCROW_PROTOCOL
    );
    
    const name = await escrowContract.methods.name().call();
    const totalSupply = await escrowContract.methods.totalSupply().call();
    console.log(totalSupply);
    // const transfersEnabled = await escrowContract.methods
    //   .transfersEnabled()
    //   .call();
    const symbol = await escrowContract.methods.symbol().call();
    const controller = await escrowContract.methods.owner().call();
    setTokenInfo({
      totalSupply,
      transfersEnabled: 'Yes',
      name,
      symbol,
      controller,
    });
    let result = await axios.get(
      `https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=${ESCROW_PROTOCOL}`
    );
    if (!result.data.result.length) return;
    console.log(result);
    result = result.data.result;
    let temp = [],
      _totalbalance = 0;
    for (let i = 0; i < result.length; i++) {
      const filter = temp.filter((data) => data.address === result[i].to);
      if (filter.length) continue;
      const balance = await escrowContract.methods
        .balanceOf(result[i].to)
        .call();
      _totalbalance += balance / 1;
      if (balance > 0) temp.push({ address: result[i].to, balance });
    }
    setHolders(temp);
    setTotalBalance(_totalbalance);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!window.web3.utils.isAddress(recipientAddress) || !tokencount) {
      setDisabled(true);
      return;
    }
    if (tokencount === 1) setDisabled(false);
    else {
      setValidation(
        "You are trying to assign an amount that is greater than the maximum amount of tokens that can be assigned (1 ESCR )."
      );
    }
  }, [recipientAddress, tokencount]);

  const onAddTokens = async () => {
    if (tokeninfo.controller !== account) {
      setValidation(
        "The action failed to execute. You may not have the required permissions."
      );
      return;
    }
    const escrowContract = await new window.web3.eth.Contract(
      EscrowABI,
      ESCROW_PROTOCOL
    );
    setDisabled(true);
    try {
      await escrowContract.methods
        .generateTokens(recipientAddress, tokencount)
        .send({ from: account });
      await fetchData();
      setDisabled(false);
    } catch (error) {
      console.log(error);
      setDisabled(false);
    }
  };

  const onRemoveTokens = async () => {
    if (tokeninfo.controller !== account) {
      setValidation(
        "The action failed to execute. You may not have the required permissions."
      );
      return;
    }
    const escrowContract = await new window.web3.eth.Contract(
      EscrowABI,
      ESCROW_PROTOCOL
    );
    try {
      setDisabled(true);
      await escrowContract.methods
        .destroyTokens(recipientAddress, tokencount)
        .send({ from: account });
      await fetchData();
      setDisabled(false);
    } catch (error) {
      console.log(error);
      setDisabled(false);
    }
  };

  return (
    <>
      <Sidebar open={sidebaropen} setOpen={setSideBarOpen}>
        <div className={styles.header}>
          <h4>Add tokens</h4>
          <MdClose fontSize={20} onClick={() => setSideBarOpen(false)} />
        </div>
        <div className={styles.actionpanel + " " + styles.primaryaction}>
          <strong>Action</strong>
          <p className="text-xs">
            This action will create tokens and transfer them to the recipient
            below.
          </p>
        </div>
        <div className={styles.inputpanel}>
          <div>
            RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS) <span>*</span>
          </div>
          <input
            type="text"
            value={recipientAddress}
            onChange={(event) =>
              isAddToken && setRecipientAddress(event.target.value)
            }
          />

          <div className="mt-4">
            NUMBER OF TOKENS TO ADD <span>*</span>
          </div>
          <input
            type="text"
            value={tokencount}
            onChange={(event) => setTokenCount(event.target.value / 1)}
          />

          {isAddToken ? (
            <button
              disabled={disabled}
              className={styles.createbutton + " mt-4 w-100"}
              onClick={() => onAddTokens()}
            >
              Add tokens
            </button>
          ) : (
            <button
              disabled={disabled}
              className={styles.createbutton + " mt-4 w-100"}
              onClick={() => onRemoveTokens()}
            >
              Remove tokens
            </button>
          )}
        </div>
        {validation.length ? (
          <div className={styles.actionpanel + " " + styles.secondaryaction}>
            <p className="text-xs">{validation}</p>
          </div>
        ) : (
          ""
        )}
      </Sidebar>
      <div className={styles.panel}>
        <div className="d-flex justify-content-between">
          <h2>Tokens</h2>
          <button
            className={styles.createbutton}
            onClick={() => {
              setSideBarOpen(true);
              setIsAddToken(true);
            }}
          >
            Add tokens
          </button>
        </div>
        <div className="d-flex justify-content-between">
          <Card className="mt-5 w-75 mr-3">
            <Card.Body>
              <Table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Holders</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {holders.map((data, i) => {
                    return (
                      <tr>
                        <td>{i}</td>
                        <td>{data.address}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="mr-3">{data.balance}</div>
                            <div className="basic-dropdown">
                              <Dropdown>
                                <Dropdown.Toggle variant="secondary">
                                  ...
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item
                                    href="#"
                                    onClick={() => {
                                      setIsAddToken(false);
                                      setSideBarOpen(true);
                                      setRecipientAddress(data.address);
                                    }}
                                  >
                                    Remove token
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#">
                                    Add custom label
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="w-25">
            <Card className="mt-5" style={{ height: "unset" }}>
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th className="w-100">Token Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex w-100 justify-content-between">
                        <div>Total Supply</div>
                        <strong>{tokeninfo && tokeninfo.totalSupply}</strong>
                      </td>
                      <td className="d-flex w-100 justify-content-between">
                        <div>Transferable</div>
                        <strong>
                          {tokeninfo && tokeninfo.transfersEnabled}
                        </strong>
                      </td>
                      <td className="d-flex w-100 justify-content-between">
                        <div>Token</div>
                        <strong>
                          {tokeninfo &&
                            `${tokeninfo.name.slice(0, 5)}...(${tokeninfo.symbol
                            })`}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
            <Card className="mt-5" style={{ height: "unset" }}>
              <Card.Body>
                <Table>
                  <thead>
                    <tr>
                      <th className="w-100">controllerSHIP DISTRIBUTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="mt-2">Tokenholder stakes</div>
                        <div className="d-flex mt-3">
                          {holders.map((data, i) => {
                            return (
                              <div
                                className={styles.progress}
                                style={{
                                  backgroundColor: colors[i],
                                  width: `calc(100% / ${holders.length})`,
                                }}
                              />
                            );
                          })}
                        </div>
                        <div className="mt-4">
                          {holders.map((data, i) => {
                            const ellipsis =
                              data.address.slice(0, 6) +
                              "..." +
                              data.address.substring(
                                data.address.length - 4,
                                data.address.length
                              );
                            return (
                              <div className="d-flex justify-content-between text-white">
                                <div className="d-flex align-items-center">
                                  <div
                                    className={styles.ellipse}
                                    style={{ backgroundColor: colors[i] }}
                                  />
                                  <div className="ml-3">{ellipsis}</div>
                                </div>
                                <div>
                                  {(
                                    (data.balance / totalbalance) *
                                    100
                                  ).toFixed(2)}
                                  %
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResourceList;
