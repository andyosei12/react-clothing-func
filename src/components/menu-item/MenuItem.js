import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${styles["menu-item"]} ${styles[`${size}`]}`}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>Shop now</span>
      </div>
    </div>
  );
};

export default MenuItem;
