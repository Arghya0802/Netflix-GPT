import { IMG_CDN_URL } from "../utils/config";

export const MovieCard = ({
  posterPath,
  title,
}: {
  posterPath: string;
  title: string;
}) => {
  return (
    <div className="flex w-48 h-auto flex-shrink-0">
      <img src={`${IMG_CDN_URL}/${posterPath}`} alt={title} />
    </div>
  );
};
