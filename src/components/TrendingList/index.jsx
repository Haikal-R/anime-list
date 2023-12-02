import Image from "next/image";
import Link from "next/link";

const TrendingList = ({ api,title })  => {
  return (
    <div className="">
        <div className="p-2 m-2 mt-4 mb-3 bg-color-navbar">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-color-primary text-xl border-b-2 border-color-primary">{title}</h1>
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-color-primary flex items-start"
            key={index}
            >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={100}
              height={100}
              className="border border-color-primary"
            />
            <div className="ml-2 mt-1"> 
            <h3 className="text-sm font-bold">{anime.title}</h3>
            <h3 className="text-xl font-bold">{anime.score}</h3>
          </div>
          </Link>
        );
      })}
      </div>
    </div>
    </div>
  );
};

export default TrendingList;
