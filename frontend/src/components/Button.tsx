interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  bgColor?: string;
  textColor?: string;
}

export const Button = ({
  text,
  onClick,
  type,
  bgColor,
  textColor,
}: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${bgColor ? `${bgColor}` : `bg-red-600`} ${
          textColor ? `${textColor}` : `text-black`
        } w-full px-4 py-2 rounded-lg my-3 hover:opacity-75`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
