import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Collection.styles.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";

const Collection = () => {
  const { collectionId } = useParams();
  const collections = useSelector(({ shop }) => shop.shopData[collectionId]);
  const { title, items } = collections;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
