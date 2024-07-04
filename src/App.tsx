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
import { useEffect, useState } from "react";
import supabase from "./utils";

export default function App() {
  const [stories, setStories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const isBlogPostPage = location.pathname.includes("/blogpost/");
  const isSearchResultsPage = location.pathname.includes("/search/");
  const isSignUpPage = location.pathname.includes("/signup");
  const isLoginPage = location.pathname.includes("/login");

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


  return (
    <div className="bg-white">
      <BodyClass />
      <div
        className={`bg-[#131313] ${isBlogPostPage ? "bg-[#ffffff]" : ""} ${
          isSearchResultsPage ? "bg-[#5200ff]" : ""
        }`}
      >
        <Navbar/>
        <div
          className={`md:flex gap-6 justify-end hidden md:visible px-10 xl:px-40 items-center ${
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
          {/* <Route path={`/blogpost`} element={<BlogPost story={'hellow'} />} /> */}
          <Route
            path="/blogpost/:id"
            element={<BlogPost stories={stories} />}
          />
          <Route path="/search/" element={<SearchResults blogs={stories} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
