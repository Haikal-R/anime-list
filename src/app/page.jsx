import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import TrendingList from "@/components/TrendingList";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", `limit=5`);

  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recomendedAnime = reproduce(recomendedAnime, 5);

  let trendingAnime = await getNestedAnimeResponse("top/reviews", `entry`);
  trendingAnime = { data: trendingAnime.slice(0, 5) };
  
  let topReview = await getNestedAnimeResponse("top/reviews", `entry`);
  topReview = { data: topReview.slice(0, 5) };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-9 col-span-12">
          <section>
            <Header
              title="Populer Anime"
              linkTitle="Lihat Semua"
              linkHref="/populer"
            />
            <AnimeList api={topAnime} />
          </section>
          <section>
            <Header title="Top Review" linkTitle="Lihat Semua" linkHref="/topReviews" />
            <AnimeList api={topReview} />
          </section>
          <section>
            <Header title="Rekomendasi Anime" />
            <AnimeList api={recomendedAnime} />
          </section>
        </div>
        <div className="lg:col-span-3 col-span-12">
          <section>
            <TrendingList api={trendingAnime} title="Trending Anime" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
