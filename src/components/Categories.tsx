import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Categories() {

    const location = useLocation();
    const isBlogPostPage = location.pathname.includes('/blogpost/');
    const isSearchResultsPage = location.pathname.includes('/search/');
    const isSignUpPage = location.pathname.includes('/signup');
    const isLoginPage = location.pathname.includes('/login');


    if (isSignUpPage || isLoginPage) {
        return null;
    }

    return (
        <div className={`${isSearchResultsPage ? "bg-[#5200ff]" : ""} z-10`}>
            <nav className={`border-b-[1px] ${isBlogPostPage ? "border-black" : ""}`}>
                <ul className={`flex gap-6 text font-franklin mt-4
                 ${isBlogPostPage ? "text-black" : "text-white"}`}>
                    <li className={`font-bold text-2xl font-lakki ${isBlogPostPage ? "text-black" : "text-white"} ${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/">Blogology.</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li className={`${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li className={`${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li className={`${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/science">Science</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li className={`${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/tech">Tech</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li className={`${isSearchResultsPage ? "hover:text-[#a980ff]" : "hover:text-[#3cffd0]"}`}>
                        <Link to="/tech">More</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}