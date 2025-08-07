export default function TextArea({ onChange, value, required = true }) {
  return (
    <textarea
      onChange={onChange}
      required={true}
      value={value}
      name="msg"
      placeholder="Type Your Message"
      className="h-50 w-80 resize-none rounded-md border-2 bg-[#fdfdfd] p-5 font-semibold text-[#6a6a6a] outline-none"
    />
  );
}
