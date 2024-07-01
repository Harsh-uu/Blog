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
  const searchQuery = new URLSearchParams(location.search).get("q")?.trim().toLowerCase() || "";

  console.log("Search Query:", searchQuery);
  console.log("Blogs:", blogs);

  const filteredBlogs = blogs.filter((blog) => {
    const titleMatch = blog.title?.toLowerCase().includes(searchQuery);
    const descriptionMatch = blog.description?.toLowerCase().includes(searchQuery);
    const authorMatch = blog.author?.toLowerCase().includes(searchQuery);
    return titleMatch || descriptionMatch || authorMatch;
  });

  console.log("Filtered Blogs:", filteredBlogs);

  return (
    <>
      <div className="text-white mt-20 px-40 pb-8 bg-[#5200ff]">
        <h1 className="font-franklin font-semibold text-[0.8rem] tracking-widest text-[#3cffd0]">
          SEARCH RESULTS FOR :
        </h1>
        <div className="font-bold text-7xl font-volt tracking-tight mt-4 border-b-2">
          {searchQuery}
        </div>
      </div>
      <div className="bg-[#131313] pb-32 min-h-[calc(100vh-350px)] pt-10">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => {
            const safeSearchQuery = searchQuery || "";
            const parts = blog.title.split(new RegExp(`(${safeSearchQuery})`, "gi"));
            return (
              <Link to={`/blogpost/${blog.id}`} key={blog.id}>
                <div className="flex mx-40 pt-10 gap-20 border-b border-[#636363] pb-4">
                  <div className="max-w-[30%]">
                    <h1 className="font-bold text-2xl text-white font-poly tracking-tight leading-6 pb-4">
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
                    <h1 className="font-franklin font-semibold text-[0.9rem] text-[#e9e9e9]">
                      {blog.description}
                    </h1>
                    <div className="flex gap-3 mt-2">
                      <h1 className="font-franklin font-semibold text-[0.7rem] tracking-widest text-[#3cffd0]">
                        {blog.author}
                      </h1>
                      <h1 className="font-franklin font-semibold text-[0.7rem] tracking-widest text-white">
                        |
                      </h1>
                      <h1 className="font-franklin font-semibold text-[0.7rem] tracking-widest text-[#3cffd0]">
                        {blog.date}
                      </h1>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="max-h-32 min-h-32 max-w-52 min-w-52 object-cover object-center"
                    />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="mx-40 text-[#3cffd0] font-franklin font-semibold text-[0.8rem] tracking-widest">
            NO RESULTS FOUND!
          </div>
        )}
      </div>
    </>
  );
}
