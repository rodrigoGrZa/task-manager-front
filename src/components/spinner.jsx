const Spinner = ({ size = 50, thickness = 4 }) => {
  const spinnerStyle = {
    width: size,
    height: size,
    borderWidth: thickness,
  };

  return (
    <div className="flex flex-row space-x-2">
      <p>Saving</p>
      <div
        style={spinnerStyle}
        className={`border-2 border-t-2 border-white rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
