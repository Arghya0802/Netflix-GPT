interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  bgColor?: string;
}

export const Button = ({ text, onClick, type, bgColor }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          bgColor ? `${bgColor} text-black` : `bg-red-600 text-white`
        } w-full px-4 py-2 rounded-lg my-3 hover:opacity-75`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
