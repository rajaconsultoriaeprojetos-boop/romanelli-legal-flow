import * as React from "react";

const Image = React.forwardRef(function Image(
  {
    src,
    alt = "",
    className = "",
    fittingType = "fill",
    focalPointX = 0.5,
    focalPointY = 0.5,
    originWidth: _originWidth,
    originHeight: _originHeight,
    quality: _quality,
    ...props
  },
  ref
) {
  const objectFit = fittingType === "fit" ? "contain" : "cover";
  const objectPosition = `${(focalPointX ?? 0.5) * 100}% ${(focalPointY ?? 0.5) * 100}%`;

  if (!src) {
    return <div ref={ref} role="img" aria-label={alt} className={className} />;
  }

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      style={{ objectFit, objectPosition }}
      {...props}
    />
  );
});

export { Image };
