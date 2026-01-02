import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle } from 'lucide-react';

/**
 * Experience and Certifications Section Component
 * Design Philosophy: Modern Industrial
 * - Timeline-style experience layout
 * - Certification cards with icons
 * - Responsive grid layout
 * - Hover effects and animations
 */

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Precision Mechanical Parts Designer & Producer',
      company: 'PROFI CAR (Germany)',
      description: 'Designed and manufactured high-precision mechanical components, contributing to 100% improvement in product quality.',
      highlights: ['High-precision design', 'Quality improvement', 'Manufacturing excellence'],
    },
    {
      title: 'Automotive Engineering & Aluminum Workshop Trainee',
      company: 'Technical Training Program',
      description: 'Gained intensive and comprehensive practical experience in automotive maintenance and aluminum fabrication.',
      highlights: ['Automotive maintenance', 'Aluminum fabrication', 'Industrial processes'],
    },
    {
      title: 'Visual Content Manager & Marketing Video Producer',
      company: 'Digital Marketing Initiative',
      description: 'Managed visual content and produced engaging marketing videos, leading to 100% increase in social media engagement.',
      highlights: ['Video production', 'Content management', 'Social media strategy'],
    },
    {
      title: 'Engineering Project Leader',
      company: 'Multiple Projects',
      description: 'Led engineering projects successfully and implemented innovative solutions, resulting in 100% team productivity improvement.',
      highlights: ['Project leadership', 'Innovation', 'Team management'],
    },
  ];

  const certifications = [
    {
      title: 'SolidWorks Certified Engineer',
      issuer: 'Engineers Syndicate',
      icon: Award,
    },
    {
      title: 'Mentorship Program for Project Management',
      issuer: 'PMI (September 14-29, 2025)',
      icon: Briefcase,
    },
    {
      title: 'Higher Education Certificate in English',
      issuer: 'Professional Proficiency',
      icon: CheckCircle,
    },
    {
      title: 'Business Management Training Certificate',
      issuer: 'ScaleUp',
      icon: Award,
    },
    {
      title: 'Advanced Project Management Certificate',
      issuer: 'Professional Development',
      icon: Briefcase,
    },
    {
      title: 'Automotive Maintenance Excellence Certificate',
      issuer: 'NRC Norway',
      icon: CheckCircle,
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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Experience Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Professional Experience
              </h2>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-orange-600 pb-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-0 w-6 h-6 bg-orange-600 rounded-full border-4 border-white" />

                  {/* Content */}
                  <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <span
                          key={hIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
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
            <div className="flex items-center gap-4 mb-12">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Certifications & Training
              </h2>
            </div>

            {/* Certifications Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{cert.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-20 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  Mechanical Engineering Student, Fifth Year
                </h4>
                <p className="text-gray-700">Aleppo University (2021-2026)</p>
                <p className="text-sm text-gray-600 mt-2">
                  Awarded first place in the Mechanical Engineering Department for consistent academic excellence
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
