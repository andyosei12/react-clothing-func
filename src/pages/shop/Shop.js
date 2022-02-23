import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import { retrieveCollection } from "../../firebase/firebase.utils";
import Collection from "../collection/Collection";
import { shopActions } from "../../store/shop/shop.slice";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const Shop = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
  const CollectionsPageWithSpinner = WithSpinner(Collection);

  useEffect(() => {
    async function fetchCollections() {
      const collections = await retrieveCollection();
      return collections;
    }

    async function getCollections() {
      const collectionData = await fetchCollections();
      dispatch(shopActions.setShopData(collectionData));
    }

    getCollections().then(() => setIsLoading(false));
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={<CollectionsOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path=":collectionId"
          element={<CollectionsPageWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
};

export default Shop;
