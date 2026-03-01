import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/locales/translations';

/**
 * Contact Section Component - Redesigned Version
 * Design Philosophy: Clean, Action-Oriented, Compact
 * - Quick contact cards (WhatsApp, Phone, Email)
 * - Simplified contact form
 * - Direct action buttons
 */

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const quickContact = [
    {
      icon: MessageCircle,
      label: t.whatsapp,
      value: '+963 983 952 896',
      desc: t.whatsappMsg,
      link: 'https://wa.me/963983952896',
      color: 'bg-green-500',
      lightBg: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      icon: Phone,
      label: t.call,
      value: '+963 983 952 896',
      desc: t.callMsg,
      link: 'tel:+963983952896',
      color: 'bg-blue-500',
      lightBg: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'amrammory13@gmail.com',
      desc: t.emailMsg,
      link: 'mailto:amrammory13@gmail.com',
      color: 'bg-orange-500',
      lightBg: 'bg-orange-50 dark:bg-orange-900/20',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-orange-600 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {t.title}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Quick Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              {quickContact.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target={contact.label === 'Email' ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-slate-800 ${contact.lightBg} transition-all duration-300 group`}
                  >
                    <div className={`p-3 ${contact.color} text-white rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {contact.label}
                      </h4>
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        {contact.value}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 ${contact.textColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </motion.a>
                );
              })}

              {/* Social Link */}
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href="https://linkedin.com/in/amrammory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </motion.div>
            </div>

            {/* Simplified Form */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 bg-gray-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-slate-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t.sendMessage}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all"
                    placeholder={language === 'ar' ? 'الاسم' : 'Name'}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all"
                    placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-orange-600 outline-none transition-all resize-none"
                  placeholder={t.message}
                />

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-600/20 transition-all active:scale-[0.98]"
                >
                  {t.send}
                </Button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-center font-medium"
                  >
                    {language === 'ar'
                      ? 'تم الإرسال بنجاح!'
                      : "Sent successfully!"}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
