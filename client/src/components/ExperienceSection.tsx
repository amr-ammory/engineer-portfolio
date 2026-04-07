import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

/**
 * Experience and Certifications Section Component
 * Design Philosophy: Modern Industrial
 * - Timeline-style experience layout
 * - Certification cards with icons
 * - Responsive grid layout
 * - Hover effects and animations
 * - FULLY BILINGUAL: All text uses translations for Arabic/English support
 */

export default function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const experiences = [
    {
      titleKey: 'precisionDesigner',
      companyKey: 'profiCar',
      descKey: 'precisionDesc',
      highlights: ['High-precision design', 'Quality improvement', 'Manufacturing excellence'],
    },
    {
      titleKey: 'automotive',
      companyKey: 'trainingProgram',
      descKey: 'automotiveDesc',
      highlights: ['Automotive maintenance', 'Aluminum fabrication', 'Industrial processes'],
    },
    {
      titleKey: 'visualContent',
      companyKey: 'digitalMarketing',
      descKey: 'visualDesc',
      highlights: ['Video production', 'Content management', 'Social media strategy'],
    },
    {
      titleKey: 'projectLeader',
      companyKey: 'multipleProjects',
      descKey: 'leaderDesc',
      highlights: ['Project leadership', 'Innovation', 'Team management'],
    },
  ];

  const certifications = [
    {
      titleKey: 'solidworks',
      issuerKey: 'engineers',
      icon: Award,
    },
    {
      titleKey: 'mentorship',
      issuerKey: 'pmi',
      icon: Briefcase,
    },
    {
      titleKey: 'english',
      issuerKey: 'proficiency',
      icon: CheckCircle,
    },
    {
      titleKey: 'business',
      issuerKey: 'scaleup',
      icon: Award,
    },
    {
      titleKey: 'advanced',
      issuerKey: 'development',
      icon: Briefcase,
    },
    {
      titleKey: 'automotive2',
      issuerKey: 'nrc',
      icon: CheckCircle,
    },
    {
      titleKey: 'pmpTitle',
      issuerKey: 'pmpIssuer',
      icon: Award,
    },
    {
      titleKey: 'hrmTitle',
      issuerKey: 'hrmIssuer',
      icon: Users,
    },
    {
      titleKey: 'atsAuditor',
      issuerKey: 'atsAuditorIssuer',
      icon: Shield,
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
    <section className="relative py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4 md:space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-6 md:pl-8 border-l-2 border-orange-600 pb-4 md:pb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] md:-left-4 top-0 w-4 h-4 md:w-6 md:h-6 bg-orange-600 rounded-full border-2 md:border-4 border-white dark:border-slate-900" />

                  {/* Content */}
                  <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-0.5 md:mb-1">
                      {t[exp.titleKey as keyof typeof t]}
                    </h3>
                    <p className="text-sm md:text-orange-600 dark:text-orange-400 font-semibold mb-2 md:mb-3 text-orange-600">
                      {t[exp.companyKey as keyof typeof t]}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-3 md:line-clamp-none">
                      {t[exp.descKey as keyof typeof t]}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-[10px] md:text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.certifications}
              </h2>
            </div>

            {/* Certifications Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-3 md:p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4 mb-2 md:mb-4">
                      <div className="p-2 md:p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                        <Icon className="w-4 h-4 md:w-6 md:h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs md:text-base font-bold text-gray-900 dark:text-white line-clamp-2">
                          {t[cert.titleKey as keyof typeof t]}
                        </h3>
                        <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {t[cert.issuerKey as keyof typeof t]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-10 p-8 bg-blue-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.education}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300">
                  {t.mechanical}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{t.aleppo}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {t.award}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
