import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, children, ...props }) => {
    // Styles de base
    const baseStyles = '';

    // Variantes
    const variantStyles = {
        primary: 'bg-foreground text-background hover:shadow-lg hover:shadow-foreground',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    // Concaténation manuelle des classes
    const buttonClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary}`;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

// Validation des props
Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
    children: PropTypes.node.isRequired,
};

// Valeurs par défaut
Button.defaultProps = {
    variant: 'primary',
};

export default Button;
