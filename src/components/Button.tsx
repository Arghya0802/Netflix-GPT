interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-red-600 w-full px-4 py-2 rounded-lg my-3 text-white"
      >
        {text}
      </button>
    </div>
  );
};
