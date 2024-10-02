import React from 'react';
import classNames from 'classnames';
import { FaInfoCircle, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface BannerProps {
  variant: 'info' | 'warning' | 'success';
  title?: string;
  message: string;
}

const Banner: React.FC<BannerProps> = ({ variant, title, message }) => {
  const variantStyles = {
    info: 'bg-sky-600 bg-opacity-30 border-sky-600 border-opacity-60',
    warning: 'bg-amber-600 bg-opacity-30 border-amber-600 border-opacity-60',
    success: 'bg-emerald-600 bg-opacity-30 border-emerald-600 border-opacity-60',
  };

  const iconStyles = {
    info: 'text-sky-600',
    warning: 'text-amber-600',
    success: 'text-emerald-600',
  };

  const iconMap = {
    info: <FaInfoCircle className={iconStyles.info} size={24} />,
    warning: <FaExclamationCircle className={iconStyles.warning} size={24} />,
    success: <FaCheckCircle className={iconStyles.success} size={24} />,
  };

  return (
    <section
      className={classNames(
        'w-full my-6 px-6 py-3 rounded-lg border-2 flex items-center',
        variantStyles[variant]
      )}
    >
      {/* Circular Icon */}
      <div className="flex-shrink-0 mr-4">
        <div className={classNames(
          'w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900 text-white border-2',
          {
            'border-sky-600': variant === 'info',
            'border-amber-600': variant === 'warning',
            'border-emerald-600': variant === 'success',
          }
        )}>
          {iconMap[variant]}
        </div>
      </div>

      <div className="flex flex-col">
        {title && (
          <h3 className="text-white text-lg mb-2">{title}</h3>
        )}
        <p className="text-gray-200 text-base leading-loose">{message}</p>
      </div>
    </section>
  );
};

export default Banner;
