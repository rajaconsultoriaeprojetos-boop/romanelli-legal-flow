import React from "react";
import { Image } from "@/components/ui/image";
import { LOGO_URL, LOGO_LIGHT_URL } from "./assets";

export default function BrandLogo({ variant = "dark", className = "", imgClassName = "" }) {
  const url = variant === "light" ? (LOGO_LIGHT_URL || LOGO_URL) : LOGO_URL;

  if (!url) return null;

  return (
    <div className={`relative inline-flex items-center overflow-hidden ${className}`}>
      <Image
        src={url}
        alt="Logomarca Romanelli Abdalla Advocacia"
        fittingType="fill"
        focalPointX={0.5}
        focalPointY={0.5}
        className={`absolute inset-0 h-full w-full ${imgClassName}`}
      />
    </div>
  );
}