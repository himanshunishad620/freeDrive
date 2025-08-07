import Spinner from "./Spinner";

export default function Button({
  startIcon,
  label,
  isLoading,
  type,
  onClick,
  disabled,
}) {
  return (
    <button
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
      className="flex h-10 w-full cursor-pointer items-center justify-center gap-4 rounded-lg border-2 border-[#037bfc] bg-gradient-to-t from-[#037bfc] to-[#8bc3ff] px-4 font-semibold text-white duration-200 hover:opacity-80"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {startIcon}
          {label}
        </>
      )}
    </button>
  );
}
