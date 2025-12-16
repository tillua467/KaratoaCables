import React, { useState } from "react";
import CardModal from "./CardModal";
import "./global.css";

const Card = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAvailable = product.available;

  const openModal = () => {
    if (!isAvailable) return;
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const image = product.hasMultiplePictures
    ? product.pictures[0]
    : product.pictures;

  return (
    <>
      <div
        className={`product-card ${!isAvailable ? "unavailable" : ""}`}
        onClick={openModal}
      >
        <div className="product-img-small">
          <img src={image} alt={product.name} />
        </div>

        <div className="product-info-small">
          <div className="product-name-small">{product.name}</div>
          <div className="product-price-small">{product.price}</div>
        </div>

        <button
          className="add-to-cart-small"
          disabled={!isAvailable}
          onClick={(e) => e.stopPropagation()}
        >
          {isAvailable ? "Add to cart" : "Sold out"}
        </button>
      </div>

      {isModalOpen && (
        <CardModal product={product} closeModal={closeModal} />
      )}
    </>
  );
};

export default Card;
