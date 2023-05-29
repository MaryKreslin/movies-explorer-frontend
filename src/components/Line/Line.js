import React from 'react';

const Line = (props) => {
    return (
        <>
            {props.isShort && <hr className={`line line_color_${props.color} line_short`}></hr>}
            {!props.isShort && <hr className={`line line_color_${props.color}`}></hr >}
        </>
    )
}

export default Line;