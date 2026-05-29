const ProductCard = ({ title, description, price, image }) => {
    return (
        <article className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price.toFixed(2)}</p>
        </article>
    );
};

export default ProductCard;
