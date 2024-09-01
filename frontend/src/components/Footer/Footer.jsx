import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            fugiat similique quis excepturi aspernatur atque quibusdam velit
            dignissimos, dolore cupiditate quod voluptas corrupti praesentium
            impedit assumenda iste ullam repellat facilis enim, est iusto
            perferendis! Laboriosam eligendi sed necessitatibus repellat harum
            pariatur animi placeat odit ab, voluptatum, voluptate quidem
            mollitia eius?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 102 304 293</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
