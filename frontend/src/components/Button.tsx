interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export const Button = ({ text, onClick, type }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-red-600 w-full px-4 py-2 rounded-lg my-3 text-white"
        type={type}
      >
        {text}
      </button>
    </div>
  );
};
