import { useCallback, useState } from "react";

const useFormWithValidation = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);


    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());

    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.name && values.email && values.password) {
            callback(values.name, values.email, values.password)
        }
        else if (values.email && values.password) {
            callback(values.email, values.password)
        }
        else {
            callback(values.name, values.email)
        }
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {
        handleChange,
        handleSubmit,
        values, errors, isValid,
        setValues,
        resetForm
    };
}

export default useFormWithValidation;