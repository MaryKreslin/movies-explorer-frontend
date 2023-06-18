import React, { useCallback } from "react";

function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };


  const resetValidation = useCallback(
    function({values = {}}) {
        setValues(values)
    },[setValues]
  )
  return {values, handleChange, setValues};
}

export default useForm;
