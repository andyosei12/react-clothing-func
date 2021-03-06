import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../store/shop/shop.selectors";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import "./CollectionOverview.styles.scss";

const CollectionOverview = () => {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
