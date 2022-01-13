// import SHOP_DATA from "./shop-data";
import { useSelector } from "react-redux";
import { selectShopData } from "../../store/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

const Shop = () => {
  const collections = useSelector((state) => selectShopData(state));
  // const collections = SHOP_DATA;
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
