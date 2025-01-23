import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className={`flex items-center justify-center py-2 ${textColor}`}>
      <h1 className="">{text}</h1>
      <button className="pl-2 underline" onClick={() => navigate(linkTo)}>
        {linkText}
      </button>
    </div>
  );
};
