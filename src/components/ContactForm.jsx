import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate(values) {
    const nextErrors = {};
    if (values.name.trim().length < 3) nextErrors.name = "Escribe un nombre de al menos 3 caracteres.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = "Ingresa un correo electrónico válido.";
    if (values.message.trim().length < 10) nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    return nextErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setForm(initialForm);
      setSent(true);
    }
  }

  return (
    <section id="contacto" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-copy">
        <h2 id="contact-title">¿Buscas una recomendación?</h2>
        <p>Cuéntanos qué tipo de experiencia quieres jugar y nuestro equipo te ayudará a encontrarla.</p>
        <dl className="contact-details">
          <div><dt>Correo</dt><dd>hola@novaplay.cl</dd></div>
          <div><dt>Horario</dt><dd>Lunes a sábado · 09:00 a 19:00</dd></div>
        </dl>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="contact-name">Nombre</label>
          <input
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            placeholder="Tu nombre"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="contact-email">Correo electrónico</label>
          <input
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="nombre@correo.cl"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="contact-message">Mensaje</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="contact-message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button className="btn btn-nova w-100" type="submit">Enviar mensaje</button>
        {sent && <p className="form-success" role="status">¡Mensaje enviado! Te responderemos pronto.</p>}
      </form>
    </section>
  );
}
