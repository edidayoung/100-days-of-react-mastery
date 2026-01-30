import './ProductCard.css'

export default function ProductCard({ id, name, price, description, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <div className="product-footer">
          <span className="price">${price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
