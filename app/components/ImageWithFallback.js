import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = '/placeholder-image.jpg',
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  return (
    <Image
      {...props}
      src={error ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        setError(true);
        setImgSrc(fallbackSrc);
      }}
    />
  );
} 