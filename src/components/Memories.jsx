import { motion } from 'framer-motion'
import { useState } from 'react'

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
  // Using the images from the user's uploads
  // These will be placed in the public folder
  const basePath = import.meta.env.BASE_URL || '/amma-birthday/'
  
  // Try multiple path variations including GitHub raw URLs as fallback
  const getImagePath = (filename) => {
    // Remove trailing slash from basePath if present
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
    const paths = [
      `${cleanBasePath}/images/${filename}`,  // With base path (primary)
      `https://medhaudupa.github.io/amma-birthday/images/${filename}`, // Direct GitHub Pages URL
      `https://raw.githubusercontent.com/MedhaUdupa/amma-birthday/main/public/images/${filename}`, // GitHub raw URL
      `./images/${filename}`,           // Relative path
      `/images/${filename}`,            // Absolute from root
      `images/${filename}`,             // Relative no dot
    ]
    return paths
  }
  
  const imageFiles = ['memory1.jpeg', 'memory2.jpeg', 'memory3.jpeg', 'memory4.jpeg']
  const images = imageFiles.map(file => getImagePath(file))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-4"
    >
      {images.map((imagePaths, index) => {
        const [primaryPath, ...fallbackPaths] = imagePaths
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative overflow-hidden rounded-lg shadow-lg border-2 border-deep-crimson/20 hover:border-deep-crimson/40 transition-all duration-300"
          >
            <ImageWithFallback 
              src={primaryPath}
              fallbacks={fallbackPaths}
              alt={`Memory ${index + 1}`}
              className="w-full h-56 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Memories
