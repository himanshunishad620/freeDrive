export default function Separator() {
  return (
    <div className="my-3 flex w-full items-center gap-2">
      <hr className="flex-grow border-gray-300" />
      <span className="text-md text-gray-500">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>
  );
}
