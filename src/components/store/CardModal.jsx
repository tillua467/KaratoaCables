import React, { useEffect, useRef, useState } from "react";

const CardModal = ({ product, closeModal }) => {
  const modalRef = useRef(null);
  const [quantity, setQuantity] = useState(0);

  const pictures = product.hasMultiplePictures
    ? product.pictures
    : [product.pictures];

  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] =
    useState(product.availableColors[0]?.name);

  const nextImage = () =>
    setCurrentImage((i) => (i + 1) % pictures.length);

  const prevImage = () =>
    setCurrentImage((i) => (i - 1 + pictures.length) % pictures.length);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && closeModal();
    const outside = (e) =>
      modalRef.current && !modalRef.current.contains(e.target) && closeModal();

    document.addEventListener("keydown", esc);
    document.addEventListener("mousedown", outside);

    return () => {
      document.removeEventListener("keydown", esc);
      document.removeEventListener("mousedown", outside);
    };
  }, [closeModal]);

  return (
    <div className="modal-overlay">
      <div className="product-modal" ref={modalRef}>
        <button className="modal-close-btn" onClick={closeModal}>
          ×
        </button>

        <div className="modal-content-desktop">
          <div className="modal-image-large-wrapper">
            <img src={pictures[currentImage]} alt={product.name} />

            {pictures.length > 1 && (
              <>
                <button className="image-nav-btn prev" onClick={prevImage}>
                  ‹
                </button>
                <button className="image-nav-btn next" onClick={nextImage}>
                  ›
                </button>
              </>
            )}
          </div>

          <div className="modal-details">
            <h2 className="modal-product-name">{product.name}</h2>
            <p className="modal-price">{product.price}</p>
            <p className="modal-description">{product.description}</p>

            {product.availableColors.length > 1 && (
              <div className="color-selection">
                <label>Color: <b>{selectedColor}</b></label>
                <div className="color-options">
                  {product.availableColors.map((c) => (
                    <button
                      key={c.hexCode}
                      className={`color-swatch ${
                        selectedColor === c.name ? "selected" : ""
                      }`}
                      style={{ backgroundColor: c.hexCode }}
                      onClick={() => setSelectedColor(c.name)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="modal-footer">
              <div className="modal-quantity-controls">
                <button className="qty-btn" onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
                <input
                  className="qty-input"
                  value={quantity}
                  type="number"
                  onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                />
                <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>

              <button
                className="add-to-cart-desktop"
                disabled={quantity === 0}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="modal-content-mobile">
          <img src={pictures[currentImage]} alt={product.name} />

          <h2>{product.name}</h2>
          <p className="modal-price">{product.price}</p>

          <div className="modal-quantity-controls">
            <button className="qty-btn" onClick={() => setQuantity(q => Math.max(0, q - 1))}>-</button>
            <input
              className="qty-input"
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
            />
            <button className="qty-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <button className="add-to-cart-mobile" disabled={quantity === 0}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
