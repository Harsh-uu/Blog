import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface Story {
  id: number;
  title: string;
  description: string;
  author: string;
  created_at: string;
  comment_count: number;
  image: string;
  content: string;
  userid: string;
}

interface BlogPostProps {
  stories: Story[];
}


const BlogPost = ({stories}:BlogPostProps) => {
  const title = useParams();
  const story = stories.find(story => story.id === Number(title.id));

  return (
    <>
      <div className="md:pt-24 pt-20 relative xl:w-[70rem] md:w-[43rem] mx-auto bg-[#ffffff] px-6 md:px-0 text-black">
      <Link
          className="font-bold text-3xl md:hidden hidden sm:block absolute text-[#3cffd0] top-10 left-6 opacity-100 font-lakki w-fit hover:animate-pulse"
          to="/"
        >
          Blogology.
        </Link>
      <Link
          className="font-bold text-5xl sm:hidden absolute text-[#3cffd0] top-6 left-8 -rotate-45 font-lakki w-fit hover:animate-pulse"
          to="/"
        >
          B.
        </Link>
        {/* <SideNav/> */}
        <div className="flex text-[#5200ff] font-black gap-3 text-[0.8rem] mt-2 sm:tracking-widest font-mono">
          <p>ARTIFICIAL TECHNOLOGY</p>
          <p>/</p>
          <p>TECH</p>
          <p>/</p>
          <p>POLICY</p>
        </div>
        <h1 className="md:text-[2.3rem] xl:max-w-[70%] md:leading-10 font-poly text-2xl mt-2 font-black">{story?.title}
        <span className="md:text-[1.6rem] xl:hidden font-extralight leading-3"><span className="text-[#5200ff] ml-3">/</span> {story?.description}</span></h1>
        <div className="border-b border-[#bdbdbd] mt-6 mb-4 w-[15rem] xl:hidden"></div>
        <div className="text-[0.8rem] font-medium tracking-tight font-poly xl:hidden max-w-[36rem]">
              <p>By <span className="text-[#5200ff]">{story?.author}</span>, a reporter who covers AI. Prior to joining Blogology, she covered the intersection between technology, finance, and the economy.</p>
              <p className="mt-2 text-[#636363]">{story?.created_at? new Date(story?.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric' }).toUpperCase() : ""}, 2024</p>
              <p className="mt-2">{story?.comment_count} Comments</p>
        </div>
        

        {/* <p>{story?.author}</p>
      <p>{story?.date}</p>
      <p>{tsory?.comments}</p> */}
        <div className="mt-6 flex xl:mb-10 mb-7 gap-14">
          <img className="xl:w-[40rem] md:h-[24rem] aspect-video object-cover" src={story?.image} alt={story?.title} />
          <div className="max-w-[100%] font-poly flex flex-col justify-between">
            <p className="text-[1.6rem] font-extralight hidden xl:block"><span className="text-[#5200ff]">/</span> {story?.description}</p>
            <div className="text-[0.8rem] hidden xl:block">
              <p>By <span className="text-[#5200ff]">{story?.author}</span>, a reporter who covers AI. Prior to joining Blogology, she covered the intersection between technology, finance, and the economy.</p>
              <p className="mt-2 text-[#636363]">{story?.created_at? new Date(story?.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric' }).toUpperCase() : ""}, 2024</p>
              <p className="mt-2">{story?.comment_count} Comments</p>
            </div>
          </div>
        </div>
        <div className="text-lg xl:max-w-[65%] pb-40 font-roman xl:pl-28 md:pl-24 flex flex-col gap-8">
            <p>
              Lorem idivsum dolor sit amet, consectetur adipisicing elit. Repudiandae porro ratione quasi asperiores, nesciunt corrupti animi ipsum quaerat quos nulla, dolorum inventore nemo consectetur reiciendis, nisi enim quibusdam reprehenderit! Eius, commodi exercitationem? Eos, doloribus ipsum! Iste temporibus perferendis quasi perspiciatis voluptatum ea aut neque quae saepe architecto, pariatur dolore eaque earum quos! Ad ipsa molestiae tempora incidunt accusamus ipsum, nostrum repudiandae amet officia aspernatur non sapiente doloremque illo laborum sed vitae ipsam nesciunt corrupti. Necessitatibus, voluptates? Maxime, atque libero assumenda doloribus enim, odit natus architecto nemo repudiandae sed voluptatem, vitae perspiciatis unde quam placeat magnam obcaecati. Fugiat, eaque? Incidunt, aspernatur.
            </p>
            <p>
              Lorem idivsum dolor sit amet, consectetur adipisicing elit. Repudiandae porro ratione quasi asperiores, nesciunt corrupti animi ipsum quaerat quos nulla, dolorum inventore nemo consectetur reiciendis, nisi enim quibusdam reprehenderit! Eius, commodi exercitationem? Eos, doloribus ipsum! Iste temporibus perferendis quasi perspiciatis voluptatum ea aut neque quae saepe architecto, pariatur dolore eaque earum quos! Ad ipsa molestiae tempora incidunt accusamus ipsum, nostrum repudiandae amet officia aspernatur non sapiente doloremque illo laborum sed vitae ipsam nesciunt corrupti. Necessitatibus, voluptates? Maxime, atque libero assumenda doloribus enim, odit natus architecto nemo repudiandae sed voluptatem, vitae perspiciatis unde quam placeat magnam obcaecati. Fugiat, eaque? Incidunt, aspernatur.
            </p>
            <p>
              Lorem idivsum dolor sit amet, consectetur adipisicing elit. Repudiandae porro ratione quasi asperiores, nesciunt corrupti animi ipsum quaerat quos nulla, dolorum inventore nemo consectetur reiciendis, nisi enim quibusdam reprehenderit! Eius, commodi exercitationem? Eos, doloribus ipsum! Iste temporibus perferendis quasi perspiciatis voluptatum ea aut neque quae saepe architecto, pariatur dolore eaque earum quos! Ad ipsa molestiae tempora incidunt accusamus ipsum, nostrum repudiandae amet officia aspernatur non sapiente doloremque illo laborum sed vitae ipsam nesciunt corrupti. Necessitatibus, voluptates? Maxime, atque libero assumenda doloribus enim, odit natus architecto nemo repudiandae sed voluptatem, vitae perspiciatis unde quam placeat magnam obcaecati. Fugiat, eaque? Incidunt, aspernatur.
            </p>
        </div>
      </div>
      <div className="bg-[#3cffd0] px-6">
      <div className="bg-[#3cffd0] xl:w-[70rem] md:w-[45rem] mx-auto py-10 border-black">
        <p className="sm:text-xl font-mono">More from Artificial Intelligence</p>
        <div className="mt-10 flex flex-col gap-4">
          {stories.filter(story => story.id !== Number(title.id)).slice(0, 4).map((story, index) => (
            <div key={index} className={`flex pb-4 flex-row gap-10 ${index < 3 ? "border-b-[1px] border-[#313131]" : ""}`}>
              <img src={story.image} className="max-h-16 min-h-16 my-auto" alt={story.title} />
              <Link to ={`/blogpost/${story.id}`} >
              <h1 className="my-auto hover-underline xl:leading-10 sm:leading-7 leading-5 font-poly font-black text-xl sm:text-2xl xl:text-4xl">{story.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default BlogPost;