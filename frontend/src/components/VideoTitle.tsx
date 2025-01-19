import { Button } from "./Button";

interface VideoTitleProps {
  title: string;
  overview: string;
}
export function VideoTitle({ title, overview }: VideoTitleProps) {
  return (
    <div className=" pt-[15%] px-6 md:px-24 absolute left-0 top-0 text-white">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 absolute w-1/2 flex gap-2">
        <Button text="Play ▶" bgColor="bg-gray-400" />
        <Button text="More Info ℹ" bgColor="bg-gray-400" />
      </div>
    </div>
  );
}
