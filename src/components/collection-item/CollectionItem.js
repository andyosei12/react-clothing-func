import CustomButton from "../custom-button/CustomButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => dispatch(cartActions.addItem(item))}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
