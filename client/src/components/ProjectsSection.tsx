import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Projects Section Component
 * Design Philosophy: Modern Industrial
 * - Project cards with hover effects
 * - Category filtering
 * - Responsive grid layout
 * - Links to project details
 */

export default function ProjectsSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: 'Al-Mutafawiq Platform (ENG)',
      category: 'Educational Platform',
      description: 'An integrated educational platform designed to enhance engineering skills and knowledge sharing.',
      technologies: ['SolidWorks', 'CAD Design', 'Technical Documentation'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      title: 'SHE SYRIA Initiative',
      category: 'Community Project',
      description: 'A leading initiative dedicated to empowering women in Syria through education and opportunities.',
      technologies: ['Project Management', 'Community Building', 'Leadership'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      title: 'SYRIA MAKERS Community',
      category: 'Innovation Hub',
      description: 'A vibrant community fostering innovation and technology for Syrian creators and entrepreneurs.',
      technologies: ['Community Development', 'Innovation', 'Technology'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      title: 'Precision Mechanical Components',
      category: 'Manufacturing',
      description: 'Designed and manufactured high-precision mechanical components for PROFI CAR (Germany).',
      technologies: ['SolidWorks', 'ANSYS', 'Manufacturing'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      title: 'Automotive Engineering Training',
      category: 'Technical Training',
      description: 'Comprehensive practical experience in automotive maintenance and aluminum fabrication.',
      technologies: ['Automotive', 'Manufacturing', 'Technical Skills'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
    {
      title: 'Engineering Project Leadership',
      category: 'Project Management',
      description: 'Led multiple engineering projects successfully with innovative solutions and 100% goal achievement.',
      technologies: ['Leadership', 'Project Management', 'Innovation'],
      image: '/images/projects-showcase.jpg',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t('projects.title')}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              {t('projects.subtitle')}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group overflow-hidden rounded-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, and opportunities to contribute
              to engineering excellence.
            </p>
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
