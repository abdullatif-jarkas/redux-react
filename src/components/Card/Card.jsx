import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLastTenCards } from "../../redux/slice";

const Card = ({
  id,
  image,
  title,
  author,
  txt,
  categories,
  className,
  row,
  height,
  responsive,
  
}) => {
  // _______________________________________________________________________________

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };
  // _______________________________________________________________________________

  return (
    <div className={className} onClick={handleClick}>
      <div className={` mb-8 ${row ? `mb-0 w-[55%] ${responsive}` : " mb-8 w-full"}`}>
        <img
          src={image}
          alt="card-img"
          className={`w-full 
            // row ? "object-cover max-1087:h-[200px] " : "mb-8 w-full "
           ${height ? "h-[240px] object-cover max-1087:h-[200px]" : " object-cover max-1087:h-[200px] h-[188px]"}`}
        />
      </div>
      <div className={` ${row ? `w-[40%] ${responsive}` : " w-full "}`}>
        <p className="text-purple text-sm font-semibold  pb-3">{author}</p>
        <div className="flex justify-between items-center pb-3">
          <h3 className="text-1xl font-semibold dark:text-white">{title}</h3>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black dark:text-white"
          >
            <path
              d="M1 11L11 1M11 1H1M11 1V11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-dark-gray dark:text-gray">{txt}</p>
        <div className="flex items-center gap-x-2 pt-6">
          {categories?.map((e, i) => {
            return (
              <p
                key={i}
                className={`${e.bg} ${e.color} px-2.5 py-0.5 rounded-2xl font-medium capitalize`}
              >
                {e.txt}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
