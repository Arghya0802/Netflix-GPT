import { language } from "../utils/langConstants";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

export const GptSearchBar = () => {
  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form action="" onSubmit={handleFormSubmit} className="">
      <InputBox
        placeholder={language.hindi.placeholder}
        bgColor="bg-gray-500"
      />
      <Button
        text={language.hindi.search}
        bgColor="bg-red-500"
        textColor="text-white"
        type="submit"
      />
    </form>
  );
};
