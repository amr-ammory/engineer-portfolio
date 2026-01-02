import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, FileText, Users, CheckCircle, Briefcase, Shield } from 'lucide-react';

/**
 * Services & Certifications Section Component
 * Design Philosophy: Modern Industrial
 * - Showcases specialized services and verified certifications
 * - Professional cards with icons and achievements
 * - Emphasis on ATS optimization expertise and client success
 * - Responsive grid layout with hover effects
 */

export default function ServicesAndCertificationsSection() {
  const services = [
    {
      icon: FileText,
      title: 'ATS-Optimized CV Creation',
      description: 'Crafting 100% ATS-compatible CVs that pass automated screening systems',
      stats: '50+ CVs Created',
      achievement: 'All clients achieved 90%+ ATS compatibility score',
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-300',
      iconBg: 'bg-orange-600',
    },
    {
      icon: CheckCircle,
      title: 'CV Optimization Expertise',
      description: 'Professional CV design with 100% ATS compliance and keyword optimization',
      stats: '90%+ Success Rate',
      achievement: 'Verified ATS system testing and validation for all deliverables',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-300',
      iconBg: 'bg-blue-900',
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'PMP Certification',
      issuer: 'Project Management Institute (PMI)',
      description: 'Professional Project Management Certification - Multilingual Credential',
      verified: true,
    },
    {
      icon: Users,
      title: 'HRM Certifications',
      issuer: 'Human Resource Management',
      description: 'Multiple certifications in Human Resource Management and organizational development',
      verified: true,
    },
    {
      icon: Shield,
      title: 'ATS System Auditor',
      issuer: 'Specialized Certification',
      description: 'Certified ATS system auditor - Verifies CV compatibility with automated tracking systems',
      verified: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Specialized Services & Credentials
              </h2>
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Beyond mechanical engineering, I offer specialized expertise in CV optimization and professional certifications
              in project management and human resource management.
            </p>
          </motion.div>

          {/* Services Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
            variants={containerVariants}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className={`p-8 bg-gradient-to-br ${service.color} rounded-lg border-2 ${service.borderColor} transition-all duration-300`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 ${service.iconBg} rounded-lg flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm font-semibold text-orange-600">{service.stats}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <div className="pt-4 border-t-2 border-gray-300 border-opacity-50">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      {service.achievement}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-1 h-8 bg-orange-600 rounded-full" />
              Professional Certifications
            </h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}
                    className="p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-orange-400 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-orange-100 rounded-lg">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      {cert.verified && (
                        <div className="ml-auto">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                    <p className="text-sm text-orange-600 font-semibold mb-3">{cert.issuer}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="w-7 h-7" />
              Why Choose My CV Services?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">100% ATS Compatible</h4>
                  <p className="text-blue-100">
                    Every CV is tested and verified to pass automated tracking systems with 90%+ compatibility scores.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">50+ Success Stories</h4>
                  <p className="text-blue-100">
                    Over 50 clients have benefited from optimized CVs with verified ATS compatibility testing.
                  </p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-orange-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Professional Expertise</h4>
                  <p className="text-blue-100">
                    Certified in project management and HR, bringing professional standards to every CV created.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
