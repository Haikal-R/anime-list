"use client";

import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);          // Untuk buat Previous dan Next page
  const [topAnime, setTopAnime] = useState([]); //

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(popularAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div className="bg-color-secondary2 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-60 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
        />
      </div>
    </>
  );
};

export default Page;
