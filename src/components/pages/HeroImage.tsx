import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { stories } from "../../App";

export default function HeroImage() {

    const storyNumber = (1);

    const [selectedStory, setSelectedStory] = useState<{
        title: string;
        author: string;
        date: string;
        comments: number;
        image: string;
    } | null>(null);


    const handleClick = (index: number) => {
        setSelectedStory(stories[index]);
    };

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
        }, 60000);

        return () => {
            clearInterval(timer);
        };
    })

    const currentStory = stories[currentStoryIndex];

    return (
        <div className="flex px-40">
            <div className="mt-24 pb-20 max-w-[70%] group cursor-pointer relative">
                <Link to={`/blogpost/${currentStory.id}`} className="text-white text-9xl font-lakki opacity-40 h-fit absolute -left-72 top-40 -rotate-90">Blogology.</Link>
                <img width={600} height={600} onClick={() => handleClick(currentStory.id)} src={currentStory.image} alt="Tiktok" />
                <div className="text-white ml-20">
                    <p className="font-bold text-7xl font-volt tracking-tighter max-w-[40rem]">{currentStory.title}</p>
                    <p className="font-ledger text-2xl max-w-[85%] mt-4">{currentStory.description}</p>
                    <div className="flex gap-3 text-[0.7rem] mt-2 tracking-widest">
                        <p className="text-[#3cffd0]">{currentStory.author}</p>
                        <p className="text-[#949494]">{currentStory.date}</p>
                        <p className="text-[#949494]">|</p>
                        <p className="text-[#949494]">{currentStory.comments}</p>
                    </div>
                </div>

            </div>
            <div className="ml-20 max-w-[35%]">
                <h1 className="text-[#3cffd0] mt-24 text-lg">Top Stories</h1>
                {stories.filter(story => story !== currentStory).map((story, index) => (
                    <Link to={`/blogpost/${index}`} className="flex relative gap-4 border-b-2 border-[#313131] pb-5 group" key={index} onClick={() => handleClick(index)}>
                        <p className="text-[#3cffd0] mt-[1.125rem] bg-[#2e2e2e] absolute -left-12 font-gotu grid text-xs place-content-center h-6 w-6 rounded-full">{storyNumber + index}</p>
                        <div className="text-white mt-4 font-franklin">
                            <h1 className=" text-xl font-poly font-black leading-tight group-hover:underline underline-offset-4 decoration-[#3cffd0]">{story.title}</h1>
                            <div className="flex gap-3 text-[0.7rem] mt-2 tracking-widest">
                                <p className="text-[#3cffd0]">{story.author}</p>
                                <p className="text-[#949494]">{story.date}</p>
                                <p className="text-[#949494]">|</p>
                                <p className="text-[#949494]">{story.comments}</p>
                            </div>
                        </div>
                        <img src={story.image} className="mt-4 border-[1px] rounded-sm border-[#313131] max-h-20 min-h-20 object-cover" alt="" />
                    </Link>
                ))}

            </div>
        </div>
    )
}