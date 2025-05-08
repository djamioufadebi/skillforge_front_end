import React from 'react';
import { UserPlus, FileText, DollarSign, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus size={28} className="text-white" />,
    iconBg: 'bg-primary-500',
    title: 'Create Your Account',
    description: 'Sign up as a trainer and complete your profile to showcase your expertise and build credibility.'
  },
  {
    icon: <FileText size={28} className="text-white" />,
    iconBg: 'bg-secondary-500',
    title: 'Build Your Course',
    description: 'Use our intuitive course builder to create engaging content with videos, texts, quizzes, and assignments.'
  },
  {
    icon: <DollarSign size={28} className="text-white" />,
    iconBg: 'bg-accent-500',
    title: 'Set Your Price',
    description: 'Choose your pricing strategy and get paid in your local currency or through mobile money options.'
  },
  {
    icon: <BookOpen size={28} className="text-white" />,
    iconBg: 'bg-primary-700',
    title: 'Engage & Grow',
    description: 'Connect with your students, gather feedback, and continuously improve your offerings.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            How SkillForge Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Follow these simple steps to start sharing your knowledge and earning revenue
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="md:flex mb-16 last:mb-0 relative">
              {/* Left side (even steps) */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-auto' : 'md:pl-12 mr-auto'}`}>
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
              
              {/* Center icon for desktop */}
              <div className="hidden md:flex absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10">
                <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              
              {/* Mobile icon */}
              <div className="flex md:hidden mb-4 justify-center">
                <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              
              {/* Empty div for alternate layout */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? '' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;