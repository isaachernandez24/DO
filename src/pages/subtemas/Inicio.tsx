import React from "react";
import { Card, CardContent } from "../../componentes/ui/card";
import logoudo from "../../../imagenes/logoudo.png"; // Asegúrate que esta ruta sea correcta

export default function Inicio() {
  return (
    <Card className="contenido-principal">
      <CardContent className="p-6 space-y-6 text-center">
        
        {/* Logo institucional */}
        <div className="flex justify-center mb-4">
          <img
            src={logoudo}
            alt="Logo UDO"
            className="w-32 h-auto"
          />
        </div>

        {/* Información institucional */}
        <div className="text-sm text-gray-700 leading-tight space-y-1">
          <p className="font-semibold">UNIVERSIDAD DE ORIENTE</p>
          <p>NÚCLEO DE NUEVA ESPARTA</p>
          <p>ESCUELA DE INGENIERÍA Y CIENCIAS APLICADAS</p>
          <p>DEPARTAMENTO DE LICENCIATURA EN INFORMÁTICA</p>
          <p className="italic">DESARROLLO ORGANIZACIONAL (230-4644)</p>
        </div>

        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
          Transformando el Futuro: Desarrollo Organizacional en Acción
        </h1>

        {/* Descripción */}
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Una plataforma interactiva para aprender, explorar y evolucionar organizacionalmente.
        </p>
      </CardContent>
    </Card>
  );
}
