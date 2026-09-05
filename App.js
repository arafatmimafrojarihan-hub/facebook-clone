import React, { useState } from 'react';
import {
  Search,
  Home,
  Users,
  Tv,
  Store,
  Grid,
  MessageCircle,
  Bell,
  Bookmark,
  Clock,
  Video,
  Image,
  Smile,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe,
  MoreHorizontal,
  Plus,
  LogOut,
  X,
  Send,
  Flame,
  Gamepad2,
  Compass
} from 'lucide-react';

export default function App() {
  // Navigation & Authentication state
  const [currentView, setCurrentView] = useState('login'); // 'login' | 'feed'
  const [user, setUser] = useState(null);

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dropdown menu state
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Post Creation state
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  // Active Tab state ('home' | 'friends' | 'watch' | 'store')
  const [activeTab, setActiveTab] = useState('home');

  // Video Section category state
  const [videoCategory, setVideoCategory] = useState('all');

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // New Comment Input per post state map
  const [commentInputs, setCommentInputs] = useState({});

  // Stories State
  const [stories, setStories] = useState([
    {
      id: 1,
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 2,
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 3,
      name: 'Emily Davis',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300'
    }
  ]);

  // Feed Posts state
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      time: '2 hrs ago',
      content: 'Building a full-stack social media clone web app! What do you guys think? 🚀💻 Feel free to post your thoughts below.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      likes: 124,
      isLiked: false,
      comments: [
        { id: 101, author: 'Sophia Wilson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', text: 'Looks amazing! Great job on the UI layout.' },
        { id: 102, author: 'David Miller', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', text: 'Tailwind CSS is super crisp here 👌' }
      ]
    },
    {
      id: 2,
      author: 'Jessica Taylor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      time: '5 hrs ago',
      content: 'Just finished a weekend trip to the mountains! Fresh air and zero notifications (well, almost) 🏔️🌲✨',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
      likes: 89,
      isLiked: true,
      comments: [
        { id: 103, author: 'Alex Morgan', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', text: 'Stunning view! Which trail was this?' }
      ]
    }
  ]);

  // Video Section Videos State
  const [videos, setVideos] = useState([
    {
      id: 1,
      creator: 'React Official',
      avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=150',
      time: '1 day ago',
      category: 'tech',
      title: 'React 19 In 100 Seconds',
      description: 'Check out the official breakdown of React 19 features including Actions, useActionState, and server components!',
      embedUrl: 'https://www.youtube.com/embed/SqcY0GlETPk',
      views: '245K views',
      likes: 1820,
      isLiked: false,
      comments: [
        { id: 201, author: 'Tech Enthusiast', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', text: 'React 19 is going to save so much boilerplate code!' }
      ]
    },
    {
      id: 2,
      creator: 'Nature & Wildlife HD',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
      time: '3 days ago',
      category: 'live',
      title: 'Relaxing Ocean & Nature 4K Cinematic Drone Footage',
      description: 'Take a break and enjoy calming 4K coastal scenery accompanied by natural soundscapes.',
      embedUrl: 'https://www.youtube.com/embed/BHACKCNDMW8',
      views: '1.2M views',
      likes: 5400,
      isLiked: true,
      comments: [
        { id: 202, author: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', text: 'So soothing! Playing this while coding.' }
      ]
    },
    {
      id: 3,
      creator: 'Fireship Tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
      time: '4 days ago',
      category: 'gaming',
      title: '10 Web Dev Trends You Need to Know',
      description: 'A quick overview of modern full-stack web architectures, AI integrations, and framework updates.',
      embedUrl: 'https://www.youtube.com/embed/erEgovG9W38',
      views: '510K views',
      likes: 3890,
      isLiked: false,
      comments: []
    }
  ]);

  // Online Contacts List
  const contacts = [
    { id: 1, name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', online: true },
    { id: 2, name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', online: true },
    { id: 3, name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', online: true },
    { id: 4, name: 'David Miller', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', online: false },
    { id: 5, name: 'Sophia Wilson', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150', online: true }
  ];

  // Handle Login Submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return;
    const userName = email.split('@')[0] || 'John Doe';
    const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);
    
    setUser({
      name: formattedName,
      email: email,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'
    });
    setCurrentView('feed');
  };

  // Handle Logout
  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
    setIsProfileMenuOpen(false);
    setEmail('');
    setPassword('');
  };

  // Handle Create Post
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim() && !newPostImage.trim()) return;

    const newPost = {
      id: Date.now(),
      author: user ? user.name : 'John Doe',
      avatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      time: 'Just now',
      content: newPostText,
      image: newPostImage.trim() || null,
      likes: 0,
      isLiked: false,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    setNewPostImage('');
    setIsPostModalOpen(false);
  };

  // Handle Like Toggle for Feed Posts
  const handleToggleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  // Handle Like Toggle for Videos
  const handleToggleVideoLike = (videoId) => {
    setVideos(videos.map(video => {
      if (video.id === videoId) {
        return {
          ...video,
          isLiked: !video.isLiked,
          likes: video.isLiked ? video.likes - 1 : video.likes + 1
        };
      }
      return video;
    }));
  };

  // Handle Comment Submission for Feed Posts
  const handleAddComment = (postId) => {
    const text = commentInputs[postId];
    if (!text || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      author: user ? user.name : 'John Doe',
      avatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      text: text.trim()
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));

    setCommentInputs({ ...commentInputs, [postId]: '' });
  };

  // Handle Comment Submission for Video Posts
  const handleAddVideoComment = (videoId) => {
    const text = commentInputs[`video-${videoId}`];
    if (!text || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      author: user ? user.name : 'John Doe',
      avatar: user ? user.avatar : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      text: text.trim()
    };

    setVideos(videos.map(video => {
      if (video.id === videoId) {
        return {
          ...video,
          comments: [...video.comments, newComment]
        };
      }
      return video;
    }));

    setCommentInputs({ ...commentInputs, [`video-${videoId}`]: '' });
  };

  // Filtered posts based on search query
  const filteredPosts = posts.filter(post => 
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtered videos based on search query & category
  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          video.creator.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = videoCategory === 'all' || video.category === videoCategory;
    return matchesSearch && matchesCategory;
  });

  // VIEW 1: LOGIN PAGE
  if (currentView === 'login') {
    return (
      <div className="bg-slate-100 font-sans text-slate-900 min-h-screen flex flex-col justify-between">
        <main className="flex-1 flex items-center justify-center px-4 py-8 lg:py-20">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left space-y-3 lg:pr-6">
              <h1 className="text-blue-600 font-bold text-5xl lg:text-6xl tracking-tight">facebook</h1>
              <p className="text-2xl lg:text-3xl text-slate-700 font-normal leading-snug">
                Facebook helps you connect and share with the people in your life.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 w-full max-w-[396px] space-y-4">
                <form onSubmit={handleLogin} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address or phone number"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-xl transition duration-150 active:scale-[0.99]"
                  >
                    Log In
                  </button>
                </form>

                <div className="text-center pt-1">
                  <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-blue-600 hover:underline text-sm font-medium">
                    Forgotten password?
                  </a>
                </div>

                <hr className="border-slate-200 my-2" />

                <div className="text-center pt-2 pb-1">
                  <button
                    type="button"
                    onClick={() => {
                      setEmail('demo.user@facebook.com');
                      setPassword('password123');
                    }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-lg text-base transition duration-150 active:scale-[0.99]"
                  >
                    Create new account
                  </button>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-7 text-center">
                <a href="#page" onClick={(e) => e.preventDefault()} className="font-bold hover:underline text-slate-800">Create a Page</a> for a celebrity, brand or business.
              </p>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-8 px-4 text-xs text-slate-500 shrink-0">
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-slate-600">
              <span className="text-slate-400">English (UK)</span>
              <a href="#lang" onClick={(e) => e.preventDefault()} className="hover:underline">বাংলা</a>
              <a href="#lang" onClick={(e) => e.preventDefault()} className="hover:underline">অসমীয়া</a>
              <a href="#lang" onClick={(e) => e.preventDefault()} className="hover:underline">हिन्दी</a>
            </div>

            <hr className="border-slate-200" />

            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="#link" onClick={(e) => e.preventDefault()} className="hover:underline">Sign Up</a>
              <a href="#link" onClick={(e) => e.preventDefault()} className="hover:underline">Log In</a>
              <a href="#link" onClick={(e) => e.preventDefault()} className="hover:underline">Messenger</a>
              <a href="#link" onClick={(e) => e.preventDefault()} className="hover:underline">Facebook Lite</a>
              <a href="#link" onClick={(e) => e.preventDefault()} className="hover:underline">Watch</a>
            </div>

            <div className="pt-2">
              <span>Meta © 2026</span>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // VIEW 2: MAIN FEED & WATCH APP
  return (
    <div className="bg-slate-100 font-sans text-slate-900 antialiased h-screen flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 h-14 px-4 flex items-center justify-between shadow-sm shrink-0 z-40">
        <div className="flex items-center space-x-2">
          <div 
            onClick={() => setActiveTab('home')}
            className="bg-blue-600 text-white font-extrabold text-2xl w-10 h-10 rounded-full flex items-center justify-center cursor-pointer select-none"
          >
            f
          </div>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeTab === 'watch' ? "Search videos..." : "Search Facebook..."}
              className="bg-slate-100 pl-9 pr-4 py-2 rounded-full text-sm outline-none w-48 md:w-60 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="flex items-center space-x-1 md:space-x-2 h-full">
          <button 
            onClick={() => setActiveTab('home')}
            className={`h-full px-4 md:px-7 flex items-center border-b-4 transition ${
              activeTab === 'home' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-100'
            }`}
            title="Home"
          >
            <Home className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('friends')}
            className={`h-full px-4 md:px-7 flex items-center border-b-4 transition ${
              activeTab === 'friends' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-100'
            }`}
            title="Friends"
          >
            <Users className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('watch')}
            className={`h-full px-4 md:px-7 items-center border-b-4 transition flex ${
              activeTab === 'watch' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-100'
            }`}
            title="Watch / Videos"
          >
            <Tv className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('store')}
            className={`h-full px-4 md:px-7 items-center border-b-4 transition hidden md:flex ${
              activeTab === 'store' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-100'
            }`}
            title="Marketplace"
          >
            <Store className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center space-x-2 relative">
          <button className="bg-slate-200 hover:bg-slate-300 p-2.5 rounded-full transition hidden sm:flex">
            <Grid className="w-5 h-5 text-slate-700" />
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 p-2.5 rounded-full transition relative">
            <MessageCircle className="w-5 h-5 text-slate-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
          <button className="bg-slate-200 hover:bg-slate-300 p-2.5 rounded-full transition relative">
            <Bell className="w-5 h-5 text-slate-700" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">5</span>
          </button>

          <div className="relative">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'}
              alt="Profile"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="w-10 h-10 rounded-full cursor-pointer object-cover border border-slate-300 hover:opacity-90 transition"
            />

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1 z-50">
                <div className="flex items-center space-x-3 p-2 hover:bg-slate-100 rounded-lg cursor-pointer">
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'}
                    className="w-10 h-10 rounded-full object-cover"
                    alt="User"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{user?.name || 'John Doe'}</h4>
                    <p className="text-xs text-slate-500">See your profile</p>
                  </div>
                </div>

                <hr className="border-slate-100 my-1" />

                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 p-2 hover:bg-red-50 text-red-600 rounded-lg transition text-left"
                >
                  <div className="bg-red-100 p-2 rounded-full">
                    <LogOut className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SIDEBAR */}
        <aside className="w-64 xl:w-72 p-3 overflow-y-auto hidden lg:block space-y-1 shrink-0">
          <a href="#profile" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }} className="flex items-center space-x-3 p-2 hover:bg-slate-200 rounded-lg transition">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'}
              className="w-9 h-9 rounded-full object-cover"
              alt="User"
            />
            <span className="font-semibold text-sm">{user?.name || 'John Doe'}</span>
          </a>

          <a href="#friends" onClick={(e) => { e.preventDefault(); setActiveTab('friends'); }} className={`flex items-center space-x-3 p-2 rounded-lg transition ${activeTab === 'friends' ? 'bg-slate-200 text-blue-600 font-semibold' : 'hover:bg-slate-200 text-slate-700'}`}>
            <Users className="text-blue-500 w-6 h-6" />
            <span className="font-medium text-sm">Friends</span>
          </a>

          <a href="#video" onClick={(e) => { e.preventDefault(); setActiveTab('watch'); }} className={`flex items-center space-x-3 p-2 rounded-lg transition ${activeTab === 'watch' ? 'bg-slate-200 text-blue-600 font-semibold' : 'hover:bg-slate-200 text-slate-700'}`}>
            <Tv className="text-emerald-500 w-6 h-6" />
            <span className="font-medium text-sm">Video / Watch</span>
          </a>

          <a href="#memories" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 p-2 hover:bg-slate-200 rounded-lg transition text-slate-700">
            <Clock className="text-blue-500 w-6 h-6" />
            <span className="font-medium text-sm">Memories</span>
          </a>

          <a href="#saved" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 p-2 hover:bg-slate-200 rounded-lg transition text-slate-700">
            <Bookmark className="text-purple-500 w-6 h-6" />
            <span className="font-medium text-sm">Saved</span>
          </a>
        </aside>

        {/* MAIN FEED / VIDEO SECTION */}
        <main className="flex-1 overflow-y-auto p-4 flex flex-col items-center">
          
          {/* WATCH / VIDEO VIEW */}
          {activeTab === 'watch' ? (
            <div className="w-full max-w-[680px] space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Tv className="w-7 h-7 text-emerald-500" />
                    <h2 className="text-xl font-bold text-slate-800">Video Watch Feed</h2>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Streaming & Clips
                  </span>
                </div>

                <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
                  <button 
                    onClick={() => setVideoCategory('all')}
                    className={`px-3 py-1.5 rounded-full font-medium transition shrink-0 ${videoCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    Home / All
                  </button>
                  <button 
                    onClick={() => setVideoCategory('live')}
                    className={`px-3 py-1.5 rounded-full font-medium transition flex items-center space-x-1 shrink-0 ${videoCategory === 'live' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    <Flame className="w-3.5 h-3.5 text-red-500" />
                    <span>Live</span>
                  </button>
                  <button 
                    onClick={() => setVideoCategory('gaming')}
                    className={`px-3 py-1.5 rounded-full font-medium transition flex items-center space-x-1 shrink-0 ${videoCategory === 'gaming' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    <Gamepad2 className="w-3.5 h-3.5 text-purple-500" />
                    <span>Gaming</span>
                  </button>
                  <button 
                    onClick={() => setVideoCategory('tech')}
                    className={`px-3 py-1.5 rounded-full font-medium transition flex items-center space-x-1 shrink-0 ${videoCategory === 'tech' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                  >
                    <Compass className="w-3.5 h-3.5 text-blue-500" />
                    <span>Tech & Dev</span>
                  </button>
                </div>
              </div>

              {filteredVideos.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center text-slate-500 border border-slate-200">
                  No videos found matching your filter.
                </div>
              ) : (
                filteredVideos.map(video => (
                  <div key={video.id} className="bg-white rounded-xl shadow-sm border border-slate-200 space-y-3 p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3 items-center">
                        <img src={video.avatar} className="w-10 h-10 rounded-full object-cover" alt={video.creator} />
                        <div>
                          <h4 className="font-semibold text-sm hover:underline cursor-pointer flex items-center space-x-1">
                            <span>{video.creator}</span>
                            <span className="text-blue-500 text-xs">✓</span>
                          </h4>
                          <p className="text-xs text-slate-500 flex items-center space-x-1">
                            <span>{video.time}</span>
                            <span>•</span>
                            <span>{video.views}</span>
                            <span>•</span>
                            <Globe className="w-3 h-3" />
                          </p>
                        </div>
                      </div>
                      <button className="text-slate-500 hover:bg-slate-100 p-2 rounded-full transition">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-semibold text-base text-slate-800">{video.title}</h3>
                      <p className="text-sm text-slate-600">{video.description}</p>
                    </div>

                    {/* Video Embed */}
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <span>👍 {video.likes} likes</span>
                      <span>{video.comments.length} comments</span>
                    </div>

                    <hr className="border-slate-100" />

                    <div className="flex justify-around text-slate-600 text-sm font-medium">
                      <button 
                        onClick={() => handleToggleVideoLike(video.id)}
                        className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition ${video.isLiked ? 'text-blue-600 font-bold' : ''}`}
                      >
                        <ThumbsUp className="w-5 h-5" />
                        <span>Like</span>
                      </button>
                      <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition">
                        <MessageSquare className="w-5 h-5" />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                    </div>

                    {/* Comments Section for Video */}
                    <div className="pt-2 space-y-2 border-t border-slate-100">
                      {video.comments.map(comment => (
                        <div key={comment.id} className="flex space-x-2 text-xs">
                          <img src={comment.avatar} className="w-7 h-7 rounded-full object-cover" alt={comment.author} />
                          <div className="bg-slate-100 p-2.5 rounded-2xl flex-1">
                            <span className="font-semibold block text-slate-800">{comment.author}</span>
                            <span className="text-slate-700">{comment.text}</span>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-2 pt-1">
                        <img src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'} className="w-7 h-7 rounded-full object-cover" alt="User" />
                        <div className="flex-1 flex bg-slate-100 rounded-full px-3 py-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            value={commentInputs[`video-${video.id}`] || ''}
                            onChange={(e) => setCommentInputs({ ...commentInputs, [`video-${video.id}`]: e.target.value })}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddVideoComment(video.id)}
                            className="bg-transparent text-xs w-full outline-none"
                          />
                          <button onClick={() => handleAddVideoComment(video.id)} className="text-blue-600 hover:text-blue-700">
                            <Send className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>
          ) : (
            /* HOME FEED VIEW */
            <div className="w-full max-w-[680px] space-y-4">
              
              {/* Stories Bar */}
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none">
                <div className="w-28 h-48 bg-white rounded-xl shadow-sm border border-slate-200 flex-shrink-0 relative overflow-hidden group cursor-pointer">
                  <img src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'} className="h-32 w-full object-cover group-hover:scale-105 transition" alt="Create story" />
                  <div className="absolute bottom-0 w-full bg-white p-2 text-center pt-4">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 border-4 border-white text-white rounded-full p-1">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 block leading-tight">Create Story</span>
                  </div>
                </div>

                {stories.map(story => (
                  <div key={story.id} className="w-28 h-48 rounded-xl shadow-sm flex-shrink-0 relative overflow-hidden group cursor-pointer">
                    <img src={story.image} className="w-full h-full object-cover group-hover:scale-105 transition" alt={story.name} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
                    <img src={story.avatar} className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-600 object-cover" alt={story.name} />
                    <span className="absolute bottom-2 left-2 right-2 text-white font-medium text-xs leading-tight drop-shadow">{story.name}</span>
                  </div>
                ))}
              </div>

              {/* Create Post Input Card */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 space-y-3">
                <div className="flex items-center space-x-2">
                  <img src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'} className="w-10 h-10 rounded-full object-cover" alt="User" />
                  <button 
                    onClick={() => setIsPostModalOpen(true)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full py-2.5 px-4 text-left w-full text-sm transition"
                  >
                    What's on your mind, {user?.name || 'John'}?
                  </button>
                </div>
                <hr className="border-slate-100" />
                <div className="flex justify-around text-xs font-medium text-slate-600">
                  <button onClick={() => setIsPostModalOpen(true)} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-lg flex-1 justify-center transition">
                    <Video className="text-red-500 w-5 h-5" />
                    <span>Live video</span>
                  </button>
                  <button onClick={() => setIsPostModalOpen(true)} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-lg flex-1 justify-center transition">
                    <Image className="text-emerald-500 w-5 h-5" />
                    <span>Photo/video</span>
                  </button>
                  <button onClick={() => setIsPostModalOpen(true)} className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-lg flex-1 justify-center transition">
                    <Smile className="text-amber-500 w-5 h-5" />
                    <span>Feeling/activity</span>
                  </button>
                </div>
              </div>

              {/* Posts Feed */}
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3 items-center">
                      <img src={post.avatar} className="w-10 h-10 rounded-full object-cover" alt={post.author} />
                      <div>
                        <h4 className="font-semibold text-sm hover:underline cursor-pointer">{post.author}</h4>
                        <p className="text-xs text-slate-500 flex items-center space-x-1">
                          <span>{post.time}</span>
                          <span>•</span>
                          <Globe className="w-3 h-3" />
                        </p>
                      </div>
                    </div>
                    <button className="text-slate-500 hover:bg-slate-100 p-2 rounded-full transition">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-slate-800 leading-normal">{post.content}</p>

                  {post.image && (
                    <div className="rounded-lg overflow-hidden border border-slate-100">
                      <img src={post.image} className="w-full object-cover max-h-96" alt="Post attachment" />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span>👍 {post.likes} likes</span>
                    <span>{post.comments.length} comments</span>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex justify-around text-slate-600 text-sm font-medium">
                    <button 
                      onClick={() => handleToggleLike(post.id)}
                      className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition ${post.isLiked ? 'text-blue-600 font-bold' : ''}`}
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition">
                      <MessageSquare className="w-5 h-5" />
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 flex-1 justify-center transition">
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </button>
                  </div>

                  {/* Comments Section */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {post.comments.map(comment => (
                      <div key={comment.id} className="flex space-x-2 text-xs">
                        <img src={comment.avatar} className="w-7 h-7 rounded-full object-cover" alt={comment.author} />
                        <div className="bg-slate-100 p-2.5 rounded-2xl flex-1">
                          <span className="font-semibold block text-slate-800">{comment.author}</span>
                          <span className="text-slate-700">{comment.text}</span>
                        </div>
                      </div>
                    ))}

                    <div className="flex space-x-2 pt-1">
                      <img src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'} className="w-7 h-7 rounded-full object-cover" alt="User" />
                      <div className="flex-1 flex bg-slate-100 rounded-full px-3 py-1">
                        <input
                          type="text"
                          placeholder="Write a comment..."
                          value={commentInputs[post.id] || ''}
                          onChange={(e) => setCommentInputs({ ...commentInputs, [post.id]: e.target.value })}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                          className="bg-transparent text-xs w-full outline-none"
                        />
                        <button onClick={() => handleAddComment(post.id)} className="text-blue-600 hover:text-blue-700">
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </main>

        {/* RIGHT SIDEBAR - CONTACTS */}
        <aside className="w-64 xl:w-72 p-3 overflow-y-auto hidden xl:block shrink-0 space-y-2">
          <div className="flex justify-between items-center text-slate-500 mb-2">
            <h3 className="font-semibold text-sm">Contacts</h3>
            <div className="flex space-x-2">
              <Search className="w-4 h-4 cursor-pointer hover:text-slate-700" />
              <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-slate-700" />
            </div>
          </div>

          {contacts.map(contact => (
            <div key={contact.id} className="flex items-center space-x-3 p-2 hover:bg-slate-200 rounded-lg cursor-pointer transition">
              <div className="relative">
                <img src={contact.avatar} className="w-9 h-9 rounded-full object-cover" alt={contact.name} />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <span className="font-medium text-sm text-slate-800">{contact.name}</span>
            </div>
          ))}
        </aside>

      </div>

      {/* CREATE POST MODAL */}
      {isPostModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-150">
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="font-bold text-lg text-slate-800 mx-auto">Create Post</h3>
              <button 
                onClick={() => setIsPostModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full text-slate-600 transition absolute right-4"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-4 space-y-4">
              <div className="flex items-center space-x-3">
                <img src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150'} className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div>
                  <h4 className="font-semibold text-sm">{user?.name || 'John Doe'}</h4>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded flex items-center gap-1 w-max">
                    <Globe className="w-3 h-3" /> Public
                  </span>
                </div>
              </div>

              <textarea
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder={`What's on your mind, ${user?.name || 'John'}?`}
                className="w-full text-base border-none outline-none resize-none min-h-[100px]"
              />

              <input
                type="url"
                value={newPostImage}
                onChange={(e) => setNewPostImage(e.target.value)}
                placeholder="Optional image URL (e.g. https://images.unsplash.com/...)"
                className="w-full text-xs p-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                disabled={!newPostText.trim() && !newPostImage.trim()}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-2.5 rounded-lg transition"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
