import { createFileRoute } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/aviso-legal")({
  head: () => seo({ title: "Aviso legal | Mas Castellano Procuradores", description: "Aviso legal e información del titular del sitio web de Mas Castellano Procuradores.", path: "/aviso-legal" }),
  component: () => (
    <LegalPage title="Aviso legal">
      <h2>Titular del sitio web</h2>
      <p>Este sitio web es titularidad de {SITE.professional}, {SITE.role}, que desarrolla su actividad bajo la denominación comercial {SITE.name}.</p>
      <ul>
        <li>Teléfono: {SITE.phone}</li>
        <li>Correo electrónico: {SITE.email}</li>
        <li>Dominio: mascastellanoprocuradores.com</li>
      </ul>
      <p>Los datos identificativos adicionales exigidos por la normativa de servicios de la sociedad de la información (NIF, domicilio profesional y colegio profesional de adscripción) se incorporarán a este aviso.</p>
      <h2>Objeto</h2>
      <p>El sitio tiene carácter informativo sobre la actividad profesional de procura. Su contenido no constituye asesoramiento jurídico ni sustituye la consulta a un profesional sobre un asunto concreto.</p>
      <h2>Propiedad intelectual</h2>
      <p>Los textos, diseño y elementos gráficos de este sitio pertenecen a su titular o se utilizan con autorización. Queda prohibida su reproducción sin autorización previa.</p>
      <h2>Responsabilidad</h2>
      <p>El titular procura que la información sea correcta y actual, sin garantizar la ausencia de errores. No se responsabiliza del uso que terceros hagan de la información publicada.</p>
    </LegalPage>
  ),
});
