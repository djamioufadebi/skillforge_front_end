import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Users, Award, Book } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yOCAzMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAyLjc5IDQgNCA0IDQtMS43OSA0LTR6bTE2IDEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-in">
            Transform Your Knowledge<br className="hidden md:block" /> Into Revenue
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Create and sell micro-courses tailored to local needs. Share your expertise, inspire your community.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link to="/register">
              <Button variant="primary" size="lg" iconPosition="right" icon={<ChevronRight size={18} />}>
                Start Creating
              </Button>
            </Link>
            
            <Link to="/how-it-works">
              <Button variant="outline" size="lg" icon={<Play size={18} />} className="text-white border-white hover:bg-white/10">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in">
            <div className="flex justify-center mb-4">
              <Users size={40} className="text-accent-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">10,000+</h3>
            <p className="text-gray-300">Active Learners</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-4">
              <Book size={40} className="text-secondary-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">500+</h3>
            <p className="text-gray-300">Expert Courses</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4">
              <Award size={40} className="text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold mb-1">95%</h3>
            <p className="text-gray-300">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;