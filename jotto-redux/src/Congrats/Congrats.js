import React from 'react';
import PropTypes from 'prop-types';

const Congrats = function ({
    success
}) {
    return <div data-test='component-congrats' className='alert alert-success'>
        {success && <span data-test='congrats-message'>
            Congrats
        </span>}
    </div>
};

export default Congrats;

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}