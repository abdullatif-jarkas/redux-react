import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateLastTenCards } from "../../redux/slice";
import Card from "../Card/Card";
import { Title } from "../Title/Title";
import Subscribe from "../Subscribe/Subscribe";

const BlogDetails = () => {
  // _______________________________________________________________________________

  const { id } = useParams();
  const dispatch = useDispatch();

  const allCards = useSelector((state) => state.cards.cards);
  const lastTenCards = useSelector((state) => state.cards.lastTenCards);

  const currentCard = allCards.find((card) => card.id.toString() === id);

  useEffect(() => {
    if (currentCard) {
      dispatch(updateLastTenCards(currentCard.id));
    }
  }, [currentCard, dispatch]);
  // _______________________________________________________________________________

  return (
    <div className="flex px-7% pt-126 gap-8 dark:bg-dark-main-color max-756:flex-col-reverse max-iPad:px-2%">
      <aside className="w-[342px] pl-8 max-756:w-full max-iPad:p-0 1440:w-[30%]">
        <Title title="Recent blog posts" />
        <div className="flex flex-col gap-6 ">
          {lastTenCards.map((card) => (
            <div key={card.id}>
              <Card {...card} className="w-full" />
            </div>
          ))}
        </div>
      </aside>
      <main className="w-[68%] pr-8 max-iPad:p-0 max-756:w-full">
        <p className="text-sm font-semibold text-purple">
          {currentCard?.author}
        </p>
        <h2 className="text-4xl font-bold dark:text-white py-8">
          {currentCard?.title}
        </h2>
        <div className="mb-3 text-dark-gray dark:text-gray">
          <img className="w-full mb-8 object-contain" src={currentCard?.image} alt="img" />

          <p className="my-3">{currentCard?.mainText}</p>
          <p className="my-3">{currentCard?.anotherText}</p>
          <h3 className="font-bold max-w-[567px] text-center mx-auto my-3">{currentCard?.head}</h3>
        </div>
        {currentCard?.sections?.map((e, i) => {
          return (
            <div className="mb-3 text-dark-gray dark:text-gray" key={i}>
              <img className="w-full mb-3 object-contain" src={e.img} alt="img" />
              <h3 className="font-bold  text-center mx-auto my-3 max-w-[567px]">{e.title}</h3>
              {e.descOne.includes("<") ? (
                <div
                  className="my-3"
                  dangerouslySetInnerHTML={{ __html: e.descOne }}
                />
              ) : (
                <p className="my-3">{e.descOne}</p>
              )}

              {e.descTwo.includes("<") ? (
                <div
                  className="my-3 "
                  dangerouslySetInnerHTML={{ __html: e.descTwo }}
                />
              ) : (
                <p className="my-3 ">{e.descTwo}</p>
              )}
            </div>
          );
        })}

        <div>
          <h3 className="text-dark-gray dark:text-gray text-lg  font-bold">
            Conclusion
          </h3>
          <p className="text-dark-gray dark:text-gray">
            Grids not only provide designers a structure on which to base
            layouts, but they also improve readability and scannability for end
            users. Use a good grid system that easily adapts to various screen
            sizes.
          </p>
        </div>

        <div className="flex items-center gap-x-2 pt-6">
          {currentCard?.categories?.map((e, i) => {
            return (
              <p
                key={i}
                className={`${e.bg} ${e.color} px-2.5 py-0.5 rounded-2xl font-medium caoitalized`}
              >
                {e.txt}
              </p>
            );
          })}
        </div>
        <Subscribe
          subTitle="Newlatters"
          mainTitle="Stories and interviews"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
          PrivacyLink="/"
        />
      </main>
    </div>
  );
};

export default BlogDetails;
