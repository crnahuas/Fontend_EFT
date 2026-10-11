import { formatCurrency } from "../utils.js";

export function ProductCard({ product, isInCart, onDetails }) {
  const discount = Math.round((1 - product.offerPrice / product.normalPrice) * 100);

  return (
    <article className="card product-card h-100">
      <div className="product-image">
        <img src={product.image} alt={product.imageAlt} />
        <div className="product-badges">
          <span className="status-badge">{product.status || "Disponible"}</span>
          {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        </div>
      </div>
      <div className="card-body product-body">
        <p className="platforms">{product.platforms}</p>
        <h3>{product.name}</h3>
        <span className="category-pill">{product.category}</span>
        <p className="description">{product.description}</p>
        <div className="price-row" aria-label={`Precio oferta ${formatCurrency(product.offerPrice)}, precio normal ${formatCurrency(product.normalPrice)}`}>
          <strong>{formatCurrency(product.offerPrice)}</strong>
          {discount > 0 && <del>{formatCurrency(product.normalPrice)}</del>}
        </div>
        <div className="product-actions">
          <button className="btn btn-outline-nova w-100" type="button" onClick={() => onDetails(product)}>
            Ver detalles
          </button>
          <button
            className="btn btn-nova w-100"
            type="button"
            onClick={() => onDetails(product)}
            disabled={product.available === false}
          >
            {product.available === false
              ? "Próximamente"
              : isInCart ? "Elegir otra plataforma" : "Elegir plataforma"}
            {product.available !== false && <span aria-hidden="true">→</span>}
          </button>
        </div>
      </div>
    </article>
  );
}
