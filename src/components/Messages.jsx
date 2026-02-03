import { motion } from 'framer-motion'

const Messages = () => {
  const messages = [
    {
      text: "Happy 48th Birthday, Amma! This little corner of the internet is dedicated entirely to you, the heart and soul of our home",
      isTitle: true,
    },
    {
      text: "To my first friend and my forever guide: Thank you for every sacrifice, every laugh, and every lesson. My world is beautiful because you're in it.",
    },
    {
      text: "Looking back at these photos reminds me of one thing: no matter how much I grow, I'll always need your hugs and your wisdom. I love you, Amma.",
    },
    {
      text: "Warning: This website may contain high levels of love and appreciation for the world's best mom. Proceed with a big smile!",
    },
    {
      text: "Thank you for being my constant. For the quiet strength you show and the loud way you cheer for me, I am so lucky to call you my Amma.",
    },
    {
      text: "May your day be as radiant as your smile and as warm as your heart. Happy Birthday, Amma! Forever your Muddu",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 px-4 max-w-4xl mx-auto"
    >
      {messages.map((message, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 ${
            message.isTitle
              ? 'border-deep-crimson bg-gradient-to-r from-soft-rose/10 to-white'
              : 'border-soft-rose'
          }`}
        >
          <p
            className={`font-serif text-gray-800 leading-relaxed text-center mx-auto ${
              message.isTitle
                ? 'text-xl sm:text-2xl font-bold text-deep-crimson'
                : 'text-base sm:text-lg'
            }`}
            style={{ textAlign: 'center' }}
          >
            {message.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Messages
