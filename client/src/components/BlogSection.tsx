import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, User, ArrowRight, BookOpen, Cpu } from 'lucide-react';

const blogPosts = [
  {
    id: 4,
    title: {
      en: "Next-Gen Tracked Wheelchair: Beyond SCEWO Technology",
      ar: "الجيل القادم من الكراسي الجنزيرية: ما بعد تقنية SCEWO"
    },
    excerpt: {
      en: "Developing an advanced tracked system with motion and orientation sensors for ultimate stair-climbing stability.",
      ar: "تطوير نظام جنزيري متطور مزود بحساسات حركة واتجاهات لتحقيق أقصى درجات الاستقرار عند تسلق الدرج."
    },
    date: "2024-02-08",
    author: "Amr Ammory",
    category: { en: "Innovation", ar: "ابتكار" },
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 1,
    title: {
      en: "From Concept to Product: The Stair Climber Journey",
      ar: "من الفكرة إلى المنتج: رحلة تصميم كرسي تسلق الدرج"
    },
    excerpt: {
      en: "Exploring the mechanical challenges and planetary wheel system design in SolidWorks.",
      ar: "استكشاف التحديات الميكانيكية وتصميم نظام العجلات الكوكبي باستخدام SolidWorks."
    },
    date: "2024-02-05",
    author: "Amr Ammory",
    category: { en: "Design", ar: "تصميم" },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: {
      en: "Importance of ASME & ISO Standards in Modern Design",
      ar: "أهمية معايير ASME و ISO في التصميم الميكانيكي الحديث"
    },
    excerpt: {
      en: "How international standards ensure safety and quality in engineering projects.",
      ar: "كيف تضمن المعايير الدولية السلامة والجودة في المشاريع الهندسية."
    },
    date: "2024-01-28",
    author: "Amr Ammory",
    category: { en: "Standards", ar: "معايير" },
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: {
      en: "The Future of Digital Manufacturing: CAD to CNC",
      ar: "مستقبل التصنيع الرقمي: من CAD إلى CNC"
    },
    excerpt: {
      en: "Transforming digital designs into high-precision physical components.",
      ar: "تحويل التصاميم الرقمية إلى مكونات مادية عالية الدقة."
    },
    date: "2024-01-15",
    author: "Amr Ammory",
    category: { en: "Manufacturing", ar: "تصنيع" },
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
  }
];

export default function BlogSection() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="blog" className="py-20 md:py-32 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-10 bg-orange-600 rounded-full" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {language === 'ar' ? 'المدونة الهندسية' : 'Engineering Blog'}
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                {language === 'ar' 
                  ? 'مقالات تقنية ونماذج احترافية في الهندسة الميكانيكية والتصنيع'
                  : 'Technical articles and professional insights in mechanical engineering and manufacturing'}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-orange-600 font-bold">
                <BookOpen className="w-5 h-5" />
                <span>{language === 'ar' ? 'اكتشف المزيد' : 'Explore More'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className={`group bg-gray-50 dark:bg-slate-800 rounded-2xl overflow-hidden border ${post.featured ? 'border-orange-500 ring-1 ring-orange-500' : 'border-gray-100 dark:border-slate-700'} hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[language as 'en' | 'ar']}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase">
                      {post.category[language as 'en' | 'ar']}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        {language === 'ar' ? 'متطور' : 'Advanced'}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title[language as 'en' | 'ar']}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                    {post.excerpt[language as 'en' | 'ar']}
                  </p>

                  <button className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all">
                    {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
