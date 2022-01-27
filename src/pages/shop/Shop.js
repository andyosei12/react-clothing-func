import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

const Shop = () => {
  // const collections = SHOP_DATA;
  return (
    <div>
      <Routes>
        <Route path="*" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default Shop;
