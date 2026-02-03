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
    <div className="relative w-full flex justify-center">
      {/* Cake Base */}
      <div className="relative bg-gradient-to-b from-soft-rose to-deep-crimson rounded-t-3xl shadow-2xl"
           style={{ 
             width: 'min(280px, 90vw)', 
             height: 'clamp(140px, 25vw, 160px)',
             maxWidth: '320px'
           }}>
        {/* Cake Layers - Bottom (largest) */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-b from-white to-soft-rose rounded-t-3xl" />
        {/* Cake Layers - Middle */}
        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-b from-white to-soft-rose rounded-t-2xl mx-4" />
        {/* Cake Layers - Top (smallest) */}
        <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-gradient-to-b from-white to-soft-rose rounded-t-xl mx-8" />
        
        {/* Frosting */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-3xl" />
        <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-t-2xl mx-4" />
        <div className="absolute top-0 left-0 right-0 h-2 bg-white rounded-t-xl mx-8" />
        
        {/* Candles Container */}
        <div className="absolute -top-6 sm:-top-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 px-2"
             style={{ maxWidth: '100%' }}>
          {candles.map((_, index) => (
            <Candle key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BirthdayCake
