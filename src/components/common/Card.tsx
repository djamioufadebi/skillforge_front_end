import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
  footer,
  className = '',
  children,
  hoverEffect = true,
  onClick,
}) => {
  const cardClasses = `
    bg-white dark:bg-gray-800 
    rounded-lg shadow-md overflow-hidden 
    ${hoverEffect ? 'transition-shadow hover:shadow-lg' : ''} 
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;
  
  return (
    <div className={cardClasses} onClick={onClick}>
      {image && (
        <div className="h-48 w-full relative overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-5">
        {title && (
          <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {subtitle}
          </p>
        )}
        
        <div className="mb-2">
          {children}
        </div>
      </div>
      
      {footer && (
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;