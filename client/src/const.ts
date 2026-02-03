export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

/**
 * Project Links and Resources Configuration
 */
export const DRIVE_FOLDER_LINK = 'https://drive.google.com/drive/folders/1I2WsU8eHcsWqFYVAc5HgD6uuFqaW8oRu';

/**
 * Helper to get local project image path
 */
const getProjectImg = (name: string) => `/assets/projects/${name}`;

/**
 * All SolidWorks Projects Data - Using Local Assets for Stability
 * Total 11 Projects
 */
export const ALL_PROJECTS = [
  {
    id: '1',
    title: { en: 'Stair Climber Wheelchair - Final Render', ar: 'كرسي متحرك متسلق للدرج - رندر نهائي' },
    category: 'CAD Design',
    image: getProjectImg('stair_climber_final.jpg'),
    tags: ['SolidWorks', 'Mechanism', 'Robotics'],
    description: { en: 'Advanced planetary wheel system for stair climbing.', ar: 'نظام عجلات كوكبي متطور لتسلق الدرج.' }
  },
  {
    id: '2',
    title: { en: 'Industrial Milling Machine', ar: 'آلة فريزة صناعية' },
    category: 'CAD Design',
    image: getProjectImg('milling_machine.jpg'),
    tags: ['SolidWorks', 'Manufacturing', 'Machining'],
    description: { en: 'Detailed design of a 3-axis industrial milling machine.', ar: 'تصميم مفصل لآلة فريزة صناعية ثلاثية المحاور.' }
  },
  {
    id: '3',
    title: { en: 'VMC Project IMTMA', ar: 'مشروع مركز تشغيل عمودي IMTMA' },
    category: 'CAD Design',
    image: getProjectImg('vmc_project.jpg'),
    tags: ['SolidWorks', 'VMC', 'Industrial'],
    description: { en: 'Vertical Machining Center design project for IMTMA.', ar: 'مشروع تصميم مركز تشغيل عمودي لصالح IMTMA.' }
  },
  {
    id: '4',
    title: { en: 'Stair Climber - Side View', ar: 'متسلق الدرج - عرض جانبي' },
    category: 'CAD Design',
    image: getProjectImg('stair_climber_side.jpg'),
    tags: ['SolidWorks', 'Mechanism'],
    description: { en: 'Side view showing the mechanical linkage of the climber.', ar: 'عرض جانبي يوضح الوصلات الميكانيكية للمتسلق.' }
  },
  {
    id: '5',
    title: { en: 'Mechanical Assembly', ar: 'تجميع ميكانيكي' },
    category: 'CAD Design',
    image: getProjectImg('mechanical_assembly.jpg'),
    tags: ['SolidWorks', 'Assembly'],
    description: { en: 'Complex mechanical assembly with multiple components.', ar: 'تجميع ميكانيكي معقد يضم مكونات متعددة.' }
  },
  {
    id: '6',
    title: { en: 'Belt Drive Mechanism', ar: 'آلية نقل الحركة بالسيور' },
    category: 'CAD Design',
    image: getProjectImg('belt_drive.jpg'),
    tags: ['SolidWorks', 'Power Transmission'],
    description: { en: 'Design of a belt-driven power transmission system.', ar: 'تصميم نظام نقل حركة يعمل بالسيور.' }
  },
  {
    id: '7',
    title: { en: 'Drill Press Design', ar: 'تصميم مثقاب صناعي' },
    category: 'CAD Design',
    image: getProjectImg('drill_press.jpg'),
    tags: ['SolidWorks', 'Machinery'],
    description: { en: 'Full design of an industrial drill press machine.', ar: 'تصميم كامل لآلة مثقاب صناعية.' }
  },
  {
    id: '8',
    title: { en: 'Final Component with Dimensions', ar: 'المكون النهائي مع الأبعاد' },
    category: 'Technical Documentation',
    image: getProjectImg('technical_drawing.jpg'),
    tags: ['SolidWorks', 'Drafting', 'Dimensions'],
    description: { en: 'Technical drawing with precise manufacturing dimensions.', ar: 'رسم تقني مع أبعاد تصنيع دقيقة.' }
  },
  {
    id: '9',
    title: { en: 'Stair Climber - Model View', ar: 'متسلق الدرج - عرض النموذج' },
    category: 'CAD Design',
    image: getProjectImg('stair_climber_model.jpg'),
    tags: ['SolidWorks', '3D Modeling'],
    description: { en: '3D model view of the stair climber wheelchair.', ar: 'عرض النموذج ثلاثي الأبعاد للكرسي المتسلق للدرج.' }
  },
  {
    id: '10',
    title: { en: 'Engine Component Render', ar: 'رندر لمكون محرك' },
    category: 'CAD Design',
    image: getProjectImg('engine_render.jpg'),
    tags: ['SolidWorks', 'Rendering', 'Automotive'],
    description: { en: 'High-quality render of a mechanical engine part.', ar: 'رندر عالي الجودة لجزء من محرك ميكانيكي.' }
  },
  {
    id: '11',
    title: { en: 'Mechanical Design 11', ar: 'تصميم ميكانيكي 11' },
    category: 'CAD Design',
    image: getProjectImg('mechanical_design_11.jpg'),
    tags: ['SolidWorks', 'CAD'],
    description: { en: 'Detailed CAD design of a mechanical component.', ar: 'تصميم كاد مفصل لمكون ميكانيكي.' }
  }
];

/**
 * CV Download Links
 */
export const CV_LINKS = {
  english: {
    pdf: 'https://drive.google.com/file/d/1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd/view',
    download: 'https://drive.google.com/uc?export=download&id=1Wfyg8_uTFyDw54FdCys_aAGVu2-29Kxd',
  },
  arabic: {
    pdf: 'https://drive.google.com/file/d/1fzLYa_25cC9p5h-RLcywrliZMXk5oWAg/view',
    download: 'https://drive.google.com/uc?export=download&id=1fzLYa_25cC9p5h-RLcywrliZMXk5oWAg',
  },
};

/**
 * Social Media and Contact Links
 */
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/amr-ammory',
  github: 'https://github.com/amr-ammory',
  email: 'amrammory13@gmail.com',
  whatsapp: 'https://wa.me/963934842344',
};

/**
 * Portfolio Statistics
 */
export const PORTFOLIO_STATS = {
  projectsCompleted: 50,
  clientsSatisfied: 30,
  yearsExperience: 5,
  awardWon: 6,
};
