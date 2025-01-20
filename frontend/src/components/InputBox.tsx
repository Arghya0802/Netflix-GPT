interface InputBoxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  bgColor?: string;
  reference?: React.Ref<HTMLInputElement>;
  textColor?: string;
}

export const InputBox = ({
  onChange,
  placeholder,
  type = "text",
  bgColor,
  reference,
  textColor,
}: InputBoxProps) => {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        ref={reference}
        className={`p-2 rounded-lg ${
          bgColor ? `${bgColor} text-white` : `bg-slate-100`
        } mb-2 w-full px-5 focus:outline-none text-black`}
      />
    </div>
  );
};
