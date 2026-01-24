import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ALL_PROJECTS } from '@/const';

/**
 * Gallery Section Component - Professional Engineering Portfolio Gallery
 * Updated to show all 11 SolidWorks projects dynamically
 */

export default function GallerySection() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = ['all', 'CAD Design', 'FEA Analysis', 'Technical Documentation'];

  const filteredImages =
    selectedCategory === 'all' ? ALL_PROJECTS : ALL_PROJECTS.filter((img) => img.category === selectedCategory);

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const openImage = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <div className="w-1 h-8 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {language === 'ar' ? 'معرض الأعمال الهندسية' : 'Engineering Portfolio Gallery'}
              </h2>
              <div className="w-1 h-8 bg-orange-600 rounded-full" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'استكشف كافة مشاريعي الـ 11 المصممة ببرنامج SolidWorks والتصاميم المتقدمة'
                : 'Explore all my 11 SolidWorks engineering projects and advanced designs'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentImageIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-orange-400'
                }`}
              >
                {category === 'all' ? (language === 'ar' ? 'الكل' : 'All') : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => openImage(image, index)}
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title[language as 'en' | 'ar']}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-orange-600 text-white text-[10px] font-bold rounded uppercase">
                    {image.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {image.title[language as 'en' | 'ar']}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {image.description[language as 'en' | 'ar']}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-5xl flex flex-col md:flex-row gap-8 items-center">
              <button
                onClick={handlePrevImage}
                className="absolute left-0 md:-left-16 text-white/50 hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>

              <div className="w-full md:w-2/3 flex justify-center">
                <Zoom>
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title[language as 'en' | 'ar']}
                    className="max-h-[70vh] object-contain rounded-lg"
                  />
                </Zoom>
              </div>

              <div className="w-full md:w-1/3 text-white">
                <span className="inline-block px-3 py-1 bg-orange-600 text-[10px] font-bold rounded mb-4 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedImage.title[language as 'en' | 'ar']}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {selectedImage.description[language as 'en' | 'ar']}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedImage.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'ar' ? 'عرض في Google Drive' : 'View in Google Drive'}
                </a>
              </div>

              <button
                onClick={handleNextImage}
                className="absolute right-0 md:-right-16 text-white/50 hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
