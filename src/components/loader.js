const Loader = () => {
  return (
    <div className="banter-loader">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="banter-loader__box"></div>
      ))}
    </div>
  );
};

export default Loader;
