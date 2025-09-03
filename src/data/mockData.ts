import { ContactInfo, Experience, Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern ve responsive e-ticaret platformu',
    longDescription: 'React, Node.js ve MongoDB kullanılarak geliştirilmiş kapsamlı e-ticaret çözümü. Ödeme entegrasyonu, admin paneli ve gerçek zamanlı stok takibi içerir.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    demoUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Ekip çalışması için görev yönetim uygulaması',
    longDescription: 'Agile metodolojiler için tasarlanmış görev yönetim sistemi. Drag & drop, gerçek zamanlı güncellemeler ve detaylı raporlama özellikleri.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    demoUrl: 'https://demo-taskapp.com',
    githubUrl: 'https://github.com/username/taskapp',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Çoklu şehir hava durumu takip uygulaması',
    longDescription: 'OpenWeather API entegrasyonu ile geliştirilmiş hava durumu uygulaması. 7 günlük tahmin, haritalar ve detaylı meteoroloji verileri.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    demoUrl: 'https://demo-weather.com',
    githubUrl: 'https://github.com/username/weather',
    featured: false,
  },
  {
    id: '4',
    title: 'Blog Platform',
    description: 'SEO optimized blog ve içerik yönetim sistemi',
    longDescription: 'Next.js ile geliştirilmiş modern blog platformu. Markdown desteği, SEO optimizasyonu ve admin paneli ile komple içerik yönetimi.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b725?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/username/blog',
    featured: false,
  },
];

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', proficiency: 95 },
  { id: '2', name: 'TypeScript', category: 'frontend', proficiency: 90 },
  { id: '3', name: 'Next.js', category: 'frontend', proficiency: 85 },
  { id: '4', name: 'Vue.js', category: 'frontend', proficiency: 80 },
  { id: '5', name: 'Tailwind CSS', category: 'frontend', proficiency: 90 },
  { id: '6', name: 'Node.js', category: 'backend', proficiency: 85 },
  { id: '7', name: 'Express.js', category: 'backend', proficiency: 80 },
  { id: '8', name: 'MongoDB', category: 'backend', proficiency: 75 },
  { id: '9', name: 'PostgreSQL', category: 'backend', proficiency: 70 },
  { id: '10', name: 'React Native', category: 'mobile', proficiency: 75 },
  { id: '11', name: 'Flutter', category: 'mobile', proficiency: 70 },
  { id: '12', name: 'Git', category: 'tools', proficiency: 90 },
  { id: '13', name: 'Docker', category: 'tools', proficiency: 65 },
  { id: '14', name: 'AWS', category: 'tools', proficiency: 60 },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    startDate: '2022-01',
    description: 'Modern web uygulamaları geliştirme, ekip liderliği ve kod review süreçlerinde aktif rol alma.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    id: '2',
    company: 'Digital Agency Pro',
    position: 'Full Stack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Müşteri projeleri için end-to-end web çözümleri geliştirme ve API entegrasyonları.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    id: '3',
    company: 'StartUp Innovations',
    position: 'Frontend Developer',
    startDate: '2019-03',
    endDate: '2020-05',
    description: 'MVP ürünler için hızlı prototipleme ve kullanıcı arayüzü geliştirme.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Firebase'],
  },
];

export const contactInfo: ContactInfo = {
  email: 'bilalcavus01@gmail.com',
  phone: '+90 552 259 78 74',
  linkedin: 'https://linkedin.com/in/bilalcavus',
  github: 'https://github.com/bilalcavus',
  website: 'https://yourname.com',
};
