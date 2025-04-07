import { FaCode, FaDatabase, FaMobile, FaServer, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: FaCode,
      items: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      category: 'Backend Development',
      icon: FaServer,
      items: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: FaServer },
        { name: 'REST APIs', icon: FaCode },
      ],
    },
    {
      category: 'Database',
      icon: FaDatabase,
      items: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Firebase', icon: FaDatabase },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: FaAws,
      items: [
        { name: 'AWS', icon: FaAws },
        { name: 'Docker', icon: FaServer },
        { name: 'CI/CD', icon: FaCode },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am a passionate Full Stack Developer with a strong focus on creating scalable and efficient web applications.
            With expertise in modern technologies and best practices, I strive to deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <skill.icon className="text-primary text-3xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <item.icon className="text-accent mr-3 text-xl" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 