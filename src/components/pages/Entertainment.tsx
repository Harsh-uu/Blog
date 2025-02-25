import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquare, Film, Tv, Music, Gamepad2, 
  TrendingUp, Star, Calendar, Share2, Play 
} from "lucide-react";

interface EntertainmentContent {
  id: number;
  title: string;
  description: string;
  author: string;
  created_at: string;
  comment_count: number;
  likes: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  duration?: string;
}

export default function Entertainment() {
  // Sample entertainment content data with enhanced properties
  const entertainmentContent: EntertainmentContent[] = [
    {
      id: 1,
      title: "The Future of Immersive Cinema",
      description: "How new technologies are creating unprecedented movie experiences that blur the line between viewer and story",
      author: "Maya Johnson",
      created_at: "2025-02-20T14:30:00Z",
      comment_count: 142,
      likes: 3724,
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Movies",
      isNew: true,
      isFeatured: true,
      duration: "8 min read"
    },
    {
      id: 2,
      title: "Neurological Gaming: Mind-Controlled Interfaces",
      description: "The revolutionary technology allowing gamers to control virtual worlds with thought alone",
      author: "Ethan Rodriguez",
      created_at: "2025-02-21T09:15:00Z",
      comment_count: 98,
      likes: 2156,
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Gaming",
      isNew: true,
      duration: "6 min read"
    },
    {
      id: 3,
      title: "AI Composers Topping the Charts",
      description: "How artificial intelligence is creating hit songs that humans can't stop listening to",
      author: "Sophia Chen",
      created_at: "2025-02-19T16:45:00Z",
      comment_count: 76,
      likes: 1893,
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Music",
      isFeatured: true,
      duration: "5 min read"
    },
    {
      id: 4,
      title: "The End of Traditional Seasons",
      description: "How streaming platforms are reinventing television release schedules and viewing habits",
      author: "James Wilson",
      created_at: "2025-02-18T11:20:00Z",
      comment_count: 112,
      likes: 2437,
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Television",
      duration: "7 min read"
    },
    {
      id: 5,
      title: "Holographic Performances Revolutionize Concerts",
      description: "The technology bringing deceased musical legends back to the stage alongside today's stars",
      author: "Emma Davis",
      created_at: "2025-02-17T13:10:00Z",
      comment_count: 89,
      likes: 1762,
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Music",
      isFeatured: true,
      duration: "9 min read"
    },
    {
      id: 6,
      title: "Indie Developers Challenging AAA Studios",
      description: "How small teams with innovative ideas are reshaping the gaming landscape",
      author: "Alex Kim",
      created_at: "2025-02-22T10:30:00Z",
      comment_count: 67,
      likes: 1548,
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Gaming",
      isNew: true,
      duration: "6 min read"
    },
    {
      id: 7,
      title: "The Psychology Behind Binge-Watching",
      description: "Understanding the science of streaming addiction and how platforms engineer the perfect watch experience",
      author: "Olivia Martinez",
      created_at: "2025-02-16T15:20:00Z",
      comment_count: 103,
      likes: 2284,
      image: "https://images.unsplash.com/photo-1522869635100-187f6605151d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Television",
      duration: "10 min read"
    },
    {
      id: 8,
      title: "Virtual Reality Theme Parks",
      description: "The emergence of location-based VR experiences bringing new life to entertainment venues",
      author: "Jackson Lee",
      created_at: "2025-02-23T09:45:00Z",
      comment_count: 54,
      likes: 1327,
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Gaming",
      isNew: true,
      duration: "7 min read"
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [_, setHoveredArticle] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Auto-rotate hero content
  useEffect(() => {
    const featuredContent = entertainmentContent.filter(item => item.isFeatured);
    if (featuredContent.length > 1) {
      const interval = setInterval(() => {
        setHeroIndex(prev => (prev + 1) % featuredContent.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, []);

  const featuredContent = entertainmentContent.filter(item => item.isFeatured);
  const currentHero = featuredContent[heroIndex];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Movies":
        return <Film size={16} />;
      case "Television":
        return <Tv size={16} />;
      case "Music":
        return <Music size={16} />;
      case "Gaming":
        return <Gamepad2 size={16} />;
      default:
        return null;
    }
  };

  const filteredContent = activeCategory === "All" 
    ? entertainmentContent
    : entertainmentContent.filter(content => content.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-[#0c0c14] to-[#121219] min-h-screen pb-20">
      {/* Navigation Bar */}
      <nav className="bg-[#0a0a12]/80 backdrop-blur-md border-b border-[#2a2a3a] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-[#3cffd0] font-volt text-2xl tracking-tight">Entertainment</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {["All", "Movies", "Television", "Music", "Gaming"].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`transition-all ${
                      activeCategory === category
                        ? "text-[#3cffd0] font-medium"
                        : "text-gray-300 hover:text-[#3cffd0]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Category Tabs - shown only on small screens */}
      <div className="md:hidden overflow-x-auto scrollbar-hide px-4 sticky top-16 bg-[#0a0a12]/80 backdrop-blur-md z-40 border-b border-[#2a2a3a]">
        <div className="flex space-x-2 py-3">
          {["All", "Movies", "Television", "Music", "Gaming"].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-[#3cffd0] text-[#0a0a12] font-medium"
                  : "bg-[#1a1a2a] text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        {currentHero && (
          <div className="relative overflow-hidden rounded-xl mt-8 lg:mt-12 group" style={{ height: "70vh", maxHeight: "700px" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 group-hover:scale-105" 
              style={{ 
                backgroundImage: `url(${currentHero.image})`,
                backgroundPosition: 'center',
              }}
            ></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#3cffd0] text-[#0a0a12] text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                  {getCategoryIcon(currentHero.category)}
                  <span>{currentHero.category}</span>
                </span>
                {currentHero.isNew && (
                  <span className="bg-[#ff3c7b] text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
                )}
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 max-w-4xl font-volt tracking-tight leading-tight">
                {currentHero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-3xl">
                {currentHero.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#3cffd0] flex items-center justify-center text-[#0a0a12] font-bold">
                    {currentHero.author.charAt(0)}
                  </div>
                  <span className="text-white">{currentHero.author}</span>
                </div>
                <span className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{new Date(currentHero.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MessageSquare size={16} />
                  <span>{currentHero.comment_count} comments</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star size={16} />
                  <span>{currentHero.likes} likes</span>
                </span>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Link to={`/entertainment/${currentHero.id}`} className="bg-[#3cffd0] hover:bg-[#3cffd0]/90 text-[#0a0a12] py-3 px-6 rounded-lg font-medium flex items-center space-x-2 transition-all">
                  <Play size={18} />
                  <span>Read Article</span>
                </Link>
                <button className="bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg font-medium backdrop-blur-sm flex items-center space-x-2 transition-all">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Hero navigation dots */}
            <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
              {featuredContent.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setHeroIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === heroIndex ? "bg-[#3cffd0] w-8" : "bg-white/50 hover:bg-white"}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trending Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <TrendingUp size={24} className="text-[#3cffd0]" />
              <span>Trending Now</span>
            </h2>
            <Link to="/entertainment/trending" className="text-[#3cffd0] hover:underline text-sm">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.filter(item => !item.isFeatured).slice(0, 3).map((content) => (
              <Link to={`/entertainment/${content.id}`} key={content.id}>
                <div 
                  className="bg-[#15151f] rounded-xl overflow-hidden hover:transform hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col border border-[#2a2a3a] hover:border-[#3cffd0]/50 group"
                  onMouseEnter={() => setHoveredArticle(content.id)}
                  onMouseLeave={() => setHoveredArticle(null)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={content.image} 
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <span className="bg-[#3cffd0] text-[#0a0a12] text-xs font-medium px-2 py-1 rounded-md">
                        {content.category}
                      </span>
                      {content.isNew && (
                        <span className="bg-[#ff3c7b] text-white text-xs font-medium px-2 py-1 rounded-md">NEW</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#3cffd0] transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                      {content.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-auto">
                      <div className="flex items-center space-x-3">
                        <span>{content.author}</span>
                        <span>•</span>
                        <span>{content.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1">
                          <MessageSquare size={14} />
                          <span>{content.comment_count}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Star size={14} />
                          <span>{content.likes}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <div className="hidden md:flex space-x-2">
              {["All", "Movies", "Television", "Music", "Gaming"].map((category) => (
                <button
                  key={`latest-${category}`}
                  onClick={() => handleCategoryChange(category)}
                  className={`text-sm px-3 py-1 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-[#3cffd0] text-[#0a0a12]"
                      : "bg-[#1a1a2a] text-gray-300 hover:bg-[#2a2a3a]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredContent.filter(item => !item.isFeatured).slice(0, 6).map((content) => (
              <Link to={`/entertainment/${content.id}`} key={`latest-${content.id}`}>
                <div className="flex gap-4 group">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={content.image} 
                      alt={content.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[#3cffd0] text-xs font-medium">
                        {content.category}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-400 text-xs">
                        {new Date(content.created_at).toLocaleString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3cffd0] transition-colors line-clamp-2">
                      {content.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2 hidden md:block">
                      {content.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mt-auto">
                      <span>{content.author}</span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare size={12} />
                        <span>{content.comment_count}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star size={12} />
                        <span>{content.likes}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="bg-[#1a1a2a] hover:bg-[#2a2a3a] text-white font-medium py-3 px-8 rounded-lg transition-all border border-[#3a3a4a]">
              Load More
            </button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #0f0f17 0%, #1a1a28 100%)" }}>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="opacity-10 h-full">
              <path fill="#3CFFD0" d="M47.7,-57.2C59.9,-45.3,67.1,-28.5,69.2,-11.1C71.3,6.3,68.3,24.2,58.7,38.4C49.1,52.5,32.8,63,15.2,68C-2.3,73,-21.2,72.6,-38.8,65.3C-56.4,58,-72.8,43.9,-77.8,26.5C-82.8,9.1,-76.5,-11.5,-66.3,-27.9C-56.1,-44.3,-42.1,-56.4,-27,-63.1C-11.9,-69.8,4.3,-70.9,19.6,-67.7C34.9,-64.5,49.2,-56.9,47.7,-57.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="p-8 md:p-12 lg:p-16 relative z-10">
            <div className="max-w-xl">
              <span className="text-[#3cffd0] font-medium">Stay Updated</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Never Miss the Latest in Entertainment</h2>
              <p className="text-gray-300 mb-8">
                Subscribe to our newsletter and receive personalized entertainment news, exclusive interviews, and special offers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-[#0a0a12] text-white rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-[#3cffd0] border border-[#2a2a3a]"
                />
                <button className="bg-[#3cffd0] hover:bg-[#3cffd0]/90 text-[#0a0a12] px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-gray-400 text-xs mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Entertainment Categories Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Movies", icon: <Film size={24} />, count: "428 articles", color: "#3cffd0", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
              { name: "Television", icon: <Tv size={24} />, count: "365 articles", color: "#ff3c7b", image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
              { name: "Music", icon: <Music size={24} />, count: "512 articles", color: "#a03cff", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
              { name: "Gaming", icon: <Gamepad2 size={24} />, count: "394 articles", color: "#ffb300", image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" }
            ].map((category) => (
              <Link 
                to={`/entertainment/category/${category.name.toLowerCase()}`} 
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className="relative rounded-xl overflow-hidden h-32 group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-between">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center" 
                    style={{ backgroundColor: category.color }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}