import { useCallback, useState } from "react";
import { EMAIL_REGEX } from "./constants";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const useFormWithValidation = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChangeName = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    };
    const handleChangePassword = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest('form').checkValidity());
    }
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

    const handleChangeEmail = (event) => {
        const emailValidity = new RegExp(EMAIL_REGEX, "gi");
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (emailValidity.test(event.target.value)) {
            setIsValid(target.closest('form').checkValidity())
            setValues({ ...values, [name]: value });
            setErrors({});
        }
        else {
            setErrors({ ...errors, [name]: target.validationMessage });
            setIsValid(target.closest('form').checkValidity())
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
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        handleSubmit,
        values, errors, isValid,
        setValues,
        resetForm
    };
}

export default useFormWithValidation;