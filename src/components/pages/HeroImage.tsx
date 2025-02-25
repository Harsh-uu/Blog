import {  useState } from "react";
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

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

  interface HeroImageProps {
    stories: Story[]|undefined;
  }

export default function HeroImage({ stories }: HeroImageProps) {


    const [,setSelectedStory] = useState<Story| null>(null);

    const handleClick = (index: number) => {
        setSelectedStory(stories?.at(index) || null);
    };

    const [currentStoryIndex] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    //     }, 6000);

    //     return () => {
    //         clearInterval(timer);
    //     };
    // })

    const currentStory = stories?.at(currentStoryIndex);
    const data=new Date(currentStory?.created_at || "");
    

    return (
        <div className="xl:w-[72rem] w-fit mx-auto flex flex-col xl:flex-row place-items-center">
            <div className="md:mt-24 mt-16 xl:pb-20 w-[90%] sm:w-[35rem] lg:w-[40rem] group cursor-pointer relative border-b-2 xl:border-none border-[#313131] pb-10">
                <h1 className="text-white/40 text-7xl md:text-9xl font-lakki h-fit absolute -top-5 md:-left-72 md:top-40 md:-rotate-90">Blogology.</h1>
                {currentStory && (
                <Link to={`blogpost/${currentStory.id}`}> 
                <img width={600} height={600} onClick={() => handleClick(currentStory.id)} className="rounded-md mx-auto" src={currentStory.image} alt="Tiktok" /> 
                <div className="text-white sm:ml-28 ">
                    <p className="font-bold text-[3rem] leading-[3rem] sm:text-[4rem] pt-2 sm:leading-[4rem] font-volt tracking-tighter ">{currentStory.title}</p>
                    <p className="font-ledger text-5xl sm:text-2xl max-w-[95%] mt-4">{currentStory.description}</p>
                    <div className="flex gap-3 text-[0.7rem] mt-2 tracking-widest">
                        <p className="text-[#3cffd0] uppercase">{currentStory.author}</p>
                        <p className="text-[#949494]">{data.toLocaleString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}</p>
                        <p className="text-[#949494]">|</p>
                        <p className="text-[#949494] flex gap-1 place-items-center"><MessageSquare size={14}/>{currentStory.comment_count}</p>
                    </div>
                </div>
                {/* <div className={`${!xl ? "border-b-2 border-[#313131]" : ""}`}></div> */}
                </Link>
                )}

            </div>
            <div className="sm:ml-20 xl:max-w-[39%] sm:max-w-[27rem] xl:pl-10 pb-16 xl:pb-0 px-4 w-full">
                <h1 className="text-[#3cffd0] mt-10 text-lg ml-7 sm:ml-0">Top Stories</h1>
                {stories?.filter(story => story !== currentStory).map((story, index) => (
                    <Link to={`/blogpost/${story.id}`} className={`flex w-[90%] mx-auto sm:mx-0 sm:w-full relative gap-4 pb-5 group ${index < 4 ? "border-b-2 border-[#313131]" : ""}`} key={index} onClick={() => handleClick(index)}>
                        <p className="text-[#3cffd0] mt-[1.125rem] bg-[#2e2e2e] absolute left-1 top-1 sm:-left-12 font-gotu grid text-xs place-content-center h-6 w-6 rounded-full">{1 + index}</p>
                        <img src={story.image} className="mt-4 border-[1px] mr-4 rounded-sm sm:hidden border-[#313131] max-h-20 min-h-20 object-cover" alt="" />
                        <div className="text-white mt-4 font-franklin">
                            <h1 className=" text-lg sm:text-xl font-poly font-black leading-6 tracking-wide group-hover:underline underline-offset-4 decoration-[#3cffd0]">{story.title}</h1>
                            <div className="flex gap-3 text-[0.7rem] mt-2 tracking-widest">
                                <p className="text-[#3cffd0] uppercase">{story.author}</p>
                                <p className="text-[#949494] hidden sm:block">{data.toLocaleString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}</p>
                                <p className="text-[#949494] hidden sm:block">|</p>
                                <p className="text-[#949494] hidden sm:visible sm:flex gap-1 place-items-center"><MessageSquare size={14}/>{story.comment_count}</p>
                            </div>
                        </div>
                        <img src={story.image} className="mt-4 border-[1px] rounded-sm hidden sm:block border-[#313131] max-h-20 min-h-20 object-cover min-w-[7.2rem]" alt="" />
                    </Link>
                ))}
            </div>
        </div>
    )
}