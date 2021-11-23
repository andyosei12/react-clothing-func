import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles["menu-item"]} ${styles[`${size}`]}`}
      onClick={() => navigate(linkUrl)}
    >
      <div
        className={styles["background-image"]}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
