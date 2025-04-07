import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaMobile, FaServer } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GraphQL'],
      icon: FaCode,
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
      icon: FaServer,
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      icon: FaDatabase,
    },
    {
      category: 'Mobile Development',
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Expo'],
      icon: FaMobile,
    },
  ];

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            user experiences and robust server-side solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-3xl text-primary mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
            My Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I believe in writing clean, maintainable code and following best practices.
            I'm constantly learning new technologies and improving my skills to deliver
            the best solutions for my clients.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About; 