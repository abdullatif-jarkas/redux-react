import React, { useEffect } from "react";
import Subscribe from "../Subscribe/Subscribe";
import { useDispatch, useSelector } from "react-redux";
import { getFirstThreeCards } from "../../redux/slice";
import Card from "../Card/Card";
import { Title } from "../Title/Title";

const Newsletter = () => {
// _______________________________________________________________________________

  const dispatch = useDispatch();

  const firstThreeCards = useSelector((state) => state.cards.firstThreeCards);

  useEffect(() => {
    dispatch(getFirstThreeCards());
  }, [dispatch]);
// _______________________________________________________________________________

  return (
    <main className="dark:bg-dark-main-color px-7%">
      <section className="pt-125 max-sm:pt-20 ">
        <Subscribe
          subTitle="Newlatters"
          mainTitle="Stories and interviews"
          desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
          PrivacyLink="/"
        />
      </section>
      <section className="py-30">
        <Title title="All blog posts" />
        <div className="group flex justify-between items-start gap-8 flex-wrap">
          {firstThreeCards.map((e, i) => (
            <Card
              key={i}
              {...e}
              className={`w-[31%] max-756:w-full
                ${i === firstThreeCards.length - 1 ? 'max-1200:w-full max-1200:order-2' : 'max-1200:w-[47%]'} 
                max-md:w-[250px]`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Newsletter;
