import React from 'react';

const Alert = ({text, type}) => {
    return (
        <div className={`alert alert-${type || 'warning'} alert-dismissible m-3`}>
            {text}
        </div>
    );
};

export default Alert;