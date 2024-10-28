import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = ({ year, links }) => {
  return (
    <footer className="flex gap-3.5 max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center px-7% max-iPad:px-2% dark:bg-dark-main-color min-h-[84px] max-iPad:py-30">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon icon={faCopyright} className="dark:text-white text-dark-main-color"/>
        <h3 className="text-xl dark:text-white text-black">{year}</h3>
      </div>

      <ul className="flex items-center gap-3.5 max-sm:flex-col max-sm:justify-center">
        {links?.map((element, i) => {
          return (
            <li key={i}>
              <Link
                to={`/${element.to}`}
                className="text-xl capitalize max-sm:text-lg  dark:text-white text-black"
              >
                {element.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
