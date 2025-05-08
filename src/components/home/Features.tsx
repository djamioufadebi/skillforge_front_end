import React from 'react';
import { Globe, Users, DollarSign, Smartphone, Medal, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <Globe className="h-8 w-8 text-primary-500" />,
    title: 'Multilingual Platform',
    description: 'Create and consume content in multiple languages, making knowledge accessible to diverse communities.'
  },
  {
    icon: <Users className="h-8 w-8 text-secondary-500" />,
    title: 'Community Building',
    description: 'Connect with learners who share your interests and build your audience as an expert.'
  },
  {
    icon: <DollarSign className="h-8 w-8 text-accent-500" />,
    title: 'Multiple Payment Options',
    description: 'Support for global and local payment methods including mobile money, credit cards, and digital wallets.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary-500" />,
    title: 'Mobile First Experience',
    description: 'Optimized for mobile devices with offline capabilities for learning on the go.'
  },
  {
    icon: <Medal className="h-8 w-8 text-secondary-500" />,
    title: 'Certifications',
    description: 'Issue completion certificates to help learners showcase their new skills.'
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-accent-500" />,
    title: 'Analytics Dashboard',
    description: 'Track performance, engagement, and earnings with comprehensive analytics.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our platform provides all the tools you need to create, sell, and grow your online courses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 inline-block p-3 bg-gray-100 dark:bg-gray-600 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;