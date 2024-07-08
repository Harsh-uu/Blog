import { Link, useLocation } from "react-router-dom";

type Blog = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  comments: number;
  image: string;
};

export default function SearchResults({ blogs }: { blogs: Blog[] }) {
  const location = useLocation();
  const searchQuery =
    new URLSearchParams(location.search).get("q")?.trim().toLowerCase() || "";

  const filteredBlogs = blogs.filter((blog) => {
    const titleMatch = blog.title?.toLowerCase().includes(searchQuery);
    const descriptionMatch = blog.description
      ?.toLowerCase()
      .includes(searchQuery);
    const authorMatch = blog.author?.toLowerCase().includes(searchQuery);
    return titleMatch || descriptionMatch || authorMatch;
  });
  
  return (
    <>
      <div className="text-white md:mt-20 mt-10 md:px-40 sm:px-20 px-10 pb-8 bg-[#5200ff]">
        <h1 className="font-franklin font-semibold text-[0.8rem] tracking-widest text-[#3cffd0]">
          SEARCH RESULTS FOR :
        </h1>
        <div className="font-bold text-7xl font-volt tracking-tight mt-4 border-b-2 w-full overflow-x-scroll scrollable-x">
          {searchQuery}
        </div>
      </div>
      <div className="bg-[#131313] pb-10 md:min-h-[calc(100vh-250px)] min-h-[calc(100vh-200px)] pt-10">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const safeSearchQuery = searchQuery || "";
            const parts = blog.title.split(
              new RegExp(`(${safeSearchQuery})`, "gi")
            );

            return (
              <Link to={`/blogpost/${blog.id}`} key={blog.id}>
                <div className="flex lg:mx-40 pt-10 lg:gap-32 gap-6 border-b sm:mx-auto mx-6 sm:px-0  border-[#636363] sm:w-[30rem] lg:w-fit pb-4">
                  <div className="w-[27rem]">
                    <h1 className="font-bold sm:text-2xl text-lg text-white font-poly tracking-tight leading-6  pb-4">
                      {parts.map((part, index) =>
                        part.toLowerCase() === safeSearchQuery ? (
                          <span key={index} className="text-[#3cffd0]">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                    </h1>
                    <h1 className="font-franklin font-semibold hidden sm:block text-[0.9rem] text-[#e9e9e9]">
                      {blog.description}
                    </h1>
                    <div className="flex gap-3 mt-2">
                      <h1 className="font-franklin font-semibold text-[0.7rem] uppercase tracking-widest text-[#3cffd0]">
                        {blog.author}
                      </h1>
                      <h1 className="font-franklin font-semibold hidden sm:block text-[0.7rem] tracking-widest text-white">
                        |
                      </h1>
                      <h1 className="font-franklin font-semibold hidden sm:block text-[0.7rem] tracking-widest text-[#3cffd0]">
                        {isNaN(new Date(blog.date).getTime())
                          ? "JUN 02" // Fallback text
                          : new Date(blog.date)
                              .toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                              })
                              .toUpperCase()}
                      </h1>
                    </div>
                  </div>
                  <div className="sm:w-1/3">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="sm:h-28 sm:w-[10rem] lg:h-32 lg:w-52 h-20 min-w-28 sm:ml-0 ml-2 object-cover object-center"
                    />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="md:mx-40 sm:mx-20 pl-10 sm:pl-0 text-[#3cffd0] font-franklin font-semibold text-[0.8rem] tracking-widest">
            NO RESULTS FOUND!
          </div>
        )}
        <Link to="/">
        <p className={`text-white font-lakki ${filteredBlogs.length > 0 ? "mt-20" : "mt-72"} pl-10 sm:pl-20 text-6xl md:hidden hover:animate-ping`}>Blogology.</p>
        </Link>
        <p className="text-white font-poly md:hidden pl-10 sm:pl-20 text-[0.7rem] tracking-wider">&copy; 2024 HARSH GUPTA. ALL RIGHTS RESERVED </p>
      </div>
    </>
  );
}
