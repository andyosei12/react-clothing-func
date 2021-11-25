import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const Shop = () => {
  const collections = SHOP_DATA;
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
