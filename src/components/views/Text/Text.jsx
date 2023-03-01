import React from 'react'
import PropTypes from 'prop-types'

import classes from './Text.module.scss';



/**
 * Impliments Text component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Text
 */

export const Text = (props) => {
    return (
        <div className={classes.container}>
            {/* {props.example} */}
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
    example: PropTypes.string
};

/**
 * Default values for Text
 * 
 * @type {object}
 * @property {string} example='Text 
 */

export const defaultProps = {
    example:'Text'
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;