import React from "react";
import style from "./Blog.module.css";
import Pics from '../pics/Pics'
import { Link } from "react-router-dom";
const Blog = () => {
  const products = [
    {
      id: 1,
      title: "Portable latest Fashion for young women",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "31st January, 2018",
      imgSrc: Pics.coffee1,
    },
    {
      id: 2,
      title: "Portable latest Fashion for young women",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "31st January, 2018",
      imgSrc: Pics.coffee2,
    },
  ];
  return (
    <div>
      <div className={style.parent}>
        <div className={style.text}>
          <h1>What kind of Coffee we serve for you </h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div className={style.container}>
          {products?.map((r) => (
            <div className={style.card} key={r.id}>
              <img src={r.imgSrc} alt="" />
              <div className={style.paragraph}>
                <div className={style.link}>
                  <Link>Travel</Link>
                  <Link>Life Style</Link>
                </div>
                <h3>{r.title}</h3>
                <p>{r.des}</p>
                <h4>{r.date}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
