import React from 'react';
import Line from '../../Line/Line.js';

const SectionHeader = (props) => {
    return (
        <div className='sectionHeader'>
            <h2 className='sectionHeader__text'>{props.text}</h2>
            <Line color='white' />
        </div>
    )
}
export default SectionHeader;