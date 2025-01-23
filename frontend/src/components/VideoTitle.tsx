import { Button } from "./Button";
import { useSelector } from "react-redux";

interface VideoTitleProps {
  title: string;
  overview: string;
}
export function VideoTitle({ title, overview }: VideoTitleProps) {
  const primaryTrailerId = useSelector(
    (state: any) => state.movies.primaryTrailerId
  );

  return (
    <div className=" pt-28 px-6 md:px-24 absolute left-0 top-0 text-white hidden md:block">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 absolute w-1/2 flex gap-2">
        <div className="w-1/3 text-xl font-bold">
          <Button
            text="Play ▶"
            bgColor="bg-red-600"
            textColor="text-white"
            onClick={() => {
              window.open(
                `https://www.youtube.com/watch?v=${primaryTrailerId}`,
                "_blank"
              );
            }}
            height="h-12"
          />
        </div>
      </div>
    </div>
  );
}
