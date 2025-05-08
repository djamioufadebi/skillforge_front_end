import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'UX Designer',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'SkillForge helped me turn my design expertise into a profitable side business. The platform is so intuitive and the mobile accessibility means my students can learn anywhere, even with limited connectivity.',
    rating: 5
  },
  {
    name: 'Emmanuel Koné',
    role: 'Agricultural Expert',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'I\'ve been able to share sustainable farming techniques with people across Africa. The multilingual support allows me to create content in French and local languages, reaching those who need it most.',
    rating: 5
  },
  {
    name: 'Aisha Ndao',
    role: 'Business Coach',
    avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The local payment options were a game-changer for me. My students can pay easily via mobile money, and I receive everything in my local currency without complicated international transfers.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            What Our Trainers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from experts who are successfully sharing their knowledge and skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;