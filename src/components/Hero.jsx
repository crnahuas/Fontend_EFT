export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Tu próxima aventura comienza <span>ahora.</span></h1>
        <p>
          Descubre los lanzamientos que están marcando 2026 en PlayStation, Xbox, Nintendo y PC.
        </p>
        <div className="hero-actions">
          <a className="btn btn-nova btn-lg" href="#productos">Explorar catálogo <span aria-hidden="true">↓</span></a>
          <a className="btn btn-outline-light btn-lg" href="#contacto">Hablar con nosotros</a>
        </div>
        <ul className="hero-highlights" aria-label="Ventajas de NovaPlay">
          <li><strong>11</strong><span>títulos seleccionados</span></li>
          <li><strong>4</strong><span>ecosistemas de juego</span></li>
          <li><strong>24/7</strong><span>entrega digital</span></li>
        </ul>
      </div>
      <div className="hero-art">
        <span className="hero-kicker">Estreno destacado</span>
        <img src="./assets/img/marvels-wolverine.jpg" alt="Portada de Marvel's Wolverine para PlayStation 5" />
        <div className="hero-offer"><strong>Marvel’s Wolverine</strong><span>Disponible en PlayStation 5</span></div>
      </div>
    </section>
  );
}
