import { Link } from "react-router-dom";
import styles from "./CollectionPreview.module.scss";
import CollectionItem from "../collection-item/CollectionItem";
import { useLocation } from "react-router-dom";

const CollectionPreview = ({ title, items }) => {
  const location = useLocation();
  return (
    <div className={styles["collection-preview"]}>
      <Link to={`${location.pathname}/${title.toLowerCase()}`}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
      </Link>

      <div className={styles.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
