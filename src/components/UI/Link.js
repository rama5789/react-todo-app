import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
    const style = {
        marginLeft: '4px',
    };

    return (
        <button onClick={onClick} disabled={active} style={style}>{children}</button>
    );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;