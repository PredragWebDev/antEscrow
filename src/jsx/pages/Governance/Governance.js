import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Card, Table, Badge, Dropdown, ProgressBar } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import { MdClose } from "react-icons/md";
import Web3 from "web3";
import { GOVERNANCE_ADDRESS, ESCROW_PROTOCOL } from "../../../utils/address";
import GovernanceABI from "../../../utils/abis/GovernanceABI.json";
import EscrowABI from "../../../utils/abis/EscrowABI.json";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const colors = ['Orange', 'DodgerBlue', 'Tomato', 'MediumSeaGreen', 'MediumSeaGreen'];
const titles = ['Pending', 'Active', 'Rejected', 'Passed', 'Enacted'];

const ResourceList = ({ account }) => {
  const { id } = useParams();
  const [voteinfo, setVoteInfo] = useState(null);
  const [yesamount, setYesAmount] = useState(0);
  const [noamount, setNoAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [votetype, setVoteType] = useState('Yes');

  async function fetchData() {
    const GovernanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
    const _vote = await GovernanceContract.methods.proposals(id).call();
    const escrowContract = await new window.web3.eth.Contract(
      EscrowABI,
      ESCROW_PROTOCOL
    );
    let _balance = 0;
    if (account)
      _balance = await escrowContract.methods.balanceOf(account).call();
    setBalance(_balance);
    setVoteInfo(_vote);

    if (_vote.yesamount / 1 + _vote.noamount / 1 === 0) {
      setYesAmount(0);
      setNoAmount(0);
      return;
    }
    setYesAmount((_vote.yesamount * 100 / (_vote.yesamount / 1 + _vote.noamount / 1)))
    setNoAmount((_vote.noamount * 100 / (_vote.yesamount / 1 + _vote.noamount / 1)))
  }

  useEffect(() => {
    if (!id) return;
    fetchData()
  }, [id, account])

  const onStartVote = async () => {
    const governanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
    try {
      await governanceContract.methods.startVote(id).send({ from: account });
      fetchData();
    }
    catch (error) {
      console.log(error);
    }
  }

  const onEndVote = async () => {
    const governanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
    console.log(id)
    try {
      await governanceContract.methods.endVote(id).send({ from: account });
      fetchData();
    }
    catch (error) {
      console.log(error);
    }
  }

  const onVote = async () => {
    if (!balance) {
      alert("You are not allowed User");
      return;
    }
    const governanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
    try {
      await governanceContract.methods.vote(id, 1, votetype === 'Yes' ? true : false).send({ from: account });
      fetchData();
    }
    catch (error) {
      console.log(error);
    }
  }

  const reduceString = (string) => {
    const ellipsis = string ? string.slice(0, 6) + '...' + string.substring(string.length - 4, string.length) : '';
    return ellipsis
  }
  return (
    <>

      <div className={styles.panel}>
        <h2>Voting</h2>
        <div className="d-flex justify-content-between text-white">
          <Card className="mt-5" style={{ borderRadius: '5px', width: '68%' }}>
            <Card.Body>
              <div style={{ fontSize: '24px' }}>
                {voteinfo && voteinfo.ptype === '0' ? 'Token' : 'Voting'}
              </div>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
                Vote #{id}
              </div>
              <div className="d-flex aiign-items-center mt-2">
                <div>
                  <div style={{ color: 'lightgrey' }}>DESCRIPTION</div>
                  {voteinfo && voteinfo.ptype === '0' ?
                    <div>Tokens (ESCR): Mint 1 tokens for {voteinfo && reduceString(voteinfo.receipent)}</div>
                    :
                    <div>{voteinfo && voteinfo.title}</div>
                  }
                </div>
                <div className="ml-5">
                  <div style={{ color: 'lightgrey' }}>CREATED BY</div>
                  <div>{voteinfo && reduceString(voteinfo.creator)}</div>
                </div>
              </div>
              <div className="mt-3">
                <div>Vote</div>
                <div className="mt-2">
                  <ProgressBar variant="success" now={voteinfo && yesamount} style={{ backgroundColor: yesamount === 0 && noamount === 0 ? 'grey' : 'tomato' }} />
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center">
                  <div className={styles.ellipse} style={{ backgroundColor: 'mediumseagreen' }} />
                  <div className="ml-2">Yes {yesamount}% {voteinfo && voteinfo.yesamount} ESCR</div>
                </div>
                <div className="d-flex align-items-center">
                  <div className={styles.ellipse} style={{ backgroundColor: 'tomato' }} />
                  <div className="ml-2">No {noamount} % {voteinfo && voteinfo.noamount} ESCR</div>
                </div>
              </div>
            </Card.Body>
          </Card>
          <div style={{ width: '30%' }}>
            <Card className="mt-5" style={{ borderRadius: '5px', height: 'fit-content' }}>
              <Card.Body>
                <div style={{ fontSize: '24px', borderBottom: "1px solid white" }} className="pb-3">Action</div>
                <div className="mt-2">
                  {
                    voteinfo && account && account.toLowerCase() === voteinfo.creator.toLowerCase() && voteinfo.status / 1 === 0 ? <button
                      // disabled={disabled}
                      className={styles.createbutton + " mt-4 w-100"}
                      onClick={() => onStartVote()}
                    >
                      Start Vote
                    </button> : ''
                  }
                  {voteinfo && account && account.toLowerCase() === voteinfo.creator.toLowerCase() && voteinfo.status / 1 === 1 ?
                    < button
                      // disabled={disabled}
                      className={styles.createbutton + " mt-3 w-100"}
                      onClick={() => onEndVote()}
                    >
                      End Vote
                    </button> : ''
                  }
                  {voteinfo && voteinfo.status / 1 === 1 ?
                    <>
                      <div className="mt-3">
                        <Dropdown onSelect={(e) => { setVoteType(e) }}>
                          <Dropdown.Toggle variant="secondary" >
                            {votetype}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item eventKey="Yes">
                              Yes
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="No">
                              No
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <button
                        // disabled={disabled}
                        className={styles.createbutton + " mt-3 w-100"}
                        onClick={() => onVote()}
                      >
                        Vote
                      </button>
                    </>
                    : ''
                  }
                </div>

              </Card.Body>
            </Card>
            <Card className="mt-5" style={{ borderRadius: '5px', height: 'fit-content' }}>
              <Card.Body>
                <div style={{ fontSize: '24px', borderBottom: "1px solid white" }} className="pb-3">Status</div>
                <div style={{ color: colors[voteinfo && voteinfo.status], fontSize: '20px' }} className={'mt-3'}>{voteinfo && titles[voteinfo.status]}</div>
                <div className="d-flex justify-content-between mt-2">
                  <div>Start Time</div>
                  <div>{voteinfo && (new Date(voteinfo.startTime * 1000).toLocaleDateString() + ' ' + new Date(voteinfo.startTime * 1000).toLocaleTimeString())}</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>End Time</div>
                  <div>{voteinfo && (new Date(voteinfo.endTime * 1000).toLocaleDateString() + ' ' + new Date(voteinfo.endTime * 1000).toLocaleTimeString())}</div>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-2" style={{ borderRadius: '5px', height: 'fit-content' }}>
              <Card.Body>
                <div style={{ fontSize: '24px', borderBottom: "1px solid white" }} className="pb-3">Support</div>
                <div className={'mt-3'}>{yesamount}% > ({voteinfo && voteinfo.supportPercent} % needed)</div>
                <div className="mt-2">
                  <ProgressBar variant="success" now={voteinfo && yesamount} style={{ backgroundColor: yesamount === 0 && noamount === 0 ? 'grey' : 'tomato' }} />
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-2" style={{ borderRadius: '5px', height: 'fit-content' }}>
              <Card.Body>
                <div style={{ fontSize: '24px', borderBottom: "1px solid white" }} className="pb-3">Minimum Approval</div>
                <div className={'mt-3'}>{yesamount}% > ({voteinfo && voteinfo.minApprovePercent} % needed)</div>
                <div className="mt-2">
                  <ProgressBar variant="success" now={voteinfo && yesamount} style={{ backgroundColor: yesamount === 0 && noamount === 0 ? 'grey' : 'tomato' }} />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResourceList;
