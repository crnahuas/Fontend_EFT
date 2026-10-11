export function Header({ cartCount }) {
  const cartLabel = `${cartCount} ${cartCount === 1 ? "producto" : "productos"}`;

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-shell" aria-label="Navegación principal">
        <a className="navbar-brand brand" href="#inicio" aria-label="NovaPlay, inicio">
          <span className="brand-mark" aria-hidden="true">N</span>
          <span>Nova<strong>Play</strong></span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navigation"
          aria-controls="main-navigation"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="main-navigation">
          <div className="navbar-nav ms-auto align-items-lg-center nav-links">
            <a className="nav-link" href="#productos">Juegos</a>
            <a className="nav-link" href="#contacto">Contacto</a>
            <a className="nav-link cart-link" href="#carrito" aria-label={`Carrito con ${cartLabel}`}>
              Carrito <span className="cart-badge">{cartCount}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
