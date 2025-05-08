import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Button from '../common/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Sharing Your Knowledge?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of experts already transforming their skills into income through micro-courses that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button 
                variant="accent" 
                size="lg" 
                iconPosition="right"
                icon={<ChevronRight size={18} />}
              >
                Start Creating Today
              </Button>
            </Link>
            
            <Link to="/courses">
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;