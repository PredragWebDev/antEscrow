import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Card, Table, Badge, Dropdown, ProgressBar } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import { MdClose } from "react-icons/md";
import Web3 from "web3";
import { GOVERNANCE_ADDRESS } from "../../../utils/address";
import GovernanceABI from "../../../utils/abis/GovernanceABI.json";
import axios from "axios";
import { Link } from "react-router-dom";

const colors = ['Orange', 'DodgerBlue', 'Tomato', 'MediumSeaGreen', 'MediumSeaGreen'];
const ResourceList = ({ account }) => {
  const [sidebaropen, setSideBarOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [recipientAddress, setRecipientAddress] = useState("");
  const [votetype, setVoteType] = useState("Token");
  const [question, setQuestion] = useState('');
  const [mintamount, setMintAmount] = useState(1);
  const [supportamount, setSupportAmount] = useState(50);
  const [minapproveamount, setMinApproveAmount] = useState(20);

  const [votes, setVotes] = useState([]);
  async function fetchData() {
    const GovernanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
    const votecount = await GovernanceContract.methods.proposalCount().call();
    let temp = [];
    for (let i = 0; i < votecount; i++) {
      const _vote = await GovernanceContract.methods.proposals(i).call();
      temp.push(_vote);
    }
    setVotes(temp);
    console.log(votecount);
  }

  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    if ((votetype === 'Token' &&
      !Web3.utils.isAddress(recipientAddress)) ||
      !supportamount ||
      !minapproveamount ||
      !question.length
    ) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [recipientAddress, supportamount, minapproveamount, question, votetype])

  const onCreateVote = async () => {
    setDisabled(true);
    try {
      const GovernanceContract = new window.web3.eth.Contract(GovernanceABI, GOVERNANCE_ADDRESS);
      await GovernanceContract.methods.createProposal(
        votetype === "Token" ? 0 : 1,
        question,
        '',
        supportamount,
        minapproveamount,
        votetype === "Token" ? recipientAddress : '0x0000000000000000000000000000000000000000'
      ).send({ from: account });
      setDisabled(false);

    }
    catch (error) {
      console.log(error);
      setDisabled(false);
    }
  }

  return (
    <>
      <Sidebar open={sidebaropen} setOpen={setSideBarOpen}>
        <div className={styles.header}>
          <h4>New Vote</h4>
          <MdClose fontSize={20} onClick={() => setSideBarOpen(false)} />
        </div>

        <div className={styles.inputpanel}>
          <Dropdown onSelect={(e) => { setVoteType(e) }}>
            <Dropdown.Toggle variant="secondary" >
              {votetype}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Token">
                Token
              </Dropdown.Item>
              <Dropdown.Item eventKey="Voting">
                Voting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div className="mt-2">
            Question <span>*</span>
          </div>
          <input
            type="text"
            value={question}
            onChange={(event) =>
              setQuestion(event.target.value)
            }
          />
          {votetype === 'Token' ?
            <>
              <div className="mt-2">
                Receipient Address <span>*</span>
              </div>
              <input
                type="text"
                value={recipientAddress}
                onChange={(event) =>
                  setRecipientAddress(event.target.value)
                }
              />

              <div className="mt-2">
                Number of Tokens to Mint<span>*</span>
              </div>
              <input
                type="text"
                value={mintamount}
              />
            </> : ''}

          <div className="mt-2">
            Support Amount<span>*</span>
          </div>
          <input
            type="text"
            value={supportamount}
            onChange={(e) => setSupportAmount(e.target.value)}
          />

          <div className="mt-2">
            Minimum Approve Amount<span>*</span>
          </div>
          <input
            type="text"
            value={minapproveamount}
            onChange={(e) => setMinApproveAmount(e.target.value)}
          />
          <div className={styles.actionpanel + " " + styles.primaryaction}>
            <strong>Action</strong>
            <p className="text-xs">
              These votes are informative and used for signaling. They don’t have any direct repercussions on the organization.
            </p>
          </div>
          <button
            disabled={disabled}
            className={styles.createbutton + " mt-4 w-100"}
            onClick={() => onCreateVote()}
          >
            Create new vote
          </button>


        </div>

      </Sidebar>
      <div className={styles.panel}>
        <div className="d-flex justify-content-between">
          <h2>Voting</h2>
          <button
            className={styles.createbutton}
            onClick={() => {
              setSideBarOpen(true);
            }}
          >
            New vote
          </button>
        </div>
        <Card className="mt-5 w-100" style={{ borderRadius: '5px' }}>
          <Card.Body>
            <div className="d-flex  align-items-center">
              <div className="basic-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" >
                    Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      All
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Open
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Closed
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="basic-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    Outcome
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      All
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Passed
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Rejected
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Enacted
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Pending
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="basic-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    App
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      All
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Voting
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      Tokens
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      External
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Card.Body>
        </Card>
        <div className={styles.votepanel}>
          {votes && votes.map((data, i) => {
            return (
              <Link to={'/governance/' + i}>
                <Card className="mt-5 cursor-pointer" style={{ borderRadius: '5px', width: '300px' }}>
                  <Card.Body><div className="text-white" >
                    <div className="mt-1" style={{ fontSize: '24px' }}>{data.ptype === '0' ? 'Token' : 'Voting'}</div>
                    {data.ptype === '0' ?
                      <div className="mt-1 "><span style={{ fontWeight: 'black', fontSize: '18px' }}>#{i}: </span>Tokens(ESCR): Mint 1 tokens for {data.receipent}</div>
                      : <div className="mt-1" style = {{height : '100px'}}><span style={{ fontWeight: 'black', fontSize: '18px' }}>#{i}: </span>{data.title}</div>}
                    <div className="mt-2">Yes</div>
                    <ProgressBar variant="success" now={data.yesamount * 100 / (data.yesamount / 1 + data.noamount / 1)} style={{ height: '6px' }} />
                    <div className="mt-3">No</div>
                    <ProgressBar variant="danger" now={data.noamount * 100 / (data.yesamount / 1 + data.noamount / 1)} style={{ height: '6px' }} />
                    <div style={{ color: colors[data.status / 1], fontWeight: 'bold' }} className="mt-4">
                      {data.status / 1 === 0 && 'Pending'}
                      {data.status / 1 === 1 && 'Active'}
                      {data.status / 1 === 2 && 'Rejected'}
                      {data.status / 1 === 3 && 'Passed'}
                      {data.status / 1 === 4 && 'Enacted'}
                    </div>
                  </div>

                  </Card.Body>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
};
export default ResourceList;
