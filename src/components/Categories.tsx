import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Categories() {

    const location = useLocation();
    const isBlogPostPage = location.pathname.includes('/blogpost/');
    const isSearchResultsPage = location.pathname.includes('/search/');

    return (
        <div className={`${isSearchResultsPage ? "bg-[#5200ff]" : ""}`}>
            <nav className={`border-b-[1px] ${isBlogPostPage ? "border-black" : ""}`}>
                <ul className={`flex gap-6 text font-franklin mt-4 ${isBlogPostPage ? "text-black" : "text-white"}`}>
                    <li className={`font-bold text-2xl font-lakki ${isBlogPostPage ? "text-black" : "text-white"}`}>
                        <Link to="/">Blogology.</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li>
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li>
                        <Link to="/science">Science</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li>
                        <Link to="/tech">Tech</Link>
                    </li>
                    <li className={` ${isBlogPostPage ? "text-[#5200ff]" : "text-yellow-300" }`}>/</li>
                    <li>
                        <Link to="/tech">More</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}