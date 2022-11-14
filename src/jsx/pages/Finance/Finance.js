import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Card, Table, Badge, Dropdown, Tab, Nav } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import { MdClose } from "react-icons/md";
import Web3 from "web3";
import { ESCROW_PROTOCOL, FINANCE_ADDRESS } from "../../../utils/address";
import FinanceABI from "../../../utils/abis/FinanceABI.json";
import ERC20ABI from "../../../utils/abis/ERC20ABI.json";
import axios from "axios";

const colors = ["red", "blue", "green", "dodgerblue"];
const Finance = ({ account }) => {
  const [sidebaropen, setSideBarOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [validation, setValidation] = useState("");
  const [tokenlist, setTokenList] = useState([]);
  const [transferlist, setTransferList] = useState([]);
  const [sidebarshow, setSidebarShow] = useState('Deposit');

  const [reference, setReference] = useState('');
  const [amount, setAmount] = useState(0);
  const [tokenid, setTokenId] = useState(0);

  const [receipent, setReceipent] = useState('');

  async function getTokenData(token) {
    const tokenContract = new window.web3.eth.Contract(ERC20ABI, token);
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const decimals = await tokenContract.methods.decimals().call();
    let accountbalance = 0, contractbalance = 0;
    if (account) {
      accountbalance = await tokenContract.methods.balanceOf(account).call() / Math.pow(10, decimals);
    }
    contractbalance = await tokenContract.methods.balanceOf(FINANCE_ADDRESS).call() / Math.pow(10, decimals);
    return { token, name, symbol, decimals, accountbalance, contractbalance }
  }

  async function fetchData() {
    setDisabled(true);
    try {
      const financeContract = new window.web3.eth.Contract(FinanceABI, FINANCE_ADDRESS);
      const _tokenlist = await financeContract.methods.getTokenList().call();
      let temp = []
      for (let i = 0; i < _tokenlist.length; i++) {
        const tokenInfo = await getTokenData(_tokenlist[i]);
        temp.push(tokenInfo);
      }
      setTokenList(temp);
      const transfercount = await financeContract.methods.transferCount().call();
      temp = [];
      for (let i = 0; i < transfercount; i++) {
        const transfer = await financeContract.methods.transfers(i).call();
        temp.push(transfer);
      }
      setTransferList(temp);
    }
    catch (error) {
      console.log(error);
    }
    setDisabled(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  const onDeposit = async () => {
    setDisabled(true);
    try {
      const tokenContract = new window.web3.eth.Contract(ERC20ABI, tokenlist[tokenid].token);
      const temp = '0x' + (Math.pow(10, tokenlist[tokenid].decimals) * amount).toString(16);
      await tokenContract.methods.approve(FINANCE_ADDRESS, temp).send({ from: account });
      const financeContract = new window.web3.eth.Contract(FinanceABI, FINANCE_ADDRESS);
      await financeContract.methods.depositToken(tokenid, temp, reference).send({ from: account });
      await fetchData();
    }
    catch (error) {
      console.log(error);
    }
    setDisabled(false);
  }

  const onWithdraw = async () => {
    setDisabled(true);
    try {
      const temp = '0x' + (Math.pow(10, tokenlist[tokenid].decimals) * amount).toString(16);
      const financeContract = new window.web3.eth.Contract(FinanceABI, FINANCE_ADDRESS);
      console.log(tokenid);
      await financeContract.methods.withdraw(receipent, temp, tokenid, reference).send({ from: account });
      await fetchData();
    }
    catch (error) {
      console.log(error);
    }
    setDisabled(false);
  }

  const reduceString = (string) => {
    const ellipsis = string ? string.slice(0, 6) + '...' + string.substring(string.length - 4, string.length) : '';
    return ellipsis
  }
  return (
    <>
      <Sidebar open={sidebaropen} setOpen={setSideBarOpen}>
        <div className={styles.header}>
          <h4>New transfer</h4>
          <MdClose fontSize={20} onClick={() => setSideBarOpen(false)} />
        </div>
        <div className="mt-3">
          <Tab.Container defaultActiveKey={'Deposit'}>
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey={'Deposit'}>
                  <h4 className="mt-2">Deposit</h4>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link eventKey={'Withdraw'}>
                  <h4 className="mt-2">Withdraw</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-1">
              <Tab.Pane eventKey={'Deposit'}>
                <div>
                  Token <span>*</span>
                </div>
                <div className={styles.inputpanel}>
                  <div className="mb-3">
                    <Dropdown onSelect={(e) => { setTokenId(e) }}>
                      {tokenlist.length ? <Dropdown.Toggle variant="secondary" >
                        {tokenlist[tokenid].symbol} ({tokenlist[tokenid].name}) {reduceString(tokenlist[tokenid].token)}
                      </Dropdown.Toggle> : ''}
                      <Dropdown.Menu>
                        {tokenlist.map((data, i) => {
                          return <Dropdown.Item eventKey={i}>
                            {tokenlist[i].symbol} ({tokenlist[i].name}) {reduceString(tokenlist[i].token)}
                          </Dropdown.Item>
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    Amount <span>*</span>
                  </div>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value / 1)}
                  />

                  <div className="mt-4">
                    REFERENCE (OPTIONAL)
                  </div>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />

                  <button
                    disabled={disabled}
                    className={styles.createbutton + " mt-4 w-100"}
                    onClick={() => onDeposit()}
                  >
                    Submit deposit
                  </button>
                </div>
                <div className={styles.actionpanel + " " + styles.primaryaction}>
                  <p className="text-xs">Configure your deposit above, and sign the transaction with your wallet after clicking "Submit Transfer". It will then show up in your Finance app once processed.</p>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey={'Withdraw'}>
                <div className={styles.inputpanel}>

                  <div>
                    RECIPIENT (MUST BE A VALID ETHEREUM ADDRESS) <span>*</span>
                  </div>
                  <input
                    type="text"
                    value={receipent}
                    onChange={(e) => setReceipent(e.target.value)}
                  />

                  <div className="mt-2">
                    Amount <span>*</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value / 1)}
                    />
                    <Dropdown onSelect={(e) => { setTokenId(e) }}>
                      {tokenlist.length ? <Dropdown.Toggle variant="secondary" >
                        {tokenlist[tokenid].symbol}
                      </Dropdown.Toggle> : ''}
                      <Dropdown.Menu>
                        {tokenlist.map((data, i) => {
                          return <Dropdown.Item eventKey={i}>
                            {tokenlist[i].symbol}
                          </Dropdown.Item>
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="mt-4">
                    REFERENCE (OPTIONAL)
                  </div>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </div>
                <button
                  disabled={disabled}
                  className={styles.createbutton + " mt-4 w-100"}
                  onClick={() => onWithdraw()}
                >
                  Submit Withdraw
                </button>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

      </Sidebar>
      <div className={styles.panel}>
        <div className="d-flex justify-content-between">
          <h2>Finance</h2>
          <button
            className={styles.createbutton}
            onClick={() => {
              setSideBarOpen(true);
            }}
          >
            New transfer
          </button>
        </div>
        <div>
          <Card className="mt-5 w-100 mr-3">
            <Card.Body>
              <Table>
                <thead>
                  <tr>
                    <th style={{ fontSize: '21px' }}>Token Balances</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: '21px' }} className={'text-white'}>
                      <div className="d-flex">
                        {tokenlist.map((data, i) => {
                          if (!data.contractbalance) return '';
                          return <div className="mt-2">
                            <div className="mr-5">
                              {data.symbol}
                            </div>
                            <div className="mt-2">
                              {data.contractbalance}
                            </div>
                          </div>
                        })}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <Card className="mt-5 w-100 mr-3">
            <Card.Body>

              <Table>
                <thead>
                  <tr >
                    <th style={{ fontSize: '21px' }}>DATE</th>
                    <th style={{ fontSize: '21px' }}>SOURCE/RECIPIENT</th>
                    <th style={{ fontSize: '21px' }}>REFERENCE</th>
                    <th style={{ fontSize: '21px' }}>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {transferlist.map((data, i) => {
                    return <tr key={1000 + i} className='text-white' style={{ fontSize: '21px' }}>
                      <td>{new Date(data.date * 1000).toLocaleDateString()}</td>
                      <td>{reduceString(data.source)}</td>
                      <td>{data.refer}</td>
                      <td>{data.t === '1' ? '+' : '-'} {data.amount / Math.pow(10, tokenlist[data.tokenId].decimals)} {tokenlist[data.tokenId].symbol}</td>
                    </tr>
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Finance;
