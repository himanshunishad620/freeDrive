const Spinner = ({ isBlack }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className={`h-6 w-6 animate-spin rounded-full border-3 ${isBlack ? "border-[#c0c0c0]" : "border-white"} border-t-transparent`}
      ></div>
    </div>
  );
};

export default Spinner;
