export default function SignUpButton({ icon, text }) {
  return (
    <button
      type="button"
      className="relative flex h-9 w-full cursor-pointer items-center justify-center rounded-md border-2 border-gray-300"
    >
      <img
        className="absolute top-[50%] left-2 h-5 w-5 translate-y-[-50%] transform"
        src={icon}
        alt=""
      />
      <p className="text-sm text-gray-400"> {text}</p>
    </button>
  );
}
