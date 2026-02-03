import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BirthdayCake from './components/BirthdayCake'
import Memories from './components/Memories'
import Messages from './components/Messages'

function App() {
  const [isRevealed, setIsRevealed] = useState(false)

  const handleOpen = () => {
    setIsRevealed(true)
  }

  return (
    <div className="min-h-screen bg-off-white">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center"
          >
            <motion.button
              onClick={handleOpen}
              className="px-12 py-4 bg-deep-crimson text-white text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open with Love
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-6xl mx-auto">
              {/* Birthday Cake Section */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.2 
                }}
                className="flex flex-col items-center mb-16 mt-8"
              >
                <BirthdayCake />
                
                {/* Happy Birthday Message */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mt-12 text-center"
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-deep-crimson mb-4"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    Happy 48th Birthday
                  </motion.h1>
                  <motion.p
                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-soft-rose mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    Amma!
                  </motion.p>
                  <motion.div
                    className="mt-6 flex justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <span className="text-3xl">❤️</span>
                    <span className="text-3xl">💖</span>
                    <span className="text-3xl">❤️</span>
                    <span className="text-3xl">💖</span>
                    <span className="text-3xl">❤️</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Memories Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-deep-crimson text-center mb-8 font-serif">
                  Memories
                </h2>
                <Memories />
              </motion.div>

              {/* Messages Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-deep-crimson text-center mb-8 font-serif">
                  Messages for You
                </h2>
                <Messages />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
