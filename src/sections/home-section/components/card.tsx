

function Card({ src, alt, style }: ImageProperties): JSX.Element {
  return <img className={style} src={src} alt={alt} />;
}

export default Card;
