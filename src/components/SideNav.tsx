import { FaWindowClose } from "react-icons/fa";
import { Linkedin, Instagram, Twitter, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
    toggleNav: () => void;
    handleClick: any;
    searchInputRef: React.RefObject<HTMLInputElement>;
    isSearchResultsPage: boolean;
  }

export default function SideNav({toggleNav, handleClick, searchInputRef, isSearchResultsPage}:NavbarProps){
    
    return(
        <div className="absolute overflow-hidden top-0 left-0 h-full w-80 sm:w-[50%] z-50 bg-[#5200ff] text-white p-5">
            <p className="font-lakki text-[7.5rem] text-[#4200cc] -rotate-90 -right-[16.4rem] top-64 absolute">Blogology.</p>
            <div className="flex justify-between gap-5 items-center">
              <button onClick={toggleNav}>
                <FaWindowClose size={40} className="text-[#3cffd0] p-1" />
              </button>
              <form className="flex bg-[#4200cc] px-4 h-8 items-center rounded-sm" onSubmit={(e) => {
                e.preventDefault();
                handleClick();
                toggleNav();
              }}>
                <input ref={searchInputRef} type="text" className="h-7 w-[86%] placeholder:text-sm font-franklin placeholder:font-poly tracking-widest bg-[#4200cc] text-white outline-none" placeholder="SEARCH..." />
                <Search size={16} onClick={() => {handleClick(); toggleNav();}} className={`text-[#3cffd0] cursor-pointer`}/>
              </form>
            </div>
            <ul>
              {["Home", "Entertainment", "Reviews", "Science", "Tech", "Videos"].map((item, index) => (
                <li
                  key={index}
                  className={` text-3xl font-poly py-5 border-b border-[#4200cc] ${index === 5 ? "last:border-b-0" : ""}`}
                >
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={toggleNav}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[0.8rem] text-[#3cffd0] mt-4 font-medium font-franklin">FOLLOW US</p>
            <ul className="flex gap-8 text-[#3cffd0] mt-4 ml-2">
              <button className={`hover:text-white ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
                <Linkedin />
              </button>
              <button className={`hover:text-[#3cffd0] ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
                <Instagram />
              </button>
              <button className={`hover:text-[#3cffd0] ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
                <Twitter />
              </button>
            </ul>
          </div>
    )
}
