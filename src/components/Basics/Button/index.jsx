import React from 'react';
import PropTypes from 'prop-types';

const PlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5V19L19 12L8 5Z" />
    </svg>
);

const SaveIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21L12 14L5 21V3H19V21Z" />
    </svg>
);

const RightArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L19 12L12 19" />
    </svg>
);

const LeftArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L5 12L12 19" />
    </svg>
);

const Button = ({ variant = 'primary', size = 'sm', children, hiddenText, className, icon, ...props }) => {
    // Styles de base
    const baseStyles = '';

    // Variantes
    const sizeStyles = {
        sm: 'p-3 h-12 min-w-12 text-xs lg:text-sm uppercase',
        lg: 'p-3 h-12 min-w-12 text-xs lg:p-6 lg:h-16 lg:min-w-16 lg:text-base uppercase',
    };

    const variantStyles = {
        primary: 'group/button flex flex-row items-center justify-center gap-2 w-fit bg-foreground text-background rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-700 hover:-translate-y-1',
        secondary: 'group/button flex flex-row items-center justify-center gap-2 w-fit bg-transparent rounded-full border border-foreground text-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-700',
        reverse: 'group/button flex flex-row items-center justify-center gap-2 w-fit bg-foreground text-background rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-700',
        icon: 'group/button flex flex-row items-center justify-center gap-2 w-fit bg-foreground text-background rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-700'
    };

    // Concaténation manuelle des classes
    const buttonClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.sm} ${className || ''}`;

    return (
        <button className={buttonClass} {...props}>
            {icon === "play" && <PlayIcon />}
            {icon === "save" && <SaveIcon />}
            {icon === "right-arrow" && <RightArrowIcon />}
            {icon === "left-arrow" && <LeftArrowIcon />}
            {children ?? children}
            {hiddenText && (
                <p className="hidden group-hover/button:block uppercase">
                    {hiddenText}
                </p>
            )}
        </button>
    );
};

// Validation des props
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'reverse']),
    size: PropTypes.oneOf(['sm', 'lg']),
    children: PropTypes.node,
    hiddenText: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.oneOf(["play", "save", "right-arrow", "left-arrow"]),
};

export default Button;
