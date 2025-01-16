interface InputBoxProps {
  onChange?: () => void;
  placeholder: string;
  type?: string;
  bgColor?: string;
}

export const InputBox = ({
  onChange,
  placeholder,
  type = "text",
  bgColor,
}: InputBoxProps) => {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`p-2 rounded-lg ${
          bgColor ? `${bgColor} text-white` : `bg-slate-100`
        } mb-2 w-full px-5 focus:outline-none text-black`}
      />
    </div>
  );
};
