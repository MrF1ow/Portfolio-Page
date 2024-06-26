import { forwardRef } from "react";

/*
  Card component

  @param src: string
  @param alt: string

  @returns JSX.Element
*/
const Card = forwardRef<HTMLImageElement, ImageProperties>(({ src, alt }, ref) => (
  <img ref={ref} className='h-48 rounded-lg pointer-events-none' src={src} alt={alt} />
));

export default Card;
