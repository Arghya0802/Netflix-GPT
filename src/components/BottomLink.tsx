interface BottomLinkProps {
  text: string;
  linkTo: string;
  linkText: string;
  textColor?: string;
}

export const Bottomlink = ({
  text,
  linkTo,
  linkText,
  textColor,
}: BottomLinkProps) => {
  return (
    <div className={`flex items-center justify-center py-2 ${textColor}`}>
      <h1 className="">{text}</h1>
      <a href={linkTo} className="pl-2 underline">
        {linkText}
      </a>
    </div>
  );
};
