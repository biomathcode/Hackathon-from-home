const SvgIcon = ({ src, width, height }) => (
  <img src={`/img/images/${src}`} alt={src} with={width} height={height} className="imageNotLarge" />
);

export default SvgIcon;
