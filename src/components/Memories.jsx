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
  const [availableImages, setAvailableImages] = useState([])
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
  
  // Dynamically detect available images (check up to 20 images)
  useEffect(() => {
    const checkImages = async () => {
      const foundImages = []
      const maxImages = 20 // Maximum number of images to check
      
      const checkImageExists = (imagePaths, pathIndex = 0) => {
        return new Promise((resolve) => {
          if (pathIndex >= imagePaths.length) {
            resolve(false)
            return
          }
          
          const img = new Image()
          img.onload = () => resolve(true)
          img.onerror = () => {
            // Try next fallback path
            if (pathIndex + 1 < imagePaths.length) {
              checkImageExists(imagePaths, pathIndex + 1).then(resolve)
            } else {
              resolve(false)
            }
          }
          img.src = imagePaths[pathIndex]
        })
      }
      
      // Check images sequentially
      for (let i = 1; i <= maxImages; i++) {
        const filename = `memory${i}.jpeg`
        const imagePaths = getImagePath(filename)
        const exists = await checkImageExists(imagePaths)
        
        if (exists) {
          foundImages.push(imagePaths)
        } else if (foundImages.length > 0) {
          // If we found images before but this one doesn't exist, stop checking
          break
        }
      }
      
      setAvailableImages(foundImages)
    }
    
    checkImages()
  }, [basePath])

  // Auto-advance carousel
  useEffect(() => {
    if (availableImages.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % availableImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [availableImages.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    if (availableImages.length === 0) return
    setCurrentIndex((prev) => (prev - 1 + availableImages.length) % availableImages.length)
  }

  const goToNext = () => {
    if (availableImages.length === 0) return
    setCurrentIndex((prev) => (prev + 1) % availableImages.length)
  }

  // Show loading or empty state
  if (availableImages.length === 0) {
    return (
      <div className="relative w-full max-w-md mx-auto px-4">
        <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-deep-crimson/20">
          <div className="aspect-[9/16] w-full max-w-sm mx-auto flex items-center justify-center bg-soft-rose/20">
            <p className="text-deep-crimson/50 font-serif text-center">Loading memories...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-md mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-deep-crimson/20">
        <AnimatePresence mode="wait">
          {availableImages.map((imagePaths, index) => {
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
                <div className="aspect-[9/16] w-full max-w-sm mx-auto">
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
        {availableImages.length > 1 && (
          <>
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
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {availableImages.length > 1 && (
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {availableImages.map((_, index) => (
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
      )}
    </div>
  )
}

export default Memories
