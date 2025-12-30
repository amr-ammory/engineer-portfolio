import { motion } from 'framer-motion';
import { Briefcase, Award, Code2, Users, Download } from 'lucide-react';
import { useState } from 'react';

/**
 * About Section Component
 * Design Philosophy: Modern Industrial
 * - Clean layout with accent line on the left
 * - Professional description with key highlights
 * - Stat cards with icons and hover effects
 * - Responsive grid layout
 */

export default function AboutSection() {
  const [downloadClicked, setDownloadClicked] = useState(false);

  const stats = [
    {
      icon: Code2,
      label: 'Projects Completed',
      value: '50+',
      description: 'Design projects with 100% ASME/ISO compliance',
    },
    {
      icon: Award,
      label: 'Certifications',
      value: '6+',
      description: 'Professional certifications and training',
    },
    {
      icon: Briefcase,
      label: 'Years Experience',
      value: '5',
      description: 'In mechanical engineering and design',
    },
    {
      icon: Users,
      label: 'Team Leadership',
      value: '100%',
      description: 'Project goal achievement rate',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 md:mb-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Me
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              I'm a highly motivated and proficient fifth-year Mechanical Engineering student
              specializing in Advanced Mechanical Design and Precision Manufacturing Processes.
              With extensive hands-on experience in SolidWorks, ANSYS, and AutoCAD, I've successfully
              completed over 50 design projects achieving 100% compliance with ASME and ISO standards.
            </p>
            <motion.a
              href="/Amr_Ammory_CV.pdf"
              download="Amr_Ammory_CV.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDownloadClicked(true)}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <motion.div
                animate={downloadClicked ? { y: [0, -5, 0] } : {}}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setDownloadClicked(false)}
              >
                <Download className="w-5 h-5" />
              </motion.div>
              Download My CV
            </motion.a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-orange-600 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="bg-blue-50 rounded-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Design & Simulation</h4>
                <p className="text-gray-700">
                  Advanced CAD modeling, FEA analysis, stress simulation, and precision component design
                  using industry-leading software.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Manufacturing & Standards</h4>
                <p className="text-gray-700">
                  Deep understanding of manufacturing processes, ASME/ISO standards compliance, and
                  precision fabrication techniques.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Project Management</h4>
                <p className="text-gray-700">
                  Strategic planning, team leadership, process optimization, and 100% goal achievement
                  in engineering projects.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
