import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const ImageWithFallback = ({ src, fallbacks = [], alt, className }) => {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [fallbackIndex, setFallbackIndex] = useState(0)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (fallbackIndex < fallbacks.length) {
      setCurrentSrc(fallbacks[fallbackIndex])
      setFallbackIndex(fallbackIndex + 1)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center bg-soft-rose/20 border-2 border-dashed border-deep-crimson/30 rounded-lg`}>
        <p className="text-deep-crimson/50 font-serif">{alt}</p>
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const basePath = import.meta.env.BASE_URL || '/amma-birthday/'
  
  // Try multiple path variations including GitHub raw URLs as fallback
  const getImagePath = (filename) => {
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
    const paths = [
      `${cleanBasePath}/images/${filename}`,
      `https://medhaudupa.github.io/amma-birthday/images/${filename}`,
      `https://raw.githubusercontent.com/MedhaUdupa/amma-birthday/main/public/images/${filename}`,
      `./images/${filename}`,
      `/images/${filename}`,
      `images/${filename}`,
    ]
    return paths
  }
  
  const imageFiles = ['memory1.jpeg', 'memory2.jpeg', 'memory3.jpeg', 'memory4.jpeg']
  const images = imageFiles.map(file => getImagePath(file))

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-deep-crimson/20">
        <AnimatePresence mode="wait">
          {images.map((imagePaths, index) => {
            if (index !== currentIndex) return null
            const [primaryPath, ...fallbackPaths] = imagePaths
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full"
              >
                <div className="aspect-video w-full">
                  <ImageWithFallback 
                    src={primaryPath}
                    fallbacks={fallbackPaths}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-deep-crimson/80 hover:bg-deep-crimson text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-deep-crimson/80 hover:bg-deep-crimson text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-deep-crimson w-8 h-3'
                : 'bg-deep-crimson/30 w-3 h-3 hover:bg-deep-crimson/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Memories
