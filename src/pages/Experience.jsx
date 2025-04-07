import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      description: 'Led the development of multiple web applications using React, Node.js, and MongoDB. Implemented CI/CD pipelines and mentored junior developers.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      period: '2019 - 2021',
      description: 'Developed responsive web applications using React and Redux. Collaborated with UX designers to implement pixel-perfect designs.',
      skills: ['React', 'Redux', 'TypeScript', 'SASS', 'Jest'],
    },
    {
      id: 3,
      type: 'education',
      title: 'Master of Science in Computer Science',
      school: 'University of Technology',
      period: '2017 - 2019',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.',
      achievements: ['GPA: 3.8/4.0', 'Research Assistant', 'Published 2 papers'],
    },
    {
      id: 4,
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      school: 'State University',
      period: '2013 - 2017',
      description: 'Focused on web development and software engineering. Active member of the Computer Science Society.',
      achievements: ['Dean\'s List', 'Programming Competition Winner', 'Internship at Google'],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      className="min-h-screen pt-20 pb-12 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience & Education
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that have shaped my expertise in software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative pl-8 pb-12 ${
                index !== experiences.length - 1 ? 'border-l-2 border-gray-200 dark:border-gray-700' : ''
              }`}
            >
              <motion.div
                className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  {exp.type === 'work' ? (
                    <FaBriefcase className="text-primary text-xl mr-3" />
                  ) : (
                    <FaGraduationCap className="text-primary text-xl mr-3" />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.type === 'work' ? exp.company : exp.school}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-primary mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                {exp.skills && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <motion.span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
                {exp.achievements && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4">
                    {exp.achievements.map(achievement => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience; 