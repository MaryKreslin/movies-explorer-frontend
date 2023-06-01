import React from 'react';

const FormField = (props) => {
    return (
        <div className='field'>
            <label for={props.name} className='field__label'>{props.label}</label>
            <input
                type={props.type}
                className="field__input"
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                //value=
                onChange={props.handleChange}
                required
                autoComplete='false'
            />
            <p className={`field__error ${props.name}-error`}></p>
        </div>
    )
}

export default FormField;