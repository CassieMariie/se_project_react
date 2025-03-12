import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ handleCardClick, handleActiveModal }) {
  return (
    <div className="clothes-section">
      <div className="clothes-content">
        <p className="clothes-text">Your Items</p>
        <button
          className="clothes-button"
          handleActiveModal={handleActiveModal}
        >
          +Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {defaultClothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
