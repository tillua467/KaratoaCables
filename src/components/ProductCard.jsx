export default function ProductCard({ product }) {
    return (
        <div className="row" data-aos="fade-up-right" data-aos-duration="1500">
        <img src={product.image} alt={product.name} />

        <div className="product-text">
            <h5>{product.tag}</h5>
        </div>

        <div className="heart-icon">
            <i className='bx bx-heart'></i>
        </div>

        <div className="ratting">
            ⭐⭐⭐⭐☆
        </div>

        <div className="price">
            <h4>{product.name}</h4>
            <p>{product.price}tk</p>
            <button className="add">Add to cart</button>
        </div>
        </div>
    );
}
