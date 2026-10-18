import { createFileRoute } from "@tanstack/react-router";
import { seo, SITE } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-privacidad")({
  head: () => seo({ title: "Política de privacidad | MMC Procuradores", description: "Información sobre el tratamiento de datos personales en el sitio web de MMC Procuradores.", path: "/politica-privacidad" }),
  component: () => (
    <LegalPage title="Política de privacidad">
      <h2>Responsable del tratamiento</h2>
      <p>{SITE.professional}, {SITE.role} ({SITE.name}). Contacto: {SITE.email} · {SITE.phone}.</p>
      <h2>Datos tratados y finalidad</h2>
      <p>A través del formulario de contacto se recogen nombre, despacho o empresa, correo electrónico, teléfono (opcional) y el contenido del mensaje, con la única finalidad de atender la consulta y, en su caso, mantener la comunicación profesional derivada.</p>
      <h2>Base jurídica</h2>
      <p>El consentimiento de la persona interesada, manifestado al marcar la casilla de aceptación antes de enviar el formulario, y, en su caso, la aplicación de medidas precontractuales a petición del interesado.</p>
      <h2>Conservación</h2>
      <p>Los datos se conservarán durante el tiempo necesario para atender la consulta y, posteriormente, durante los plazos legalmente exigibles.</p>
      <h2>Destinatarios</h2>
      <p>No se cederán datos a terceros salvo obligación legal. Los datos se alojan en proveedores tecnológicos que actúan como encargados del tratamiento con las garantías adecuadas.</p>
      <h2>Derechos</h2>
      <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {SITE.email}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
    </LegalPage>
  ),
});
