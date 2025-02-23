const Img = ({ bgx, bgy, w = "w-10", h = "h-10", etc = "" }) => {
  return (
    <div
      className={`img-set ${w} ${h} ${etc}`}
      style={{
        backgroundPosition: `${bgx}px ${bgy}px`,
      }}
    ></div>
  );
};
export default Img;
