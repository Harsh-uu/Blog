import { useLocation } from "react-router-dom"

export default function SearchResults(){

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q');

    return(
        <>
        <div className="text-white mt-20 px-40 pb-8 bg-[#5200ff]">
            <h1 className="font-franklin font-semibold text-[0.8rem] tracking-widest text-[#3cffd0]">
                SEARCH RESULTS FOR :
            </h1>
            <div className="font-bold text-7xl font-volt tracking-tight mt-4 border-b-2">{searchQuery}</div>
        </div>
        <div className="bg-black">
            harsh
        </div>
        </>
    )
}