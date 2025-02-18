const Img = ({ bgx, bgy }) => {
  return (
    <div
      className={`img-set w-10 h-10`}
      style={{
        backgroundPosition: `${bgx}px ${bgy}px`,
      }}
    ></div>
  );
};
export default Img;
