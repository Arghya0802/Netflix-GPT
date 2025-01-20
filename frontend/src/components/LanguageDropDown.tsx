import { useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

interface langDropDownProps {
  reference?: React.Ref<HTMLOptionElement>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const LanguageDropDown = ({
  reference,
  onChange,
}: langDropDownProps) => {
  const userLanguage = useSelector((state: any) => state.GPT.userLanguage);
  let ind = -1;

  for (let i = 0; i < SUPPORTED_LANGUAGES.length; i++) {
    if (SUPPORTED_LANGUAGES[i].identifer === userLanguage) {
      ind = i;
      break;
    }
  }

  [SUPPORTED_LANGUAGES[0], SUPPORTED_LANGUAGES[ind]] = [
    SUPPORTED_LANGUAGES[ind],
    SUPPORTED_LANGUAGES[0],
  ];

  return (
    <div>
      <select
        className=" focus:outline-none p-2 rounded-lg bg-gray-600 text-white"
        onChange={onChange}
      >
        {SUPPORTED_LANGUAGES.map((language) => {
          return (
            <option
              key={language.identifer}
              value={language.identifer}
              ref={reference}
              className=""
              //   onChange={onChange}
            >
              {language.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
