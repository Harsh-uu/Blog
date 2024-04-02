import { useLocation, useNavigate } from 'react-router-dom';
import { CircleUser, Linkedin, Instagram, Twitter, Search  } from 'lucide-react';
import { useRef } from 'react';

export default function Navbar(){

    const navigate = useNavigate();

    const location = useLocation();
    const isSearchResultsPage = location.pathname.includes('/search/');

    const searchInputRef = useRef<HTMLInputElement>(null);

    if (location.pathname.includes('/blogpost/')) {
        return null;
    }

    const handleClick = () => {
        const searchQuery = searchInputRef.current?.value;
        navigate(`/search/?q=${searchQuery}`);
    }

    return(
        <div className={`${isSearchResultsPage ? "bg-[#5200ff]" : ""}`}>
            <nav className="flex pt-6 justify-between px-20 py-2">
                <ul className="flex gap-10 text-white">
                    <button className={`hover:text-[#3cffd0] ${isSearchResultsPage? 'hover:text-[#a980ff]' : ''}`}><Linkedin/></button>
                    <button className={`hover:text-[#3cffd0] ${isSearchResultsPage? 'hover:text-[#a980ff]' : ''}`}><Instagram/></button>
                    <button className={`hover:text-[#3cffd0] ${isSearchResultsPage? 'hover:text-[#a980ff]' : ''}`}><Twitter/></button>

                </ul>
                <form className={`flex bg-[#292929] rounded-lg px-2 items-center group ${isSearchResultsPage ? 'bg-[#4200cc]' : ''}`}>
                    <Search className={`hover:text-[#3cffd0] text-white cursor-pointer ${isSearchResultsPage? 'hover:text-[#a980ff]' : ''}`} size={16} onClick={handleClick}/>
                    <input ref={searchInputRef} type="text" className={` h-7 w-96 placeholder:text-sm font-franklin placeholder:font-franklin placeholder:text-center bg-[#292929] text-white outline-none px-4 text-sm ${isSearchResultsPage ? 'bg-[#4200cc]' : ''}`} placeholder="Search"/>

                </form>
                <CircleUser className={`hover:text-[#3cffd0] text-white cursor-pointer ${isSearchResultsPage? 'hover:text-[#a980ff]' : ''}`} size={24} />
            </nav>
        </div>
    )
}