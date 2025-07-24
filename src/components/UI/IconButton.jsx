export default function IconButton({ icon, onClick, toolTip, disabled }) {
  return (
    <button
      disabled={disabled}
      title={toolTip}
      onClick={onClick}
      className={`rounded-full p-2 text-xl duration-200 ${disabled ? "cursor-not-allowed text-[#c0c0c0]" : "cursor-pointer text-[#5b5b5b] hover:bg-[#f2f2f2]"}`}
    >
      {icon}
    </button>
  );
}
