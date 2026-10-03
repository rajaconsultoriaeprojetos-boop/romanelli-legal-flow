import React from "react";

/**
 * Motivo geométrico sutil inspirado no símbolo da logomarca.
 * Usado como textura de fundo e divisores em baixa opacidade.
 * Não substitui a logo — é apenas um eco decorativo.
 */
export default function GeometricMotif({ className = "", opacity = 0.06, color = "#C29B6D" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{ opacity }}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 16 L184 168 L16 168 Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M100 52 L152 144 L48 144 Z" stroke={color} strokeWidth="1" strokeLinejoin="round" />
      <path d="M100 88 L124 132 L76 132 Z" stroke={color} strokeWidth="0.8" strokeLinejoin="round" />
    </svg>
  );
}