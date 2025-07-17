import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";

export default function Recursos() {
  return (
    <Card>
      <CardContent className="contenido-principal space-y-6 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Recursos Académicos </h2>

        {/* Sección: Bibliografía */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">📚 Referencias Bibliográficas Recomendadas</h3>
          <p>
            A continuación se presentan algunos textos y autores clave que permiten profundizar en los conceptos, modelos y prácticas relacionadas con el Desarrollo Organizacional. Estas referencias constituyen una base teórica sólida para el estudio de la asignatura:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              French, W. L., & Bell, C. H. (2008). <i>Desarrollo Organizacional</i>. Pearson Educación.  
              <br /><span className="text-sm text-gray-600">Una obra clásica que aborda en profundidad los fundamentos, procesos y técnicas del cambio organizacional.</span>
            </li>
            <li>
              Schein, E. H. (2010). <i>Organizational Culture and Leadership</i>. Jossey-Bass.  
              <br /><span className="text-sm text-gray-600">Este libro analiza cómo la cultura organizacional influye en el liderazgo y en los procesos de transformación organizacional.</span>
            </li>
            <li>
              Cummings, T. G., & Worley, C. G. (2014). <i>Organization Development and Change</i>. Cengage Learning.  
              <br /><span className="text-sm text-gray-600">Un enfoque contemporáneo sobre el diseño de estrategias para el cambio planificado en las organizaciones.</span>
            </li>
          </ul>
        </section>

        {/* Sección: Recursos digitales */}
        <section>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">🌐 Recursos Digitales</h3>
          <p>
            Se recomienda explorar los siguientes portales especializados, los cuales ofrecen artículos, investigaciones, buenas prácticas y redes de colaboración profesional en el ámbito del Desarrollo Organizacional:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <a href="https://odnetwork.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Organizational Development Network
              </a> — Comunidad global de profesionales en desarrollo organizacional con recursos, publicaciones y eventos.
            </li>
            <li>
              <a href="https://www.hrdconnect.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                HRD Connect
              </a> — Publicación especializada en liderazgo, cambio organizacional y gestión del talento.
            </li>
            <li>
              <a href="https://www.managementhelp.org/od/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Free Management Library – OD Section
              </a> — Biblioteca gratuita con contenido educativo sobre procesos de cambio, liderazgo, clima organizacional y más.
            </li>
          </ul>
        </section>

        {/* Sección: Contacto */}
        
      </CardContent>
    </Card>
  );
}
