import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Experience from '../components/home/Experience';
import Contact from '../components/home/Contact';
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-primary mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12"
          >
            I'm a passionate developer crafting beautiful and functional web experiences.
            Explore my work and get in touch!
          </motion.p>

          

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/projects"
              className="group flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-primary text-primary dark:text-white rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20"
        >
          {[
            {
              title: 'Web Development',
              description: 'Creating responsive and dynamic web applications using modern technologies.',
              icon: '🌐',
            },
            {
              title: 'UI/UX Design',
              description: 'Designing intuitive and beautiful user interfaces with a focus on user experience.',
              icon: '🎨',
            },
            {
              title: 'Mobile Development',
              description: 'Building cross-platform mobile applications for iOS and Android.',
              icon: '📱',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
      
      <About />
      <Projects />
      <Experience />
      <Contact />
    </motion.div>
  );
};

export default Home; 