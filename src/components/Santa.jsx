import React, { useState } from 'react';
import { Gift, Sparkles, Star, Snowflake, Heart, Music, Camera, Coffee, Book, Palette, Gamepad2, Flower2 } from 'lucide-react';
import santa from '../assets/santa.png';
import tree from '../assets/tree.png'
import xmastar from '../assets/xmasstar.png'

const Santa = () => {
  const [stage, setStage] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [selectedGift, setSelectedGift] = useState(null);
  const [openingGift, setOpeningGift] = useState(false);
  const capitalizeName = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
const formattedUserName = capitalizeName(userName.trim());

  const gifts = [
  {
    id: 1,
    color: 'from-pink-500 to-red-500',
    icon: Heart,
    name: 'A Warm Wish',
    message: 'A heartfelt Christmas wish',
    detail: `Dear ${formattedUserName}, may your life be filled with peace, love, and quiet happiness. 
    Even on hard days, remember that you are stronger than you think and deeply valued. 🎄❤️`
  },
  {
    id: 2,
    color: 'from-blue-500 to-cyan-500',
    icon: Star,
    name: 'A Gentle Reminder',
    message: 'A message for your heart',
    detail: `Sometimes progress is slow, and that is okay. 
    Dear ${formattedUserName}, take one step at a time. Small efforts today build a beautiful tomorrow. 🌟`
  },
  {
    id: 3,
    color: 'from-purple-500 to-pink-500',
    icon: Book,
    name: 'A Short Christmas Tale',
    message: 'A magical little story',
    detail: `Once upon a winter night, ${formattedUserName} learned that true magic was not in gifts,
    but in kindness shared and hope carried forward. And that magic stayed forever. ✨📖`
  },
  {
    id: 4,
    color: 'from-green-500 to-teal-500',
    icon: Flower2,
    name: 'Growth Wish',
    message: 'A wish for your journey',
    detail: `Like a seed growing quietly beneath the soil, your efforts matter.
    Keep going, ${formattedUserName}. Your time to bloom will come. 🌱💚`
  },
  {
    id: 5,
    color: 'from-yellow-500 to-orange-500',
    icon: Sparkles,
    name: 'Hope Note',
    message: 'A spark of hope',
    detail: `No matter how dark the night feels, morning always comes.
    Dear ${formattedUserName}, never lose hope — brighter days are closer than you think. ✨`
  },
  {
    id: 6,
    color: 'from-indigo-500 to-blue-500',
    icon: Snowflake,
    name: 'A Calm Thought',
    message: 'Peaceful words for you',
    detail: `Slow down and breathe, ${formattedUserName}. 
    You don’t have to figure everything out today. Peace begins with patience. ❄️`
  },
  {
    id: 7,
    color: 'from-red-500 to-pink-500',
    icon: Gift,
    name: 'Gratitude Message',
    message: 'A thankful thought',
    detail: `Be proud of how far you’ve come, ${formattedUserName}.
    Even surviving tough days is an achievement worth celebrating. 🎁❤️`
  },
  {
    id: 8,
    color: 'from-purple-500 to-indigo-500',
    icon: Star,
    name: 'Life Motivation',
    message: 'Words to lift you up',
    detail: `Your story is still being written.
    Failures do not define you — courage does. Keep moving forward, ${formattedUserName}. 🌟`
  }
];


  const handleOpenGift = () => {
    if (formattedUserName.trim()) {
      setStage('santa-arrives');
      setTimeout(() => setStage('gift-selection'), 3000);
    }
  };

  const handleGiftSelect = (gift) => {
    setOpeningGift(true);
    setTimeout(() => {
      setSelectedGift(gift);
      setOpeningGift(false);
      setStage('gift-reveal');
    }, 1500);
  };

  
  const goToGiftSelection = () => {
  setSelectedGift(null);
  setOpeningGift(false);
  setStage('gift-selection');
};




  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-blue-900 via-blue-500 to-black">

      {/* Animated Snow */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-80 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 110}%`,
              animation: `fall ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${8 + Math.random() * 12}px`
            }}
          >
            ❄️
          </div>
        ))}
      </div>
  



      {/* Christmas Trees - Left Side */}
      <div className="absolute bottom-0 left-0 z-10 opacity-90">
        <div className="text-9xl transform -translate-x-8">🎄</div>
      </div>
      <div className="absolute bottom-20 left-20 z-10 opacity-80">
        <div className="text-7xl">🎄</div>
      </div>
      <div className="absolute top-40 left-10 z-10 opacity-70">
        <div className="text-6xl">🎄</div>
      </div>

      {/* Christmas Trees - Right Side */}
      <div className="absolute bottom-0 right-0 z-10 opacity-90">
        <div className="text-9xl transform translate-x-8">🎄</div>
      </div>
      <div className="absolute bottom-32 right-24 z-10 opacity-80">
        <div className="text-7xl">🎄</div>
      </div>
      <div className="absolute top-32 right-16 z-10 opacity-70">
        <div className="text-6xl">🎄</div>
      </div>

      {/* Gift Boxes Scattered */}
      <div className="absolute bottom-10 left-1/4 z-10 opacity-80 animate-bounce" style={{ animationDuration: '3s' }}>
        <div className="text-5xl">🎁</div>
      </div>
      <div className="absolute bottom-24 right-1/4 z-10 opacity-80 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
        <div className="text-6xl">🎁</div>
      </div>
      <div className="absolute top-1/3 left-1/4 z-10 opacity-70 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <div className="text-4xl">🎁</div>
      </div>
      <div className="absolute top-1/4 right-1/3 z-10 opacity-70 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
        <div className="text-5xl">🎁</div>
      </div>

      {/* Stars Scattered */}
      <div className="absolute top-10 left-1/4 z-10 opacity-80 animate-pulse">
        <div className="text-4xl">⭐</div>
      </div>
      <div className="absolute top-20 right-1/4 z-10 opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <div className="text-5xl">✨</div>
      </div>
      <div className="absolute top-1/3 left-1/3 z-10 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">⭐</div>
      </div>
      <div className="absolute top-40 right-1/3 z-10 opacity-70 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <div className="text-5xl">✨</div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 z-10 opacity-60 animate-pulse" style={{ animationDelay: '2s' }}>
        <div className="text-4xl">⭐</div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 z-10 opacity-60 animate-pulse" style={{ animationDelay: '2.5s' }}>
        <div className="text-4xl">✨</div>
      </div>

      {/* Large xmass tree image - Bottom Left */}
      <div className="absolute bottom-0 left-32 z-5 opacity-60">
        <img src={xmastar} alt="stars" className="w-35 h-40 object-cover ml-20" />
        <img 
          src={tree} 
          alt="xmass_tree"
          className="w-80 h-100 object-cover"
          onError={(e) => {e.target.style.display = 'none'}}
        />
      </div>
      {/* Large xmass tree image - Bottom right */}
      <div className="absolute bottom-0 right-32 z-5 opacity-60">
        <img src={xmastar} alt="stars" className="w-35 h-40 object-cover ml-20" />
        <img 
          src={tree} 
          alt="xmass_tree"
          className="w-80 h-100 object-cover"
          onError={(e) => {e.target.style.display = 'none'}}
        />
      </div>

      {/* Christmas Lights */}
      <div className="absolute top-0 left-0 right-0 h-8 flex justify-around items-center z-30">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-pulse"
            style={{
              backgroundColor: ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'][i % 5],
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* Candy Canes */}
      <div className="absolute top-1/4 left-10 z-10 opacity-70 transform rotate-12">
        <div className="text-5xl">🍭</div>
      </div>
      <div className="absolute top-1/2 right-12 z-10 opacity-70 transform -rotate-12">
        <div className="text-5xl">🍭</div>
      </div>

      {/* Bells */}
      <div className="absolute top-1/3 right-20 z-10 opacity-70 animate-pulse">
        <div className="text-4xl">🔔</div>
      </div>
      <div className="absolute bottom-1/3 left-16 z-10 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">🔔</div>
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          75% { transform: rotate(10deg) scale(1.1); }
        }
        .gift-box-animate {
          animation: shake 0.5s ease-in-out;
        }
      `}
      
      </style>
      

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
        
        {/* Welcome Stage */}
        {stage === 'welcome' && (
          <div className="text-center animate-fade-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-yellow-300/50 max-w-md w-full mx-auto">

              <img src={santa} className="w-40 text-yellow-300 mx-auto mb-6 " style={{ animationDuration: '3s' }} />
              
            <h2 className="text-4xl sm:text-5xl mb-6 text-center drop-shadow-lg animate-fade-in">

  <span className="bg-clip-text text-[35px] text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 font-bold">
    Santa's Magic Box
  </span>
  <span className="inline-block text-[35px] animate-bounce ml-2">🎁</span>
</h2>


              
              <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">
                Enter your name to receive a special Christmas gift from Santa!
              </p>

              <input
                type="text"
                value={formattedUserName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name here..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg text-center font-semibold bg-white/90 text-red-800 placeholder-red-300 mb-4 sm:mb-6 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition"
                onKeyPress={(e) => e.key === 'Enter' && handleOpenGift()}
              />

              <button
                onClick={handleOpenGift}
                disabled={!formattedUserName.trim()}
                className="w-full bg-gradient-to-r from-green-500 to-red-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                🎁 Open Gift Box 🎁
              </button>
            </div>
          </div>
        )}

        {/* Santa Arrives */}
        {stage === 'santa-arrives' && (
          <div className="text-center animate-bounce px-4">
            <img 
              src={santa} 
              alt="Santa Claus"
              className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-6 sm:mb-8 object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="text-7xl sm:text-9xl mb-6 sm:mb-8" style={{display: 'none'}}>🎅</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
              Ho Ho Ho! 
            </h2>
            <p className="text-xl sm:text-2xl text-yellow-300 drop-shadow-lg">
              Santa is coming with your gifts!
            </p>
          </div>
        )}

        {/* Gift Selection */}
        {stage === 'gift-selection' && (
          <div className="text-center max-w-6xl animate-fade-in px-4">
            <img 
              src={santa} 
              alt="Santa"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 border-4 border-yellow-300/50 shadow-xl object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="text-5xl sm:text-7xl mb-4 sm:mb-6" style={{display: 'none'}}>🎅</div>
            
          <h2 
  className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center drop-shadow-lg animate-fade-in" >
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500">
    Hello {formattedUserName}!
  </span>
  <span className="inline-block ml-2">⛄</span>
</h2>

            <p className="text-lg sm:text-2xl text-yellow-300 mb-8 sm:mb-12 drop-shadow-lg">
              Choose your special Christmas gift!
            </p>

            {openingGift && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-9xl mb-4 gift-box-animate">🎁</div>
                  <p className="text-3xl text-white font-bold">Opening your gift...</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {gifts.map((gift, index) => (
                <button
                  key={gift.id}
                  onClick={() => handleGiftSelect(gift)}
                  className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 sm:border-4 border-white/20 hover:border-yellow-400 hover:bg-white/20 transition transform hover:scale-110 hover:-rotate-3 shadow-xl group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-5xl sm:text-7xl mb-2 sm:mb-4 group-hover:scale-125 transition transform`}>
                    🎁
                  </div>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${gift.color} mx-auto flex items-center justify-center group-hover:animate-pulse`}>
                    {React.createElement(gift.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gift Reveal */}
        {stage === 'gift-reveal' && selectedGift && (
          <div className="text-center max-w-3xl animate-fade-in px-4">
            <Star className="w-16 h-16 sm:w-24 sm:h-24 text-yellow-300 mx-auto mb-6 sm:mb-8 animate-spin" />
            
            <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 mb-4 sm:mb-6 drop-shadow-lg">
               Congratulations {formattedUserName}!
               
            </h2>

            <div className={`bg-gradient-to-br ${selectedGift.color} p-1 rounded-3xl mb-6 sm:mb-8 shadow-2xl`}>
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-12">
                <div className="mb-4 sm:mb-6">
                  {React.createElement(selectedGift.icon, { 
                    className: "w-20 h-20 sm:w-32 sm:h-32 text-white mx-auto animate-bounce",
                    strokeWidth: 1.5
                  })}
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {selectedGift.name}
                </h3>
                <p className="text-lg sm:text-2xl text-white/90 font-semibold mb-4 sm:mb-6">
                  {selectedGift.message}
                </p>
                <div className="bg-white/20 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
                  <p className="text-base sm:text-xl text-white leading-relaxed">
                    {selectedGift.detail}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <button
  onClick={goToGiftSelection}
  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
>
  🔄 Get Another Gift
</button>

              <button
  onClick={() => {
    const shareText = `I just received "${selectedGift.name}" from Santa! Try it yourself at https://jingle-joy.vercel.app/`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(whatsappUrl, '_blank'); // opens WhatsApp Web or app
  }}
  className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
>
  📤 Share Gift
</button>

            </div>
          </div>
        )}

        {/* Footer */}
        <div className="absolute bottom-4 text-center">
          <p className="text-white/60 text-[10px] drop-shadow-lg">
            Made with ❤️ for Brototype Santakku Oru App Hackathon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Santa;