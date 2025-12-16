import ProductCard from "./ProductCard";

    const products = [
    { id: 1, name: "1.0 Cable", price: 1200, image: "src/assets/Products/1.0.jpg", tag: "Hot" },
    { id: 2, name: "1.3 Cable", price: 1600, image: "src/assets/Products/1.3.jpg", tag: "Hot" },
    { id: 3, name: "2.1 Cable", price: 1200, image: "src/assets/Products/1.0.jpg", tag: "Latest" },
    { id: 4, name: "3.3 Cable", price: 1600, image: "src/assets/Products/1.3.jpg", tag: "Latest" }
    ];

export default function TrendingProducts() {
    return (
        <section className="trending-product" id="treanding">
        <div className="center-text">
            <h2>Some of our <span>Products</span></h2>
        </div>

        <div className="products">
            {products.map(p => (
            <ProductCard key={p.id} product={p} />
            ))}
        </div>
        </section>
    );
}
