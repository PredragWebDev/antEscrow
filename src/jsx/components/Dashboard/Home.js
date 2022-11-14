import React,{Fragment,Component,useState} from 'react';
import {Link} from 'react-router-dom';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown } from "react-bootstrap";
import ContactSlider from "../zenix/Home/ContactSlider";
import IndexTab from "../zenix/Home/IndexTab";

//Images
import Card1 from './../../../images/card/card1.jpg';
import Card2 from './../../../images/card/card2.jpg';
import Card3 from './../../../images/card/card3.jpg';
import Card4 from './../../../images/card/card4.jpg';

const MarketOverviewChart = loadable(() =>
	pMinDelay(import("../zenix/Home/MarketOverviewChart"), 1000)
);
const CurrentChart = loadable(() =>
	pMinDelay(import("../zenix/Home/CurrentChart"), 1000)
);

const cardBox = [
	{image: Card1},
	{image: Card2},
	{image: Card3},
	{image: Card4},
];

const orderdataBlog = [
	{price: '82.1', amount: '58.9', total: '134.10',},
	{price: '85.2', amount: '55.8', total: '136,12',},
	{price: '87.3', amount: '53.7', total: '138,12',},
	{price: '89.4', amount: '51.6', total: '139,12',},
	{price: '91.9', amount: '47.1', total: '140,12',},
	{price: '93.8', amount: '46.2', total: '142,12',},
	{price: '94.7', amount: '45.3', total: '145,12',},
	{price: '97.6', amount: '44.4', total: '147,12',},
];


const Home = () => {
	const [crrency1, setCrrency1] = useState("Monthly (2021)");
	const [crrency2, setCrrency2] = useState("Monthly (2021)");
	const [crrency3, setCrrency3] = useState("Monthly (2021)");
	const [crrency4, setCrrency4] = useState("Monthly (2021)");

	const [country1, setCountry1] = useState("Medan, IDN");
	const [country2, setCountry2] = useState("Jakarta, IDN");
	const [country3, setCountry3] = useState("Surabaya, IDN");

		return(
			<Fragment>
				<div className="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
					<h2 className="font-w600 mb-2 mr-auto ">Dashboard</h2>
					<div className="weather-btn mb-2">
						<span className="mr-3 fs-22 font-w600 text-black"><i className="fa fa-cloud mr-2"></i>21</span>
						<Dropdown>
							<Dropdown.Toggle variant="" as="div" className="form-control style-1 default-select mr-3 p-0">{country1}</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => setCountry1("Medan, IDN")}>Medan, IDN</Dropdown.Item>
								<Dropdown.Item onClick={() => setCountry1("Jakarta, IDN")}>Jakarta, IDN</Dropdown.Item>
								<Dropdown.Item onClick={() => setCountry1("Surabaya, IDN")}>Surabaya, IDN</Dropdown.Item>
							 </Dropdown.Menu>
						</Dropdown>
					</div>
					<Link to={"#"} className="btn btn-secondary text-white mb-2"><i className="las la-calendar scale5 mr-3"></i>Filter Periode</Link>
				</div>
				<div className="row">
					<div className="col-xl-3 col-sm-6 m-t35">
						<div className="card card-coin">
							<div className="card-body text-center">
								<svg className="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#00ADA3"/>
									<path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM40.0033 19.1441L49.272 35.6798L40.8133 30.973C40.3083 30.693 39.6966 30.693 39.1916 30.973L30.7329 35.6798L40.0033 19.1441ZM40.0033 60.8509L30.7329 44.3152L39.1916 49.022C39.4433 49.162 39.7233 49.232 40.0016 49.232C40.28 49.232 40.56 49.162 40.8117 49.022L49.2703 44.3152L40.0033 60.8509ZM40.0033 45.6569L29.8296 39.9967L40.0033 34.3364L50.1754 39.9967L40.0033 45.6569Z" fill="#00ADA3"/>
								</svg>
								<h2 className="text-black mb-2 font-w600">$168,331.09</h2>
								<p className="mb-0 fs-14">
									<svg  width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d1)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d1" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span className="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 m-t35">
						<div className="card card-coin">
							<div className="card-body text-center">
								<svg className="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40 0C17.9083 0 0 17.9083 0 40C0 62.0917 17.9083 80 40 80C62.0917 80 80 62.0917 80 40C80 17.9083 62.0917 0 40 0ZM40 72.5C22.0783 72.5 7.5 57.92 7.5 40C7.5 22.08 22.0783 7.5 40 7.5C57.9217 7.5 72.5 22.0783 72.5 40C72.5 57.9217 57.92 72.5 40 72.5Z" fill="#FFAB2D"/>
									<path d="M42.065 41.2983H36.8133V49.1H42.065C43.125 49.1 44.1083 48.67 44.7983 47.9483C45.52 47.2566 45.95 46.275 45.95 45.1833C45.9517 43.0483 44.2 41.2983 42.065 41.2983Z" fill="#FFAB2D"/>
									<path d="M40 10.8333C23.9167 10.8333 10.8333 23.9166 10.8333 40C10.8333 56.0833 23.9167 69.1666 40 69.1666C56.0833 69.1666 69.1667 56.0816 69.1667 40C69.1667 23.9183 56.0817 10.8333 40 10.8333ZM45.935 53.5066H42.495V58.9133H38.8867V53.5066H36.905V58.9133H33.28V53.5066H26.9067V50.1133H30.4233V29.7799H26.9067V26.3866H33.28V21.0883H36.905V26.3866H38.8867V21.0883H42.495V26.3866H45.6283C47.3783 26.3866 48.9917 27.1083 50.1433 28.26C51.295 29.4116 52.0167 31.025 52.0167 32.775C52.0167 36.2 49.3133 38.995 45.935 39.1483C49.8967 39.1483 53.0917 42.3733 53.0917 46.335C53.0917 50.2816 49.8983 53.5066 45.935 53.5066Z" fill="#FFAB2D"/>
									<path d="M44.385 36.5066C45.015 35.8766 45.3983 35.0316 45.3983 34.08C45.3983 32.1916 43.8633 30.655 41.9733 30.655H36.8133V37.52H41.9733C42.91 37.52 43.77 37.12 44.385 36.5066Z" fill="#FFAB2D"/>
								</svg>
								<h2 className="text-black mb-2 font-w600">$24,098</h2>
								<p className="mb-0 fs-13">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d2)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d2" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span className="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 m-t35">
						<div className="card card-coin">
							<div className="card-body text-center">
								<svg className="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406678 17.1907 0.00666126 39.275C-0.393355 61.3592 17.1907 79.5933 39.2749 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8092 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17362 57.3257 7.50697 39.4083C7.82365 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8096 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#374C98"/>
									<path d="M40.5283 10.8305C24.4443 10.5471 11.1271 23.3976 10.8438 39.4816C10.5438 55.549 23.3943 68.8662 39.4783 69.1662C55.5623 69.4495 68.8795 56.599 69.1628 40.5317C69.4462 24.4477 56.6123 11.1305 40.5283 10.8305ZM52.5455 56.9324H26.0111L29.2612 38.9483L25.4944 39.7317V36.6649L29.8279 35.7482L32.6447 20.2809H43.2284L40.8283 33.4481L44.5285 32.6647V35.7315L40.2616 36.6149L37.7949 50.2154H54.5122L52.5455 56.9324Z" fill="#374C98"/>
								</svg>
								<h2 className="text-black mb-2 font-w600">$667,224</h2>
								<p className="mb-0 fs-14">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d4)">
										<path d="M5 4C5.91797 5.08433 8.89728 8.27228 10.5 10L16.5 7L23.5 16" stroke="#FF2E2E" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d4" x="-3.05176e-05" y="0" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.180392 0 0 0 0 0.180392 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span className="text-danger mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 m-t35">
						<div className="card card-coin">
							<div className="card-body text-center">
								<svg className="mb-3 currency-icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="40" cy="40" r="40" fill="white"/>
									<path d="M40.725 0.00669178C18.6241 -0.393325 0.406708 17.1907 0.00669178 39.275C-0.393325 61.3592 17.1907 79.5933 39.275 79.9933C61.3592 80.3933 79.5933 62.8093 79.9933 40.7084C80.3933 18.6241 62.8093 0.390041 40.725 0.00669178ZM39.4083 72.493C21.4909 72.1597 7.17365 57.3257 7.507 39.4083C7.82368 21.4909 22.6576 7.17365 40.575 7.49033C58.5091 7.82368 72.8097 22.6576 72.493 40.575C72.1763 58.4924 57.3257 72.8097 39.4083 72.493Z" fill="#FF782C"/>
									<path d="M40.525 10.8238C24.441 10.5405 11.1238 23.391 10.8405 39.475C10.7455 44.5352 11.9605 49.3204 14.1639 53.5139H23.3326V24.8027C23.3326 23.0476 25.7177 22.4893 26.4928 24.0643L40 51.4171L53.5072 24.066C54.2822 22.4893 56.6674 23.0476 56.6674 24.8027V53.5139H65.8077C67.8578 49.6171 69.0779 45.2169 69.1595 40.525C69.4429 24.441 56.609 11.1238 40.525 10.8238Z" fill="#FF782C"/>
									<path d="M53.3339 55.1806V31.943L41.4934 55.919C40.9334 57.0574 39.065 57.0574 38.5049 55.919L26.6661 31.943V55.1806C26.6661 56.1007 25.9211 56.8474 24.9994 56.8474H16.2474C21.4326 64.1327 29.8629 68.9795 39.475 69.1595C49.4704 69.3362 58.3908 64.436 63.786 56.8474H55.0006C54.0789 56.8474 53.3339 56.1007 53.3339 55.1806Z" fill="#FF782C"/>
								</svg>
								<h2 className="text-black mb-2 font-w600">$667,224</h2>
								<p className="mb-0 fs-14">
									<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g filter="url(#filter0_d5)">
										<path d="M5 16C5.91797 14.9157 8.89728 11.7277 10.5 10L16.5 13L23.5 4" stroke="#2BC155" stroke-width="2" stroke-linecap="round"/>
										</g>
										<defs>
										<filter id="filter0_d5" x="-3.05176e-05" y="-6.10352e-05" width="28.5001" height="22.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
										<feOffset dy="1"/>
										<feGaussianBlur stdDeviation="2"/>
										<feColorMatrix type="matrix" values="0 0 0 0 0.172549 0 0 0 0 0.72549 0 0 0 0 0.337255 0 0 0 0.61 0"/>
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
										</filter>
										</defs>
									</svg>
									<span className="text-success mr-1">45%</span>This week
								</p>	
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-9 col-xxl-8">
						<div className="card">
							<div className="card-header border-0 flex-wrap pb-0 select-btn">
								<div className="mb-3">
									<h4 className="fs-20 text-black">Market Overview</h4>
									<p className="mb-0 fs-12 text-black">Lorem ipsum dolor sit amet, consectetur</p>
								</div>
								<div className="d-flex flex-wrap mb-2">
									<div className="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" className="custom-control-input" id="customCheck9" />
										<label className="custom-control-label" for="customCheck9">
											<span className="d-block  font-w500 mt-2">BTC</span>
										</label>
									</div>
									<div className="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" className="custom-control-input" id="customCheck91" />
										<label className="custom-control-label" for="customCheck91">
											<span className="d-block  font-w500 mt-2">XRP</span>
										</label>
									</div>
									<div className="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" className="custom-control-input" id="customCheck92" />
										<label className="custom-control-label" for="customCheck92">
											<span className="d-block font-w500 mt-2">ETH</span>
										</label>
									</div>
									<div className="custom-control check-switch custom-checkbox mr-4 mb-2">
										<input type="checkbox" className="custom-control-input" id="customCheck93" />
										<label className="custom-control-label" for="customCheck93">
											<span className="d-block font-w500 mt-2">ZEC</span>
										</label>
									</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle variant="" className="form-control style-1 default-select">{crrency1}</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => setCrrency1("Monthly (2021)")}>Monthly (2021)</Dropdown.Item>
										<Dropdown.Item onClick={() => setCrrency1("Daily (2021)")}>Daily (2021)</Dropdown.Item>
										<Dropdown.Item onClick={() => setCrrency1("Weekly (2021)")}>Weekly (2021)</Dropdown.Item>
									 </Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="card-body pb-0">
								<MarketOverviewChart />
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-xxl-4">
						<div className="card">
							<div className="card-header border-0 pb-0">
								<h4 className="fs-20 text-black">Current Statistic</h4>
							</div>
							<div className="card-body pb-0">
								<div id="currentChart" className="current-chart">
									<CurrentChart />
								</div>
								<div className="chart-content">	
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#EB8153"/>
											</svg>
											<span className="fs-14">Income (66%)</span>
										</div>
										<div>
											<h5 className="mb-0">$167,884.21</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#71B945"/>
											</svg>

											<span className="fs-14">Income (50%)</span>
										</div>
										<div>
											<h5 className="mb-0">$56,411.33</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#4A8CDA"/>
											</svg>
											<span className="fs-14">Income (11%)</span>
										</div>
										<div>
											<h5 className="mb-0">$81,981.22</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between mb-2 align-items-center">
										<div>
											<svg className="mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="15" height="15" rx="7.5" fill="#6647BF"/>
											</svg>
											<span className="fs-14">Income (23%)</span>
										</div>
										<div>
											<h5 className="mb-0">$12,432.51</h5>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-6 col-xxl-12">
						<div className="row">
							<div className="col-sm-6">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h4 className="mb-0 fs-20 text-black">Sell Order</h4>
										<Dropdown className="dropdown custom-dropdown mb-0 tbl-orders-style">
											<Dropdown.Toggle variant="" className="btn sharp tp-btn i-false" data-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Details </Link>
												<Link className="dropdown-item text-danger" to="#"> Cancel</Link>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<div className="card-body p-3 pb-0">
										<Dropdown className="dropdown custom-dropdown d-block tbl-orders">
											<Dropdown.Toggle variant="" as="div" className="btn d-flex align-items-center border-0 order-bg rounded i-false" data-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384777C10.7089 -0.226161 0.233857 9.88466 0.00384777 22.5831C-0.226161 35.2815 9.88466 45.7661 22.5831 45.9961C35.2815 46.2261 45.7661 36.1153 45.9961 23.4073C46.2261 10.7089 36.1153 0.224273 23.4169 0.00384777ZM22.6598 41.6834C12.3573 41.4918 4.12485 32.9622 4.31652 22.6598C4.49861 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49861 41.8655 13.0281 41.6834 23.3306C41.5013 33.6331 32.9622 41.8655 22.6598 41.6834Z" fill="#374C98"/>
													<path d="M23.3038 6.22751C14.0555 6.06459 6.3981 13.4536 6.23518 22.7019C6.06267 31.9406 13.4517 39.598 22.7 39.7705C31.9483 39.9334 39.6057 32.5444 39.7686 23.3057C39.9315 14.0574 32.5521 6.40002 23.3038 6.22751ZM30.2136 32.7361H14.9564L16.8252 22.3952L14.6593 22.8457V21.0823L17.151 20.5552L18.7707 11.6615H24.8563L23.4763 19.2326L25.6039 18.7822V20.5456L23.1504 21.0535L21.732 28.8738H31.3445L30.2136 32.7361Z" fill="#374C98"/>
												</svg>
												<div className="text-left ml-3">
													<span className="d-block fs-16 text-black">Litecoin</span>
												</div>
												<i className="fa fa-angle-down scale5 ml-auto"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Bitcoin </Link>
												<Link className="dropdown-item" to="#"> ETH coin</Link>
											</Dropdown.Menu>
										</Dropdown>
										<div className="table-responsive">
											<table className="table text-center bg-info-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th className="text-left">Price</th>
														<th className="text-center">Amount</th>
														<th className="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													{orderdataBlog.map((data,index)=>(
														<tr>
															<td className="text-left">{data.price}</td>
															<td>{data.amount}</td>
															<td className="text-right">${data.total}</td>
														</tr>
													))}	
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer border-0 p-0 caret">
										<Link to={"./coin-details"} className="btn-link"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
									</div>
								</div>	
							</div>
							<div className="col-sm-6">
								<div className="card">
									<div className="card-header border-0 pb-0">
										<h4 className="mb-0 text-black fs-20">Buy Order</h4>
										<Dropdown className="dropdown custom-dropdown mb-0 tbl-orders-style">
											<Dropdown.Toggle variant="" className="btn sharp tp-btn i-false" data-toggle="dropdown">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
													<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Details </Link>
												<Link className="dropdown-item text-danger" to="#"> Cancel</Link>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<div className="card-body p-3 pb-0">
										<Dropdown className="dropdown custom-dropdown d-block tbl-orders">
											<Dropdown.Toggle variant="" as="div" className="btn d-flex align-items-center border-0 order-bg rounded i-false" data-toggle="dropdown">
												<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M23.4169 0.00384778C10.7089 -0.226162 0.233857 9.88467 0.00384778 22.5831C-0.226162 35.2816 9.88467 45.7662 22.5831 45.9962C35.2816 46.2262 45.7662 36.1153 45.9962 23.4073C46.2262 10.7089 36.1153 0.224274 23.4169 0.00384778ZM22.6598 41.6835C12.3573 41.4918 4.12485 32.9623 4.31653 22.6598C4.49862 12.3573 13.0281 4.12485 23.3306 4.30694C33.6427 4.49862 41.8656 13.0281 41.6835 23.3306C41.5014 33.6332 32.9623 41.8656 22.6598 41.6835Z" fill="#FF782C"/>
													<path d="M23.3019 6.22369C14.0536 6.06076 6.3962 13.4498 6.23327 22.6981C6.17864 25.6077 6.8773 28.3592 8.14427 30.7705H13.4163V14.2616C13.4163 13.2524 14.7877 12.9313 15.2334 13.837L23 29.5649L30.7667 13.838C31.2123 12.9313 32.5837 13.2524 32.5837 14.2616V30.7705H37.8395C39.0182 28.5298 39.7198 25.9997 39.7667 23.3019C39.9297 14.0536 32.5502 6.3962 23.3019 6.22369Z" fill="#FF782C"/>
													<path d="M30.667 31.7289V18.3672L23.8587 32.1534C23.5367 32.808 22.4624 32.808 22.1403 32.1534L15.333 18.3672V31.7289C15.333 32.2579 14.9046 32.6872 14.3746 32.6872H9.34223C12.3237 36.8763 17.1712 39.6632 22.6981 39.7667C28.4455 39.8683 33.5747 37.0507 36.6769 32.6872H31.6254C31.0954 32.6872 30.667 32.2579 30.667 31.7289Z" fill="#FF782C"/>
												</svg>
												<div className="text-left ml-3">
													<span className="d-block fs-16 text-black">Monero</span>
												</div>
												<i className="fa fa-angle-down scale5 ml-auto"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Dash coin </Link>
												<Link className="dropdown-item" to="#"> ETH coin</Link>
											</Dropdown.Menu>
										</Dropdown>
										<div className="table-responsive">
											<table className="table text-center bg-warning-hover tr-rounded order-tbl">
												<thead>
													<tr>
														<th className="text-left">Price</th>
														<th className="text-center">Amount</th>
														<th className="text-right">Total</th>
													</tr>
												</thead>
												<tbody>
													{orderdataBlog.map((data,index)=>(
														<tr>
															<td className="text-left">{data.amount}</td>
															<td>{data.price}</td>
															<td className="text-right">${data.total}</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer border-0 p-0 caret">
										<Link to={"./coin-details"} className="btn-link"><i className="fa fa-caret-down" aria-hidden="true"></i></Link>
									</div>
								</div>
							</div>
							<div className="col-xl-12 mt-2">
								<div className="card">
									<div className="card-header d-sm-flex d-block pb-0 border-0">
										<div>
											<h4 className="fs-20 text-black">Quick Trade</h4>
											<p className="mb-0 fs-12">Lorem ipsum dolor sit amet, consectetur</p>
										</div>
										<Dropdown className="custom-dropdown d-block mt-3 mt-sm-0 mb-0">
											<Dropdown.Toggle variant="" className="btn border border-warning btn-sm d-flex align-items-center svg-btn i-false" data-toggle="dropdown">
												<svg className="mr-2" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z" fill="#FFAB2D"/>
													<path d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z" fill="#FFAB2D"/>
													<path d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z" fill="#FFAB2D"/>
												</svg>
												<span className="text-black fs-16">Yearly (2021)</span>
												<i className="fa fa-angle-down text-black scale3 ml-2"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Weekly (2021) </Link>
												<Link className="dropdown-item" to="#"> Daily (2021)</Link>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<div className="card-body">
										<div className="basic-form">
											<form className="form-wrapper">
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Amount BTC</span>
														</div>
														<input type="number" className="form-control" placeholder="52.5" />
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text ">Price BPL</span>
														</div>
														<input type="number" className="form-control" placeholder="0,000000" />
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Fee (1%)</span>
														</div>
														<input type="number" className="form-control" placeholder="0,000000" />
													</div>
												</div>
												<div className="form-group">
													<div className="input-group input-group-lg">
														<div className="input-group-prepend">
															<span className="input-group-text">Total BPL</span>
														</div>
														<input type="number" className="form-control" placeholder="0,000000" />
													</div>
												</div>
												<div className="row mt-4 align-items-center">
													<div className="col-lg-6">
														<div>
															<p className="mb-0 fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="d-flex justify-content-end">
															<Link to={"#"} className="btn  btn-success text-white text-nowrap">
															BUY
																<svg className="ml-3 scale3" width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M16.9638 11.5104L16.9721 14.9391L3.78954 1.7565C3.22815 1.19511 2.31799 1.19511 1.75661 1.7565C1.19522 2.31789 1.19522 3.22805 1.75661 3.78943L14.9392 16.972L11.5105 16.9637L11.5105 16.9637C10.7166 16.9619 10.0715 17.6039 10.0696 18.3978C10.0677 19.1919 10.7099 19.8369 11.5036 19.8388L11.5049 19.3388L11.5036 19.8388L18.3976 19.8554L18.4146 19.8555L18.4159 19.8555C18.418 19.8555 18.42 19.8555 18.422 19.8555C19.2131 19.8533 19.8528 19.2114 19.8555 18.4231C19.8556 18.4196 19.8556 18.4158 19.8556 18.4117L19.8389 11.5035L19.8389 11.5035C19.8369 10.7097 19.1919 10.0676 18.3979 10.0695C17.604 10.0713 16.9619 10.7164 16.9638 11.5103L16.9638 11.5104Z" fill="white" stroke="white"></path>
																</svg>
															</Link>
															<Link to={"#"} className="btn btn-danger ml-3 text-nowrap">
															SELL
																<svg className="ml-3 scale5" width="16" height="16" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M5.35182 13.4965L5.35182 13.4965L5.33512 6.58823C5.33508 6.5844 5.3351 6.58084 5.33514 6.57759M5.35182 13.4965L5.83514 6.58306L5.33514 6.58221C5.33517 6.56908 5.33572 6.55882 5.33597 6.5545L5.33606 6.55298C5.33585 6.55628 5.33533 6.56514 5.33516 6.57648C5.33515 6.57684 5.33514 6.57721 5.33514 6.57759M5.35182 13.4965C5.35375 14.2903 5.99878 14.9324 6.79278 14.9305C7.58669 14.9287 8.22874 14.2836 8.22686 13.4897L8.22686 13.4896L8.21853 10.0609M5.35182 13.4965L8.21853 10.0609M5.33514 6.57759C5.33752 5.789 5.97736 5.14667 6.76872 5.14454C6.77041 5.14452 6.77217 5.14451 6.77397 5.14451L6.77603 5.1445L6.79319 5.14456L13.687 5.16121L13.6858 5.66121L13.687 5.16121C14.4807 5.16314 15.123 5.80809 15.1211 6.6022C15.1192 7.3961 14.4741 8.03814 13.6802 8.03626L13.6802 8.03626L10.2515 8.02798L23.4341 21.2106C23.9955 21.772 23.9955 22.6821 23.4341 23.2435C22.8727 23.8049 21.9625 23.8049 21.4011 23.2435L8.21853 10.0609M5.33514 6.57759C5.33513 6.57959 5.33514 6.58159 5.33514 6.5836L8.21853 10.0609M6.77407 5.14454C6.77472 5.14454 6.77537 5.14454 6.77603 5.14454L6.77407 5.14454Z" fill="white" stroke="white"></path>
																</svg>
															</Link>
														</div>	
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-xxl-12">
						<div className="row">
							{cardBox.map((item,index)=>(
								<div className="col-sm-6" key={index}>
									<div className="card-bx stacked card">
										<img src={item.image} alt="" />
										<div className="card-info">
											<p className="mb-1 text-white fs-14">Main Balance</p>
											<div className="d-flex justify-content-between">
												<h2 className="num-text text-white mb-5 font-w600">$673,412.66</h2>
												<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M19.2744 18.8013H16.0334V23.616H19.2744C19.9286 23.616 20.5354 23.3506 20.9613 22.9053C21.4066 22.4784 21.672 21.8726 21.672 21.1989C21.673 19.8813 20.592 18.8013 19.2744 18.8013Z" fill="white"/>
													<path d="M18 0C8.07429 0 0 8.07429 0 18C0 27.9257 8.07429 36 18 36C27.9257 36 36 27.9247 36 18C36 8.07531 27.9247 0 18 0ZM21.6627 26.3355H19.5398V29.6722H17.3129V26.3355H16.0899V29.6722H13.8528V26.3355H9.91954V24.2414H12.0898V11.6928H9.91954V9.59863H13.8528V6.3288H16.0899V9.59863H17.3129V6.3288H19.5398V9.59863H21.4735C22.5535 9.59863 23.5491 10.044 24.2599 10.7547C24.9706 11.4655 25.416 12.4611 25.416 13.5411C25.416 15.6549 23.7477 17.3798 21.6627 17.4744C24.1077 17.4744 26.0794 19.4647 26.0794 21.9096C26.0794 24.3453 24.1087 26.3355 21.6627 26.3355Z" fill="white"/>
													<path d="M20.7062 15.8441C21.095 15.4553 21.3316 14.9338 21.3316 14.3465C21.3316 13.1812 20.3842 12.2328 19.2178 12.2328H16.0334V16.4695H19.2178C19.7959 16.4695 20.3266 16.2226 20.7062 15.8441Z" fill="white"/>
												</svg>
											</div>
											<div className="d-flex">
												<div className="mr-4 text-white">
													<p className="fs-12 mb-1 op6">VALID THRU</p>
													<span>08/21</span>
												</div>
												<div className="text-white">
													<p className="fs-12 mb-1 op6">CARD HOLDER</p>
													<span>Marquezz Silalahi</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
							<div className="col-xl-12">
								<IndexTab />
							</div>	
							<div className="col-xl-12 mt-2">
								<div className="card">
									<div className="card-header d-sm-flex d-block pb-0 border-0">
										<div>
											<h4 className="fs-20 text-black">Quick Transfer</h4>
											<p className="mb-0 fs-12">Lorem ipsum dolor sit amet, consectetur</p>
										</div>
										<Dropdown className="custom-dropdown d-block mt-3 mt-sm-0 mb-0">
											<Dropdown.Toggle variant="" className="btn border border-warning btn-sm d-flex align-items-center svg-btn i-false" data-toggle="dropdown">
												<svg className="mr-2" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21 0C9.40213 0 0.00012207 9.40201 0.00012207 20.9999C0.00012207 32.5978 9.40213 41.9998 21 41.9998C32.5979 41.9998 41.9999 32.5978 41.9999 20.9999C41.9867 9.4075 32.5924 0.0132751 21 0ZM28.5 31.5001H16.5002C15.6717 31.5001 15.0001 30.8286 15.0001 30C15.0001 29.929 15.0052 29.8581 15.0152 29.7876L16.1441 21.8843L13.864 22.4547C13.7449 22.4849 13.6227 22.5 13.5 22.5C12.6715 22.4991 12.0009 21.8271 12.0013 20.9985C12.0022 20.311 12.4701 19.7122 13.137 19.5447L16.6018 18.6786L18.015 8.78723C18.1321 7.96692 18.892 7.39746 19.7123 7.51465C20.5327 7.63184 21.1021 8.39172 20.9849 9.21204L19.7444 17.8931L25.1364 16.545C25.9388 16.3403 26.755 16.8251 26.9592 17.6276C27.1638 18.43 26.679 19.2462 25.8766 19.4508C25.872 19.4518 25.8674 19.4531 25.8629 19.454L19.2857 21.0983L18.2287 28.4999H28.5C29.3286 28.4999 30.0001 29.1714 30.0001 30C30.0001 30.8281 29.3286 31.5001 28.5 31.5001Z" fill="#5974D5"/>
												</svg>
												<span className="text-black fs-16">Yearly (2021)</span>
												<i className="fa fa-angle-down text-black scale3 ml-2"></i>
											</Dropdown.Toggle>
											<Dropdown.Menu className="dropdown-menu-right" alignRight={true}>
												<Link className="dropdown-item" to="#"> Weekly (2021) </Link>
												<Link className="dropdown-item" to="#"> Daily (2021)</Link>
											</Dropdown.Menu>
										</Dropdown>
									</div>
									<div className="card-body">
										<div className="form-wrapper">
											<div className="form-group">
												<div className="input-group input-group-lg">
													<div className="input-group-prepend">
														<span className="input-group-text">Amount BTC</span>
													</div>
													<input type="number" className="form-control" placeholder="742.2" />
												</div>
											</div>
										</div>
										<div className="d-flex mb-3 mt-3 justify-content-between align-items-center">
											<h4 className="text-black fs-20 mb-0">Recent Contacts</h4>
											<Link to={"#"} className="btn-link">View more</Link>
										</div>
										<div className="testimonial-one px-4 owl-right-nav owl-carousel owl-loaded owl-drag">
											<ContactSlider />
										</div>
										<div className="row pt-sm-5 pt-3 align-items-center">
											<div className="col-sm-6 mb-sm-0 mb-3">
												<p className="mb-0 fs-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
											</div>
											<div className="col-sm-6">
												<Link to={"#"} className="btn btn-secondary d-block btn-lg">TRANSFER NOW</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	
}
export {orderdataBlog};
export default Home;