import { ProductCard } from "./ProductCard.jsx";

export function ProductList({ products, productsInCart, status, onDetails, onRetry }) {
  if (status === "loading") {
    return (
      <div className="catalog-message" role="status">
        <span className="loader" aria-hidden="true" />
        <div>
          <h3>Cargando catálogo</h3>
          <p>Estamos obteniendo los productos disponibles.</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="catalog-message catalog-error" role="alert">
        <span aria-hidden="true">!</span>
        <div>
          <h3>No pudimos cargar los productos</h3>
          <p>Comprueba tu conexión o vuelve a intentarlo.</p>
        </div>
        <button className="btn btn-outline-nova" type="button" onClick={onRetry}>Reintentar</button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="empty-state" role="status">
        <span aria-hidden="true">⌕</span>
        <h3>No encontramos juegos</h3>
        <p>Prueba otra búsqueda o selecciona todos los filtros.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-12 col-md-6 col-xl-4" key={product.id}>
          <ProductCard
            product={product}
            isInCart={productsInCart.has(product.id)}
            onDetails={onDetails}
          />
        </div>
      ))}
    </div>
  );
}
