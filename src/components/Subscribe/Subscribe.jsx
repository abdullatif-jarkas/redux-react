const Subscribe = ({ subTitle, mainTitle, desc, PrivacyLink }) => {
  return (
    <section className="flex flex-col justify-center items-center dark:bg-dark-main-color py-30">
      <h3 className="font-semibold capitalized text-lighterPurple">
        {subTitle}
      </h3>
      <p className="font-semibold text-black dark:text-white text-5xl mt-3 mb-6 ">
        {mainTitle}
      </p>
      <p className="dark:text-gray text-dark-gray text-xl max-w-[768px] text-center mb-10 max-sm:text-left">{desc}</p>
     <div className="">
     <form action="#" className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-solid border-borderGray text-gray py-3 px-4 rounded-lg w-[360px] outline-purple focus-visible:border-0 max-sm:w-full"
        />
        <button
          className="font-medium bg-lighterPurple py-3 px-5 rounded-lg border-0 text-white hover:bg-blue transition-all duration-500"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p className="dark:text-gray text-dark-gray text-sm mt-2">
        We care about your data in our  
        <a className="underline ml-0.5" href={`${PrivacyLink}`}>
           privacy policy
        </a>
      </p>
     </div>
    </section>
  );
};

export default Subscribe;
