import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'backend', name: 'Backend' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
      category: 'web',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      github: 'https://github.com/your-username/ecommerce',
      live: 'https://ecommerce-demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'web',
      technologies: [
        { name: 'React', icon: FaReact },
        { name: 'Firebase', icon: SiFirebase },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      github: 'https://github.com/your-username/task-manager',
      live: 'https://task-manager-demo.com',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness goals.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'mobile',
      technologies: [
        { name: 'React Native', icon: FaReact },
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      github: 'https://github.com/your-username/fitness-app',
      live: 'https://fitness-app-demo.com',
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A scalable API gateway service for microservices architecture with authentication and rate limiting.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80',
      category: 'backend',
      technologies: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'Docker', icon: FaDatabase },
      ],
      github: 'https://github.com/your-username/api-gateway',
      live: null,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech.name}
                      className="flex items-center bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      <tech.icon className="mr-1 text-primary" />
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-1" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 