import React from "react";
import style from "./Footer.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.info}>
          <h4> About Us</h4>
          <p className={style.p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
          <p> Copyright ©2024 All rights reserved |</p>
        </div>

        <div className={style.form}>
          <h4> Newsletter</h4>
          <p className={style.p}> Stay update with our latest </p>


            <input
              className={style.input}
              type="text"
              placeholder="Enter Email"
            />
            <button className={style.button} type="submit">
              <FaLongArrowAltRight />
            </button>
        </div>

        <div className={style.socialmedia}>
          <h4> Follow Us </h4>
          <p className={style.p}> Let us be social </p>
          <div className={style.icon}>
            <Link>
              <FaTwitter />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
