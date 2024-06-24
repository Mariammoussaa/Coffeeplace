import React from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className={style.parent}>
        <div className={style.container}>
          <div className={style.text}>
            <h5> NOW YOU CAN FEEL THE ENERGY </h5>
            <h1 className={style.h1}>Start your day with a black Coffee</h1>
            <Link className={style.button}> Buy Now </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
