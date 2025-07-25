export default function IconButton({ icon, onClick, toolTip, disabled }) {
  return (
    <button
      disabled={disabled}
      title={toolTip}
      onClick={onClick}
      className={`rounded-full p-1 text-lg duration-200 md:p-2 md:text-xl ${disabled ? "cursor-not-allowed text-[#c0c0c0]" : "cursor-pointer text-[#5b5b5b] hover:bg-[rgb(230,239,250)] hover:text-blue-500"}`}
    >
      {icon}
    </button>
  );
}
