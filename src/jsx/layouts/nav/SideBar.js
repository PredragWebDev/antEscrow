/// Menu
import MetisMenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import profile from "../../../images/Untitled-1.jpg";
class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector('.heart');
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }

    handleheartBlast.addEventListener('click', heartBlast);

  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
    "",
    "my-wallets",
    "transactions",
    "coin-details",
    "portofolio",
    "market-capital",
  ],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
    widget = ["widget-basic"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`deznav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? scrollPosition > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <div className="main-profile">
          <img src={profile} alt="" />
          <Link to={"#"}><i className="fa fa-cog" aria-hidden="true"></i></Link>
          <h5 className="mb-0 fs-20 text-black "><span className="font-w400">Hello,</span> Marquez</h5>
          <p className="mb-0 fs-14 font-w400">marquezzzz@mail.com</p>
        </div>
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-144-layout"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
            <ul >
              <li><Link className={`${path === "" ? "mm-active" : ""}`} to="/">  Dashboard </Link></li>
              <li><Link className={`${path === "wallet" ? "mm-active" : ""}`} to="/my-wallets">Wallet</Link></li>
              <li><Link className={`${path === "transactions" ? "mm-active" : ""}`} to="/transactions"> Transactions</Link></li>
              <li><Link className={`${path === "coin-details" ? "mm-active" : ""}`} to="/coin-details"> Coin Details</Link> </li>
              <li><Link className={`${path === "portofolio" ? "mm-active" : ""}`} to="/portofolio">Portofolio</Link></li>
              <li><Link className={`${path === "market-capital" ? "mm-active" : ""}`} to="/market-capital">Market Capital</Link></li>
            </ul>
          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="/resourcelist" >
              <i className="flaticon-077-menu-1"></i>
              <span className="nav-text">Resources</span>
            </Link>

          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="/governancelist" >
              <i className="flaticon-077-menu-1"></i>
              <span className="nav-text">Governance</span>
            </Link>

          </li>
          <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="/finance" >
              <i className="flaticon-077-menu-1"></i>
              <span className="nav-text">Finance</span>
            </Link>

          </li>
          <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-061-puzzle"></i>
              <span className="nav-text">Charts</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                  to="/chart-rechart"
                >
                  RechartJs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                  to="/chart-chartjs"
                >
                  Chartjs
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-chartist" ? "mm-active" : ""}`}
                  to="/chart-chartist"
                >
                  Chartist
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-sparkline" ? "mm-active" : ""}`}
                  to="/chart-sparkline"
                >
                  Sparkline
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "chart-apexchart" ? "mm-active" : ""}`}
                  to="/chart-apexchart"
                >
                  Apexchart
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-003-diamond"></i>
              <span className="nav-text">Bootstrap</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                  to="/ui-accordion"
                >
                  Accordion
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-alert" ? "mm-active" : ""}`}
                  to="/ui-alert"
                >
                  Alert
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-badge" ? "mm-active" : ""}`}
                  to="/ui-badge"
                >
                  Badge
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button" ? "mm-active" : ""}`}
                  to="/ui-button"
                >
                  Button
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-modal" ? "mm-active" : ""}`}
                  to="/ui-modal"
                >
                  Modal
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-button-group" ? "mm-active" : ""}`}
                  to="/ui-button-group"
                >
                  Button Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                  to="/ui-list-group"
                >
                  List Group
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-media-object" ? "mm-active" : ""}`}
                  to="/ui-media-object"
                >
                  Media Object
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-card" ? "mm-active" : ""}`}
                  to="/ui-card"
                >
                  Cards
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                  to="/ui-carousel"
                >
                  Carousel
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                  to="/ui-dropdown"
                >
                  Dropdown
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-popover" ? "mm-active" : ""}`}
                  to="/ui-popover"
                >
                  Popover
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-progressbar" ? "mm-active" : ""}`}
                  to="/ui-progressbar"
                >
                  Progressbar
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-tab" ? "mm-active" : ""}`}
                  to="/ui-tab"
                >
                  Tab
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-typography" ? "mm-active" : ""}`}
                  to="/ui-typography"
                >
                  Typography
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                  to="/ui-pagination"
                >
                  Pagination
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "ui-grid" ? "mm-active" : ""}`}
                  to="/ui-grid"
                >
                  Grid
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-053-heart"></i><span className="nav-text">Plugins</span>
            </Link>
            <ul >
              <li><Link className={`${path === "uc-select2" ? "mm-active" : ""}`} to="/uc-select2">Select 2</Link></li>
              <li><Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} to="/uc-nestable">Nestedable</Link></li>
              <li><Link className={`${path === "uc-noui-slider" ? "mm-active" : ""}`} to="/uc-noui-slider">Noui Slider</Link></li>
              <li><Link className={`${path === "uc-sweetalert" ? "mm-active" : ""}`} to="/uc-sweetalert">Sweet Alert</Link></li>
              <li><Link className={`${path === "uc-toastr" ? "mm-active" : ""}`} to="/uc-toastr">Toastr</Link></li>
              <li><Link className={`${path === "map-jqvmap" ? "mm-active" : ""}`} to="/map-jqvmap">Jqv Map</Link></li>
              <li><Link className={`${path === "uc-lightgallery" ? "mm-active" : ""}`} to="/uc-lightgallery">Light Gallery</Link></li>
            </ul>
          </li>
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="widget-basic" className="ai-icon" >
              <i className="flaticon-381-settings-2"></i>
              <span className="nav-text">Widget</span>
            </Link>
          </li>
          <li className={`${forms.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-044-file"></i>
              <span className="nav-text forms">Forms</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "form-element" ? "mm-active" : ""}`}
                  to="/form-element"
                >
                  Form Elements
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-wizard" ? "mm-active" : ""}`}
                  to="/form-wizard"
                >
                  Wizard
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-editor-summernote" ? "mm-active" : ""
                    }`}
                  to="/form-editor-summernote"
                >
                  Summernote
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-pickers" ? "mm-active" : ""}`}
                  to="/form-pickers"
                >
                  Pickers
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "form-validation-jquery" ? "mm-active" : ""
                    }`}
                  to="/form-validation-jquery"
                >
                  Jquery Validate
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${table.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-381-network"></i>
              <span className="nav-text">Table</span>
            </Link>
            <ul >
              <li>
                <Link
                  className={`${path === "table-bootstrap-basic" ? "mm-active" : ""
                    }`}
                  to="/table-bootstrap-basic"
                >
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link
                  className={`${path === "table-datatable-basic" ? "mm-active" : ""
                    }`}
                  to="/table-datatable-basic"
                >
                  Datatable
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${pages.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-049-copy"></i>
              <span className="nav-text">Pages</span>
            </Link>
            <ul >
              <li>
                <Link to="/page-register">Register</Link>
              </li>
              <li>
                <Link to="/page-login">Login</Link>
              </li>
              <li className={`${error.includes(path) ? "mm-active" : ""}`}>
                <Link className="has-arrow" to="#" >
                  Error
                </Link>
                <ul >
                  <li>
                    <Link
                      className={`${path === "page-error-400" ? "mm-active" : ""
                        }`}
                      to="/page-error-400"
                    >
                      Error 400
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "page-error-403" ? "mm-active" : ""
                        }`}
                      to="/page-error-403"
                    >
                      Error 403
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "page-error-404" ? "mm-active" : ""
                        }`}
                      to="/page-error-404"
                    >
                      Error 404
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "page-error-500" ? "mm-active" : ""
                        }`}
                      to="/page-error-500"
                    >
                      Error 500
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`${path === "page-error-503" ? "mm-active" : ""
                        }`}
                      to="/page-error-503"
                    >
                      Error 503
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={`${path === "page-lock-screen" ? "mm-active" : ""
                    }`}
                  to="/page-lock-screen"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </li>
        </MM>
        <div className="copyright">
          <p><strong>Zenix Crypto React Admin Dashboard</strong> © 2021 All Rights Reserved</p>
          <p className="fs-12">Made with <span className="heart"></span> by DexignZone</p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
