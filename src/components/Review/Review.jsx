import React from "react";
import style from "./Review.module.css";
import Pics from "../pics/Pics";
import { Rating } from "flowbite-react";

export const Review = () => {
  const reviews = [
    {
      id: 1,
      title: "lorem ipusm",
      description:
        " Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",
      url: Pics.icon1,
    },
    {
      id: 2,
      title: "lorem ipusm",
      description:
        " Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",
      url: Pics.icon2,
    },
  ];
  return (
    <div>
      <div className={style.parent}>
        <div className={style.text}>
          <h1>What kind of Coffee we serve for you </h1>
          <h5>Who are in extremely love with eco friendly system.</h5>
        </div>

        <div className={style.container}>
          {reviews?.map((e) => (
            <div className={style.card} key={e.id}>
              <img src={e.url} alt="" />
              <h3>
                {e.title}
                <div className={style.rating}>
                  <Rating>
                    <Rating.Star style={{ color: "gold" }} />
                    <Rating.Star style={{ color: "gold" }} />
                    <Rating.Star style={{ color: "gold" }} />
                    <Rating.Star filled={false} />
                    <Rating.Star filled={false} />
                  </Rating>
                </div>
              </h3>
              <p className={style.p}> {e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
