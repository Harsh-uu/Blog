import { Link, useLocation } from "react-router-dom";
import { CircleUser, Linkedin, Instagram, Twitter, Search } from "lucide-react";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TbLogin2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import { User } from "@supabase/supabase-js";
import { IoIosMenu } from "react-icons/io";
import supabase, { signOut } from "../utils";

interface NavbarProps {
  toggleNav: () => void;
  handleClick: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  isSearchResultsPage: boolean;
}

export default function Navbar({ toggleNav, handleClick, searchInputRef, isSearchResultsPage}: NavbarProps) {
  const location = useLocation();
  const isSignUpPage = location.pathname.includes("/signup");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
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

  return (
    <div className={`${isSearchResultsPage ? "bg-[#5200ff]" : ""} ${isSignUpPage ? "bg-[#09090b]" : ""}`}>
      <nav className="flex pt-6 justify-between px-6 sm:px-10 lg:px-20 py-2">
        <button onClick={toggleNav}  className="md:hidden">
          <IoIosMenu className="text-white" size={30} />
        </button>

        <ul className="md:flex lg:gap-10 gap-6 hidden md:visible text-white">
          <button className={`hover:text-[#3cffd0] ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
            <Linkedin />
          </button>
          <button className={`hover:text-[#3cffd0] ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
            <Instagram />
          </button>
          <button className={`hover:text-[#3cffd0] ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}>
            <Twitter />
          </button>
        </ul>
        <form
          className={`md:flex bg-[#292929] rounded-lg hidden px-2 items-center group ${isSearchResultsPage ? "bg-[#4200cc]" : ""}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <Search
            className={`hover:text-[#3cffd0] text-white cursor-pointer ${isSearchResultsPage ? "hover:text-[#a980ff]" : ""}`}
            size={16}
            onClick={handleClick}
          />
          <input
            ref={searchInputRef}
            type="text"
            className={` h-7 w-60 lg:w-96 placeholder:text-sm font-franklin placeholder:font-franklin placeholder:text-center bg-[#292929] text-white outline-none px-4 text-sm ${isSearchResultsPage ? "bg-[#4200cc]" : ""}`}
            placeholder="Search"
          />
        </form>
  
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none">
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
                <TbLogin2 size={16} />
                <Link to="/login">Login</Link>
              </DropdownMenu.Item>
            )}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </nav>
    </div>
  );
}
