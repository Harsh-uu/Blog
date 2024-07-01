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
      <div className="mt-24 px-40 bg-[#ffffff] text-black">
        <div className="flex text-[#5200ff] font-black gap-3 text-[0.8rem] mt-2 tracking-widest font-mono">
          <p>ARTIFICIAL TECHNOLOGY</p>
          <p>/</p>
          <p>TECH</p>
          <p>/</p>
          <p>POLICY</p>
        </div>
        <h1 className="text-[2.3rem] max-w-[70%] leading-10 font-poly font-black">{story?.title}</h1>
        {/* <p>{story?.author}</p>
      <p>{story?.date}</p>
      <p>{tsory?.comments}</p> */}
        <div className="mt-6 flex mb-16 gap-14">
          <img className="min-h-[24rem] max-h-[24rem] min-w-[40rem]" src={story?.image} alt={story?.title} />
          <div className="max-w-[100%] font-poly flex flex-col justify-between">
            <p className="text-[1.6rem] font-extralight"><span className="text-[#5200ff]">/</span> New guidance from the Office of Management and Budget also requires a yearly inventory of all AI systems used by federal agencies.</p>
            <div className="text-[0.8rem]">
              <p>By <span className="text-[#5200ff]">{story?.author}</span>, a reporter who covers AI. Prior to joining Blogology, she covered the intersection between technology, finance, and the economy.</p>
              <p className="mt-2 text-[#636363]">{story?.created_at? new Date(story?.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric' }).toUpperCase() : ""}, 2024</p>
              <p className="mt-2">{story?.comment_count} Comments</p>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[1.3rem] max-w-[65%] pb-40 font-volt ">
          <div className="ml-20 flex flex-col gap-8">
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
      </div>
      <div className="bg-[#3cffd0] px-44 py-10">
        <p className="text-xl font-mono">More from Artificial Intelligence</p>
        <div className="mt-10 flex flex-col gap-4">
          {stories.filter(story => story.id !== Number(title.id)).slice(0, 4).map((story, index) => (
            <div key={index} className={`flex pb-4 flex-row gap-10 ${index < 3 ? "border-b-[1px] border-[#313131]" : ""}`}>
              <img src={story.image} className="max-h-16 min-h-16 my-auto" alt={story.title} />
              <Link to ={`/blogpost/${story.id}`} >
              <h1 className="my-auto hover-underline leading-10 font-poly font-black text-4xl">{story.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPost;