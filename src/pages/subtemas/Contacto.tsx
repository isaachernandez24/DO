import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Contacto() {
  return (
    <Card>
      <CardContent   className="contenido-principal mx-auto"
        style={{ maxWidth: "700px", padding: "1.5rem" }}>
        <h2 className="text-xl font-semibold mb-3">Contacto</h2>
        <p>Si deseas más información o tienes alguna consulta, puedes comunicarte con nosotros:</p>

        <ul className="mt-4 list-disc pl-6 space-y-2 text-align-center">
          <li>
            <strong>Thamar Rodríguez</strong><br />
            Teléfono: 0412-5389154<br />
            Correo: <a href="mailto:thamyrodvel.11@gmail.com" className="text-blue-600 underline">thamyrodvel.11@gmail.com</a>
          </li>

          <li>
            <strong>Isaac Hernández</strong><br />
            Teléfono: 0412-1098277<br />
            Correo: <a href="mailto:isaacalejandrohf@gmail.com" className="text-blue-600 underline">isaacalejandrohf@gmail.com</a>
          </li>

          <li>
            <strong>Edwin Rodríguez</strong><br />
            Teléfono: 0412-2971582<br />
            Correo: <a href="mailto:edwin71332@gmail.com" className="text-blue-600 underline">edwin71332@gmail.com</a>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
