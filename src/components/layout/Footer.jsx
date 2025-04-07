import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/your-username',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/your-username',
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/your-username',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: 'https://instagram.com/your-username',
    },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <Link to="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Your Name
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Crafting beautiful and functional web experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 