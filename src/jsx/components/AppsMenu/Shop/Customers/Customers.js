import React, { Fragment } from "react";
import PageTitle from "../../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

/// images
import avartar5 from "../../../../../images/avatar/5.png";
import avartar1 from "../../../../../images/avatar/1.png";
import { Link } from "react-router-dom";

const Customers = () => {
   const drop = (
      <Dropdown>
         <Dropdown.Toggle variant="primary"  className="table-dropdown i-false btn  tp-btn-light sharp">
			<span class="fs--1">
				<svg xmlns="http://www.w3.org/2000/svg"  width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<rect x="0" y="0" width="24" height="24"></rect>
						<circle fill="#000000" cx="5" cy="12" r="2"></circle>
						<circle fill="#000000" cx="12" cy="12" r="2"></circle>
						<circle fill="#000000" cx="19" cy="12" r="2"></circle>
					</g>
				</svg>
			</span>
         </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item href="#">Edit</Dropdown.Item>

            <Dropdown.Item href="#" className="text-danger">
               Delete
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );

   const chackbox = document.querySelectorAll(".customer_shop_single input");
   const motherChackBox = document.querySelector(".customer_shop input");
   // console.log(document.querySelectorAll(".publish_review input")[0].checked);
   const chackboxFun = (type) => {
      for (let i = 0; i < chackbox.length; i++) {
         const element = chackbox[i];
         if (type === "all") {
            if (motherChackBox.checked) {
               element.checked = true;
            } else {
               element.checked = false;
            }
         } else {
            if (!element.checked) {
               motherChackBox.checked = false;
               break;
            } else {
               motherChackBox.checked = true;
            }
         }
      }
   };

   const chack = (i) => (
      <div className={`custom-control custom-checkbox ml-2`}>
         <input
            type="checkbox"
            className="custom-control-input "
            id={`checkAll${i}`}
            required=""
            onClick={() => chackboxFun()}
         />
         <label
            className="custom-control-label"
            htmlFor={`checkAll${i}`}
         ></label>
      </div>
   );

   return (
      <Fragment>
         <PageTitle activeMenu="Shop" motherMenu="Customers" />
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="table-responsive">
                        <table className="table mb-0 table-striped respon-table-data">
                           <thead>
                              <tr>
                                 <th className="customer_shop">
                                    <div className="custom-control custom-checkbox mx-2">
                                       <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          id="checkAll"
                                          onClick={() => chackboxFun("all")}
                                       />
                                       <label
                                          className="custom-control-label"
                                          htmlFor="checkAll"
                                       ></label>
                                    </div>
                                 </th>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Phone</th>
                                 <th className="pl-5 width200">
                                    Billing Address
                                 </th>
                                 <th>Joined</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody id="customers">
                              <tr className="btn-reveal-trigger">
                                 <td className="customer_shop_single">
                                    {chack(1)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Ricky Antony
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:ricky@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2012001851">(201) 200-1851</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2392 Main Avenue, Penasauka
                                 </td>
                                 <td className="py-2">30/03/2018</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(2)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Emma Watson
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:emma@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2122288403">(212) 228-8403</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2289 5th Avenue, New York
                                 </td>
                                 <td className="py-2">11/07/2017</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(3)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Rowen Atkinson
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:rown@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2012001851">(201) 200-1851</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    112 Bostwick Avenue, Jersey City
                                 </td>
                                 <td className="py-2">05/04/2016</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(4)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Antony Hopkins
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:antony@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:9013243127">(901) 324-3127</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    3448 Ile De France St #242,{" "}
                                 </td>
                                 <td className="py-2">05/04/2018</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(5)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Jennifer Schramm
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:jennifer@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:8283829631">(828) 382-9631</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    659 Hannah Street, Charlotte
                                 </td>
                                 <td className="py-2">17/03/2016</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(13)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Raymond Mims
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:raymond@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:5624685646">(562) 468-5646</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2298 Locust Court, Artesia
                                 </td>
                                 <td className="py-2">12/07/2014</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(6)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Michael Jenkins
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:jenkins@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:3026138829">(302) 613-8829</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    4678 Maud Street, Philadelphia
                                 </td>
                                 <td className="py-2">15/06/2014</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(14)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Kristine Cadena
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:cadena@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:3172737814">(317) 273-7814</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    3412 Crestview Manor, Indianapolis
                                 </td>
                                 <td className="py-2">15/04/2015</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(7)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Ricky Antony
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:ricky@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2012001851">(201) 200-1851</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2392 Main Avenue, Penasauka
                                 </td>
                                 <td className="py-2">30/03/2018</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(8)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Emma Watson
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:emma@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2122288403">(212) 228-8403</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2289 5th Avenue, New York
                                 </td>
                                 <td className="py-2">11/07/2017</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(9)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Rowen Atkinson
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:rown@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:2012001851">(201) 200-1851</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    112 Bostwick Avenue, Jersey City
                                 </td>
                                 <td className="py-2">05/04/2016</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(10)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Antony Hopkins
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:antony@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:9013243127">(901) 324-3127</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    3448 Ile De France St #242
                                 </td>
                                 <td className="py-2">05/04/2018</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(11)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <img
                                                className="rounded-circle img-fluid"
                                                src={avartar1}
                                                alt=""
                                                width="30"
                                             />
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Jennifer Schramm
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:jennifer@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:8283829631">(828) 382-9631</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    659 Hannah Street, Charlotte
                                 </td>
                                 <td className="py-2">17/03/2016</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                              <tr className="btn-reveal-trigger">
                                 <td className="py-2 customer_shop_single">
                                    {chack(12)}
                                 </td>
                                 <td className="py-3">
                                    <Link to="/ecom-customers">
                                       <div className="media d-flex align-items-center">
                                          <div className="avatar avatar-xl mr-2">
                                             <div className="">
                                                <img
                                                   className="rounded-circle img-fluid"
                                                   src={avartar5}
                                                   width="30"
                                                   alt=""
                                                />
                                             </div>
                                          </div>
                                          <div className="media-body">
                                             <h5 className="mb-0 fs--1">
                                                Raymond Mims
                                             </h5>
                                          </div>
                                       </div>
                                    </Link>
                                 </td>
                                 <td className="py-2">
                                    <a href="mailto:raymond@example.com">
                                       info@example.com
                                    </a>
                                 </td>
                                 <td className="py-2">
                                    {" "}
                                    <a href="tel:5624685646">(562) 468-5646</a>
                                 </td>
                                 <td className="py-2 pl-5 wspace-no">
                                    2298 Locust Court, Artesia
                                 </td>
                                 <td className="py-2">12/07/2014</td>
                                 <td className="py-2 text-right">{drop}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Customers;
