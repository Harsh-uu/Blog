import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import { CircleUser, Linkedin, Instagram, Twitter, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TbLogin2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { User } from "@supabase/supabase-js";
import { IoIosMenu } from "react-icons/io";
import supabase, { signOut } from "../utils";


export default function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const isSearchResultsPage = location.pathname.includes("/search/");
  const isSignUpPage = location.pathname.includes("/signup");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClick = () => {
    const searchQuery = searchInputRef.current?.value;
    if (searchQuery) {
      navigate(`/search/?q=${searchQuery}`);
    }
  };
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      // console.log(error);
      if (data) setUser(data.user);
    });
  }, []);
  if (
    location.pathname.includes("/blogpost/") ||
    location.pathname.includes("/signup") ||
    location.pathname.includes("/login")
  ) {
    return null;
  }

  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  return (
    <div
      className={`${isSearchResultsPage ? "bg-[#5200ff]" : ""} ${
        isSignUpPage ? "bg-[#09090b]" : ""
      }`}
    >
      <nav className="flex pt-6 justify-between px-6 sm:px-10 lg:px-20 py-2">
        <button onClick={toggleNav} className="md:hidden">
          <IoIosMenu className="text-white" size={30} />
        </button>
        {isNavVisible && (
          <div className="absolute top-0 left-0 h-full w-80 sm:w-[50%] z-10 bg-[#5200ff] text-white p-5">
            <div className="flex justify-between gap-5 items-center">
              <button onClick={toggleNav}>
                <FaWindowClose size={40} className="text-[#3cffd0] p-1" />
              </button>
              <form
                className={`bg-[#4200cc] rounded-sm px-4 flex h-8 items-center group ${
                  isSearchResultsPage ? "bg-[#4200cc]" : ""
                }`}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleClick();
                  toggleNav();
                }}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  className={`h-7 w-[86%] lg:w-96 placeholder:text-sm font-franklin placeholder:font-poly tracking-widest bg-[#4200cc] text-white outline-none text-sm ${
                    isSearchResultsPage ? "bg-[#4200cc]" : ""
                  }`}
                  placeholder="SEARCH..."
                />
                <Search
                  className={`hover:text-[#3cffd0] text-[#3cffd0] cursor-pointer ${
                    isSearchResultsPage ? "hover:text-[#a980ff]" : ""
                  }`}
                  size={16}
                  onClick={()=>{
                    handleClick();
                    toggleNav();
                  }}
                />
              </form>
            </div>
            <ul>
              {[
                "Home",
                "Entertainment",
                "Reviews",
                "Science",
                "Tech",
                "Videos",
              ].map((item, index) => (
                <li
                  key={index}
                  className={` text-3xl font-poly py-5 border-b border-[#4200cc] ${
                    index === 5 ? "last:border-b-0" : ""
                  }`}
                >
             
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={toggleNav}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[0.8rem] text-[#3cffd0] mt-4 font-medium font-franklin">
              FOLLOW US
            </p>
            <ul className="flex gap-8 text-[#3cffd0] mt-4 ml-2">
              <button
                className={`hover:text-white ${
                  isSearchResultsPage ? "hover:text-[#a980ff]" : ""
                }`}
              >
                <Linkedin />
              </button>
              <button
                className={`hover:text-[#3cffd0] ${
                  isSearchResultsPage ? "hover:text-[#a980ff]" : ""
                }`}
              >
                <Instagram />
              </button>
              <button
                className={`hover:text-[#3cffd0] ${
                  isSearchResultsPage ? "hover:text-[#a980ff]" : ""
                }`}
              >
                <Twitter />
              </button>
            </ul>
          </div>
        )}

        <ul className="md:flex gap-10 hidden md:visible text-white">
          <button
            className={`hover:text-[#3cffd0] ${
              isSearchResultsPage ? "hover:text-[#a980ff]" : ""
            }`}
          >
            <Linkedin />
          </button>
          <button
            className={`hover:text-[#3cffd0] ${
              isSearchResultsPage ? "hover:text-[#a980ff]" : ""
            }`}
          >
            <Instagram />
          </button>
          <button
            className={`hover:text-[#3cffd0] ${
              isSearchResultsPage ? "hover:text-[#a980ff]" : ""
            }`}
          >
            <Twitter />
          </button>
        </ul>
        <form
          className={`md:flex bg-[#292929] rounded-lg hidden md:visible px-2 items-center group ${
            isSearchResultsPage ? "bg-[#4200cc]" : ""
          }`}
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Search
            className={`hover:text-[#3cffd0] text-white cursor-pointer ${
              isSearchResultsPage ? "hover:text-[#a980ff]" : ""
            }`}
            size={16}
            onClick={handleClick}
          />
          <input
            ref={searchInputRef}
            type="text"
            className={` h-7 w-60 lg:w-96 placeholder:text-sm font-franklin placeholder:font-franklin placeholder:text-center bg-[#292929] text-white outline-none px-4 text-sm ${
              isSearchResultsPage ? "bg-[#4200cc]" : ""
            }`}
            placeholder="Search"
          />
        </form>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none">
            {/* <Button> */}
            {user?.user_metadata.avatar_url ? (
              <img
                src={user?.user_metadata.avatar_url}
                className="h-8 w-8 rounded-full "
              />
            ) : (
              <CircleUser
                size={24}
                className="text-white outline-none hover:text-[#3cffd0] focus:text-[#3cffd0]"
              />
            )}
            {/* </Button> */}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-[#292929] text-white mt-1 font-franklin rounded-md animate-">
            <DropdownMenu.Item className="py-2 px-4 text-[0.8rem] font-normal rounded-md focus:outline-none focus:text-[#3cffd0] hover:text-[#3cffd0] hover:bg-[#3b4046] hover:animate-pulse flex items-center gap-2 cursor-pointer">
              <FaRegStar size={16} />
              {user?.user_metadata.full_name || user?.email?.split("@")[0]}
            </DropdownMenu.Item>
            {user ? (
              <DropdownMenu.Item
                onClick={signOut}
                className="py-2 px-4 text-[0.8rem] font-normal rounded-md focus:outline-none focus:text-[#3cffd0] hover:text-[#3cffd0] hover:bg-[#3b4046] hover:animate-pulse flex items-center gap-2 cursor-pointer"
              >
                SignOut
              </DropdownMenu.Item>
            ) : (
              <DropdownMenu.Item className="py-2 px-4 text-[0.8rem] font-normal rounded-md focus:outline-none focus:text-[#3cffd0] hover:text-[#3cffd0] hover:bg-[#3b4046] hover:animate-pulse flex items-center gap-2 cursor-pointer">
                <Link to="/login">
                  <TbLogin2 size={16} />
                  LOGIN
                </Link>
              </DropdownMenu.Item>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </div>
  );
}
