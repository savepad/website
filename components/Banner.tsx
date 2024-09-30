import React from 'react';
import classNames from 'classnames';

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

  return (
    <section
      className={classNames(
        'w-full my-6 px-6 py-3 rounded border-2',
        variantStyles[variant]
      )}
    >
      <div className="">
        {title && (
          <h3 className="text-white text-lg mb-2">{title}</h3>
        )}
        <p className="text-gray-200 text-base leading-loose">{message}</p>
      </div>
    </section>
  );
};

export default Banner;
