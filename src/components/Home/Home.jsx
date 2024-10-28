import { useDispatch, useSelector } from "react-redux";
import { cardContent } from "../../data";
import { Title } from "../Title/Title";
import Card from "../Card/Card";
import Pagination from "../Pagenation/Pagenation";
import { useEffect, useState } from "react";
import { getLastFourCards } from "../../redux/slice";

const Home = () => {
  // _______________________________________________________________________________

  const cards = useSelector((state) => state.cards.cards);
  const [currentPageData, setCurrentPageData] = useState([]);

  const dispatch = useDispatch();

  const lastFourBlogs = useSelector((state) => state.cards.lastFourBlogs);

  useEffect(() => {
    dispatch(getLastFourCards());
  }, [dispatch]);

  // _______________________________________________________________________________

  return (
    <div className="dark:bg-dark-main-color px-7%">
      {/* Header Section */}
      <header className="pt-32 max-iPad:pt-20 mb-12">
        <h2 className="uppercase text-[17.7vw] font-bold text-black dark:text-white border-y border-[#00000057] dark:border-white whitespace-nowrap">
          The Blog
        </h2>
      </header>
      <Title title="Recent blog posts" />

      <section className="flex flex-wrap justify-between  gap-8 max-1087:flex-col ">
        {/* ----------------------------------------------------------------------------------------- */}

        {/* First Card */}
        {lastFourBlogs.length > 0 && (
          <Card
            {...lastFourBlogs[0]}
            className=" w-[48%] max-1087:w-full"
            height={true}
          />
        )}

        {/* Group of Cards */}
        <div className="flex flex-col gap-4 w-[46%] max-1087:w-full">
          {lastFourBlogs.slice(1, 3).map((card, index) => (
            <Card
              {...card}
              className=" flex justify-between max-756:flex-col"
              responsive="max-756:w-full"
              row={true}
            />
          ))}
        </div>

        {/* Last Card */}
        {lastFourBlogs.length > 3 && (
          <Card
            {...lastFourBlogs[3]}
            className="order-2 w-full flex justify-between max-1087:flex-col"
            responsive="max-1087:w-full"
            row={true}
            height={true}
          />
        )}
        {/* ----------------------------------------------------------------------------------------- */}
      </section>

      <section className="mt-30">
        <Title title="All blog posts" />
        <div className="flex justify-between items-center flex-wrap gap-8 max-sm:justify-center ">
          {currentPageData.map((e, i) => {
            return (
              <Card
                key={i}
                {...e}
                className="w-[31%] h-[476px]  dark:bg-dark-main-color flex-wrap max-1200:w-[47%] max-iPad:w-[310px] max-sm:w-full"
              />
            );
          })}
        </div>
        <Pagination data={cards} setCurrentPageData={setCurrentPageData} />
      </section>
    </div>
  );
};

export default Home;
