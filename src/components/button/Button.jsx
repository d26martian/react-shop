import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const Button = ({ onClick, className, outline, children }) => {

    const onHandle = () => {
        console.log('click');
    };

    return (
        <button
            className={classNames('button', className, {'button--outline' : outline})}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.propTypes = {
    onHandle: PropTypes.func
};

export default Button;