const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div>
      <div className="flex justify-center items-center py-5 px-2 gap-4 text-xl text-color-primary">
        {page <= 1 ? null : (
          <button
            onClick={handlePrevPage}
            className=" md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
          >
            PREV
          </button>
        )}

        <p>
          {page} of {lastPage}
        </p>

        {page >= lastPage ? null : (
          <button
            onClick={handleNextPage}
            className=" md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
