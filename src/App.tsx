import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Entertainment from './components/pages/Entertainment';
import Reviews from './components/pages/Reviews';
import Science from './components/pages/Science';
import Tech from './components/pages/Tech';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import HeroImage from './components/pages/HeroImage';
import BlogPost from './components/pages/BlogPost';
import SearchResults from './components/pages/SearchResults';

export const stories = [
  {
    id: 0,
    title: "How the House revived the TikTok ban before most of us noticed",
    description: "TikTok mobilized users to lobby Congress, and it backfired spectacularly.",
    author: "ALLISON JOHNSON",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1334/750x600/filters:focal(1228x514:1229x515):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25332833/STK051_TIKTOKBAN_CVirginia_A.jpg"
  },
  {
    id: 1,
    title: "Qualcomm's new 8S Gen 3 targets not-quite flagship phones",
    description: "Qualcomm's new 8S Gen 3 targets not-quite flagship phones",
    author: "ALLISON JOHNSON",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1323/128x102/filters:focal(1000x662:1001x663):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25338088/Snapdragon_8s_Gen_3___Key_Visual.jpg"
  },
  {
    id: 2,
    title: "Nvidia reveals Blackwell B200 GPU, the ‘world’s most powerful chip’ for AI",
    description: "Nvidia reveals Blackwell B200 GPU, the ‘world’s most powerful chip’ for AI",
    author: "SEAN HOLLISTER",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1323/128x102/filters:focal(1000x662:1001x663):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25338088/Snapdragon_8s_Gen_3___Key_Visual.jpg"
  },
  {
    id: 3,
    title: "The Supreme Court is skeptical of restricting the White House from talking to social media platforms",
    description: "The Supreme Court is skeptical of restricting the White House from talking to social media platforms",
    author: "LAUREN FEINER",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1323/128x102/filters:focal(1000x662:1001x663):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25338088/Snapdragon_8s_Gen_3___Key_Visual.jpg"
  },
  {
    id: 4,
    title: "Apple’s AI ambitions could include Google or OpenAI",
    description: "Apple’s AI ambitions could include Google or OpenAI",
    author: "JON PORTER",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:2000x1323/128x102/filters:focal(1000x662:1001x663):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25338088/Snapdragon_8s_Gen_3___Key_Visual.jpg"
  },
  {
    id: 5,
    title: "Lego’s 3,745-piece D&D set comes with its own playable adventure",
    description: "Lego’s 3,745-piece D&D set comes with its own playable adventure",
    author: "JESS WEATHERBED",
    date: "MAR 16",
    comments: 22,
    image: "https://duet-cdn.vox-cdn.com/thumbor/0x0:1500x1000/128x102/filters:focal(750x500:751x501):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25344255/dungeons_and_dragons_lego_2.jpg"
  },
]

export default function App() {

const location = useLocation();
const isBlogPostPage = location.pathname.includes('/blogpost/');
const isSearchResultsPage = location.pathname.includes('/search/');

  return (
    <div className={`bg-[#131313] ${isBlogPostPage ? 'bg-[#ffffff]' : ''} ${isSearchResultsPage ? 'bg-[#5200ff]' : ''}`}>
      <Navbar />
      <div className={`flex gap-6 justify-end px-40 items-center ${isBlogPostPage ? 'mt-0 pt-6' : 'mt-10'}`}>
        <Categories />
      </div>
      <Routes>
        <Route path="/" element={<HeroImage />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/science" element={<Science />} />
        <Route path="/tech" element={<Tech />} />
        {/* <Route path={`/blogpost`} element={<BlogPost story={'hellow'} />} /> */}
        <Route path="/blogpost/:id" element={<BlogPost />} />
        <Route path="/search/" element={<SearchResults />} />
      </Routes>
    </div>
  )
}