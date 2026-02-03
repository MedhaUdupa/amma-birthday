import { motion } from 'framer-motion'

const Candle = ({ index }) => {
  const flickerVariants = {
    flicker: {
      opacity: [1, 0.7, 1, 0.8, 1],
      scale: [1, 1.1, 0.9, 1.05, 1],
      transition: {
        duration: 0.3 + Math.random() * 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 0.5,
      },
    },
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* Candle */}
      <div className="w-2 h-8 sm:h-10 bg-white rounded-sm shadow-sm" />
      
      {/* Flame */}
      <motion.div
        className="absolute -top-2 w-3 h-4 sm:w-4 sm:h-5"
        variants={flickerVariants}
        animate="flicker"
        style={{
          background: 'radial-gradient(circle, #FFD700 0%, #FF8C00 50%, #FF4500 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          filter: 'blur(1px)',
        }}
      />
    </div>
  )
}

const BirthdayCake = () => {
  const candles = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className="relative w-full flex justify-center items-end" style={{ height: '280px' }}>
      {/* Bottom Tier (Largest) */}
      <div className="relative" style={{ width: '280px', height: '100px' }}>
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-white via-soft-rose to-deep-crimson rounded-t-3xl shadow-xl border-2 border-deep-crimson/20" />
        <div className="absolute top-0 left-0 right-0 h-4 bg-white rounded-t-3xl" style={{ 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
        }} />
      </div>

      {/* Middle Tier */}
      <div className="absolute" style={{ 
        width: '220px', 
        height: '80px',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-white via-soft-rose to-deep-crimson rounded-t-2xl shadow-xl border-2 border-deep-crimson/20" />
        <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-2xl" style={{ 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
        }} />
      </div>

      {/* Top Tier (Smallest) */}
      <div className="absolute" style={{ 
        width: '160px', 
        height: '60px',
        bottom: '180px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-white via-soft-rose to-deep-crimson rounded-t-xl shadow-xl border-2 border-deep-crimson/20" />
        <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-xl" style={{ 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          boxShadow: '0 -2px 10px rgba(139, 0, 0, 0.1)'
        }} />
        
        {/* Candles Container on Top Tier */}
        <div className="absolute -top-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 px-2">
          {candles.map((_, index) => (
            <Candle key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BirthdayCake
