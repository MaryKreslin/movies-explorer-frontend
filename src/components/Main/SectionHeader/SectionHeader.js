import React from 'react';

const SectionHeader = (props) => {
    return (
        <div className='sectionHeader'>
            <h2 className='sectionHeader__text'>{props.text}</h2>
            <hr className='sectionHeader__line' />
        </div>
    )
}
export default SectionHeader;