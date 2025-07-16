import React from "react";
import { Card, CardContent } from "../componentes/ui/card";

export default function Recursos() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Recursos y Contacto</h2>
        <p><strong>Referencias recomendadas:</strong></p>
        <ul className="list-disc pl-5">
          <li>French, W. L., & Bell, C. H. (2008). <i>Desarrollo organizacional</i>. Pearson Educación.</li>
          <li>Schein, E. H. (2010). <i>Organizational Culture and Leadership</i>. Jossey-Bass.</li>
        </ul>
        <p><strong>Enlaces útiles:</strong> <a href="https://odnetwork.org" className="text-blue-600 underline">Organizational Development Network</a></p>
        <p><strong>Contacto:</strong> prof.desarrollo@universidad.edu</p>
      </CardContent>
    </Card>
  );
}
