"use client";

export default function ProductImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.src = "/product-placeholder.jpg";
      }}
    />
  );
}
