import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/site";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-cookies")({
  head: () => seo({ title: "Política de cookies | Mas Castellano Procuradores", description: "Información sobre el uso de cookies en el sitio web de Mas Castellano Procuradores.", path: "/politica-cookies" }),
  component: () => (
    <LegalPage title="Política de cookies">
      <h2>Uso actual de cookies</h2>
      <p>Este sitio web no utiliza cookies de análisis, publicidad ni seguimiento. Únicamente podrían emplearse elementos técnicos estrictamente necesarios para el funcionamiento del sitio, que no requieren consentimiento.</p>
      <h2>Herramientas de medición</h2>
      <p>Si en el futuro se incorporan herramientas de analítica, se solicitará previamente el consentimiento mediante un panel de configuración y se actualizará esta política con el detalle de cada cookie.</p>
      <h2>Gestión desde el navegador</h2>
      <p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento desde sus opciones de privacidad.</p>
    </LegalPage>
  ),
});
