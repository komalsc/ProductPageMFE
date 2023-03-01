import React from 'react'
import PropTypes from 'prop-types'

import classes from './Button.module.scss';



/**
 * Impliments Button component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Button
 */

export const Button = (props) => {
    const {className}=props
    return (
        <div className={classes.container}>
         
            <button className={className}>Add to Cart</button>
          
        </div>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string,
    onClick: PropTypes.string,
    className: PropTypes.string

    
    
};

/**
 * Default values for Button
 * 
 * @type {object}
 * @property {string} example='Button 
 */

export const defaultProps = {
    example:'Button'
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;