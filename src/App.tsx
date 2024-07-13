import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Entertainment from "./components/pages/Entertainment";
import Reviews from "./components/pages/Reviews";
import Science from "./components/pages/Science";
import Tech from "./components/pages/Tech";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import HeroImage from "./components/pages/HeroImage";
import BlogPost from "./components/pages/BlogPost";
import SearchResults from "./components/pages/SearchResults";
import SignUp from "./components/pages/SignUp";
import BodyClass from "./components/BodyClass";
import Login from "./components/pages/Login";
import "@radix-ui/themes/styles.css";
import { FiLoader } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import supabase from "./utils";
import SideNav from "./components/SideNav";

export default function App() {
  const [stories, setStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPostPage = location.pathname.includes("/blogpost/");
  const isSearchResultsPage = location.pathname.includes("/search/");
  const isSignUpPage = location.pathname.includes("/signup");
  const isLoginPage = location.pathname.includes("/login");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/login");
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login");
    });
    setIsLoading(true);
    supabase
      .from("blogs")
      .select("*")
      .then(({ data, error }) => {
        if (data) {
          setStories(data);
        }
        if (error) {
          console.log(error);
        }
      });
    setIsLoading(false);
    return () => subscription.unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="text-green-100 h-screen grid place-content-center text-4xl">
        <FiLoader className="animate-spin" />
      </div>
    );
  }

  const handleClick = () => {
    const searchQuery = searchInputRef.current?.value;
    if (searchQuery) {
      navigate(`/search/?q=${searchQuery}`);
    }
    console.log(searchInputRef.current?.value);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    document.body.style.overflow = isNavVisible ? "auto" : "hidden";
  };

  return (
    <div>
      <div className={`${isNavVisible ? "" : "hidden"}`}><SideNav toggleNav={toggleNav}/></div>
      <div onClick={()=>{isNavVisible ? setIsNavVisible(!isNavVisible) : ""}} className={`${isNavVisible ? "opacity-20" : "opacity-100"} z-10`}>
        <BodyClass />
        <div
          className={`bg-[#131313] ${isBlogPostPage ? "bg-[#ffffff]" : ""} ${
            isSearchResultsPage ? "bg-[#5200ff]" : ""
          }`}
        >
          <Navbar toggleNav={toggleNav} handleClick={handleClick} searchInputRef={searchInputRef} isSearchResultsPage={isSearchResultsPage}/>
          <div
            className={`md:flex gap-6 justify-center lg:justify-end hidden lg:pr-20 xl:pr-40 items-center ${
              isBlogPostPage || isSignUpPage || isLoginPage ? "mt-0" : "mt-10"
            } ${isBlogPostPage ? "pt-6" : "pt-0"}`}
          >
            <Categories />
          </div>
          <Routes>
            <Route path="/" element={<HeroImage stories={stories} />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/science" element={<Science />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/blogpost/:id" element={<BlogPost stories={stories} />} />
            <Route path="/search/" element={<SearchResults blogs={stories} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
