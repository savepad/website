import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  href?: string;
  icon?: IconType;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, href, icon: Icon, variant }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded px-8 py-3 text-base font-medium';
  const primaryStyles = 'bg-violet-700 text-gray-100 hover:bg-violet-900';
  const secondaryStyles = 'bg-neutral-900 text-gray-100 hover:bg-neutral-800';

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  const content = (
    <>
      <span>{label}</span>
      {Icon && <Icon className="ml-3" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${buttonStyles}`}>
        {content}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${buttonStyles}`}>
      {content}
    </button>
  );
};

export default Button;
