import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
    <div className="bg-color-secondary2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-60 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        <div className="bottom-0 left-0 w-full h-1 bg-color-accent"></div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-5 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={500}
          height={250}
          className="w-full object-cover"
        />
        <p className="text-xl text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer />
      </div>
    </div>
    </>
  );
};

export default Page;
