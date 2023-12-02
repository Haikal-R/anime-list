import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword); //buat hilangin % di output pencarian
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <div className="bg-color-secondary2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-60 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
        <Header title={`Pencarian untuk ${decodedKeyword}...`} />
        <AnimeList api={searchAnime} />
        </div>
      </section>
    </>
  );
};

export default Page;
