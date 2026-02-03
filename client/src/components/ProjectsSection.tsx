import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';
import { ALL_PROJECTS } from '@/const';

/**
 * Projects Section Component - Cleaned Version
 * Displays all 11 SolidWorks projects using local assets
 */

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language].projects;

  // Use all projects from const.ts, ensuring they are linked to local images
  const featuredProjects = ALL_PROJECTS.map((project, index) => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-indigo-500',
      'from-green-500 to-emerald-500',
      'from-pink-500 to-rose-500',
      'from-yellow-500 to-orange-500'
    ];
    
    return {
      title: project.title[language as 'en' | 'ar'],
      description: project.description[language as 'en' | 'ar'],
      category: project.category,
      technologies: project.tags,
      image: project.image,
      link: 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu',
      color: colors[index % colors.length],
    };
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              {language === 'ar' 
                ? 'استكشف كافة مشاريعي الـ 11 المصممة ببرنامج SolidWorks والتصاميم المتقدمة'
                : 'Explore all my 11 SolidWorks engineering projects and advanced designs'}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Container */}
                <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-[10px] font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all"
                  >
                    {t.viewProject}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="p-8 md:p-12 bg-orange-600 rounded-2xl text-white text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.interested}</h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto">{t.interestedDesc}</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors"
            >
              {language === 'ar' ? 'تواصل معي' : 'Get In Touch'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
