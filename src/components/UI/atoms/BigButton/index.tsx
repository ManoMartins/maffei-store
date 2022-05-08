import { Link } from 'atoms/Link';
import React from 'react';

interface IBigButtonProps {
  href: string
  label: string
}

export const BigButton = ({
  href,
  label,
}: IBigButtonProps) => {
  return (
    <Link 
      label={label} 
      href={href} 
      buttonProps={{
        size: 'large',
        sx: {
          color: "#FAFAFA",
          background: "linear-gradient(90deg, rgba(145,70,255,1) 0%, rgba(82,57,178,1) 100%)",
          "&:hover": {
            filter: "brightness(0.9)",
          }
        }
      }} 
    />    
  );
};
