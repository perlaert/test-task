import React from "react";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import GetApp from "@material-ui/icons/GetApp";
import Visibility from "@material-ui/icons/Visibility";
import "../../index.css";
import style from "./CardItem.module.css";

const CardItem = ({ item }) => {
  return (
    <li className={style.card}>
      <div>
        <img src={item.largeImageURL} alt={item.tags} className={style.img} />
      </div>
      <div className={style.thumb}>
        <h2>{item.user}</h2>
        <p>#{item.tags}</p>
        <ul className={style.points}>
          <li className={style.item}>
            <span className={style.icon}>
              <FavoriteBorder />
            </span>
            {item.likes}
          </li>
          <li className={style.item}>
            <span className={style.icon}>
              <Visibility />
            </span>
            {item.views}
          </li>
          <li className={style.item}>
            <span className={style.icon}>
              <GetApp />
            </span>
            {item.downloads}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CardItem;
