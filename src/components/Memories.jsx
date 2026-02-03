import { motion } from 'framer-motion'

const Memories = () => {
  // Using the images from the user's uploads
  // These will be placed in the public folder
  const basePath = import.meta.env.BASE_URL || '/amma-birthday/'
  const images = [
    `${basePath}images/memory1.jpg`,
    `${basePath}images/memory2.jpg`,
    `${basePath}images/memory3.jpg`,
    `${basePath}images/memory4.jpg`,
  ]

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
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative overflow-hidden rounded-lg shadow-lg border-2 border-deep-crimson/20 hover:border-deep-crimson/40 transition-all duration-300"
        >
          <img
            src={image}
            alt={`Memory ${index + 1}`}
            className="w-full h-56 sm:h-72 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              e.target.src = `https://images.unsplash.com/photo-${1500000000000 + index}?w=800&h=600&fit=crop`
            }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Memories
