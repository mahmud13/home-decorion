import { StaticImageData } from 'next/image';
import Service from './Service';

interface serviceType {
  icon: string | StaticImageData;
  title: string;
  description: string;
}
const services: serviceType[] = [
  {
    icon: '/images/services/instant.png',
    title: 'Instant Design',
    description:
      'Forget about months of waiting. Get your interior design quickly and easily.',
  },
  {
    icon: '/images/services/affordable.png',
    title: 'Affordable Pricing',
    description:
      'We value your time & budget, and we provide transparent pricing that matches your financial request.',
  },
  {
    icon: '/images/services/ai.png',
    title: 'Artificial Intelligence',
    description:
      'Our algorithms use the latest technologies to create the perfect design.',
  },
  {
    icon: '/images/services/exchange.png',
    title: 'Interactive Changes',
    description:
      'Your preferences matter. Make changes and ensure every detail fits your style.',
  },
  {
    icon: '/images/services/instant-perchase.png',
    title: 'Instant Purchase',
    description:
      'Love the furniture or decor? Buy them instantly from our app.',
  },
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {services.map((service, i) => (
        <Service
          key={i}
          service={service}
        />
      ))}
    </div>
  );
}
