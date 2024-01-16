import React from "react";
import img from "../img/Logo.png";
import img1 from "../img/p-2.png";
import img2 from "../img/p-3.png";
import img3 from "../img/p-4.png";
import img4 from "../img/p-5.png";
import img5 from "../img/Frame 136278.png";
import "../css/task.css";
import "../css/media.css"

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  color,
} from "@chakra-ui/react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { RiSearch2Line } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

const Task = () => {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="header">
            <img src={img} alt="" />
          </div>

          <div className="content">
            <h1>LOGO</h1>
          </div>

          <div className="icon d-flex">
            <RiSearch2Line style={{ fontsize: "24px" }} />
            <IoHeartOutline />
            <BsHandbag />
            <CiUser />
            <div className="d-flex">
              <h4>ENG</h4>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {/* Product section */}
        <div className="heading">
          <h1>Discover our products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        {/* products */}

        <div className="recommended">
          <div className="items">
            <div className="pro-d">
              <span>3425</span> <p>ITEMS</p>
            </div>
            <div>
              <p>SHOW FILTER</p>

            </div>
          </div>
          <div className="dp">
            <Menu closeOnSelect={false}>
              <MenuButton
                style={{ border: "none", backgroundColor: "transparent" }}
                as={Button}
                colorScheme="blue"
              >
                RECOMMENDED
              </MenuButton>
              <MenuList minWidth="240px">
                <MenuOptionGroup defaultValue="asc" type="radio">
                  <MenuItemOption
                    style={{ border: "none", padding: "15px" }}
                    value="asc"
                  >
                    recommended
                  </MenuItemOption>
                  <MenuItemOption
                    style={{ border: "none", padding: "15px" }}
                    value="desc"
                  >
                    Newest first
                  </MenuItemOption>
                  <MenuItemOption
                    style={{ border: "none", padding: "15px " }}
                    value="desc"
                  >
                    popular
                  </MenuItemOption>
                  <MenuItemOption
                    style={{ border: "none", padding: "15px" }}
                    value="desc"
                  >
                    Price : high to low
                  </MenuItemOption>
                  <MenuItemOption
                    style={{ border: "none", padding: "15px" }}
                    value="desc"
                  >
                    Price : low to high
                  </MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
              </MenuList>
            </Menu>
          </div>
        </div>

        {/* product card section  */}
        <div className="row-card">
          <div className="card">
            <img src={img1} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart-red">
                <FcLike />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img1} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="" width="100%" />
            <p className="title"> PPXOC Milkyway dress in...</p>
            <div className="d-flex">
              <p className="sub-title">
                Sign in or Create an account to see pricing
              </p>
              <div className="heart">
                <IoHeartOutline />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section  */}

      <footer>
        <div className="container-fluid bg-black">
          <div className="container">
            <div className="row first-part">
              <div className="col-6">
                <h5>Be the first to know</h5>
                <p className="sign">Sign up for updates from mettā muse.</p>
                <input type="text" placeholder="Enter Your e-Mail" />
                <button className="btn">Subscribe</button>
              </div>
              <div className="col-6">
                <h5>CONTACT US</h5>
                <div className="contact">
                  <p>+44 221 133 5360</p>
                  <a>customercare@mettamuse.com</a>
                </div>
                <h2 className="currency">Currency</h2>
                <h2 className="usd">USD</h2>
                <p className="trans">
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </div>
            </div>
            <hr className="divider" />
            <div className="row second-part">
              <div className="col-4">
                <div className="about">
                  <h4>mettā muse</h4>
                  <ul>
                    <li>About Us</li>
                    <li>Stories</li>
                    <li>Artisans</li>
                    <li>Boutiques</li>
                    <li>Contact Us</li>
                    <li>EU Compliances Docs</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="Quick-Links">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>Orders & Shipping</li>
                    <li>Join/Login as a Seller </li>
                    <li>Payment & Pricing</li>
                    <li>Return & Refunds</li>
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="payment">
                  <h4>Follow Us</h4>
                  <div className="icons">
                    <IoLogoInstagram
                      style={{ color: "white", fontSize: "30px" }}
                    />
                    <CiLinkedin style={{ color: "white", fontSize: "30px" }} />
                  </div>
                  <h4>mettā muse Accepts</h4>
                  <img src={img5} alt="" className="pay-option" />
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Task;
