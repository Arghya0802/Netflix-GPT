interface HeadingProps {
  text: string;
  textColor?: string;
}

export const Heading = ({ text, textColor }: HeadingProps) => {
  return (
    <div
      className={`text-3xl flex justify-center items-center mb-2 font-bold py-2 ${textColor}`}
    >
      {text}
    </div>
  );
};
