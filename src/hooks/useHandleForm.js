import React, { useState } from "react";

export default function useHandleForm(initalValue) {
  const [value, setValue] = useState({ ...initalValue });
  const handleChange = (e) => {
    setValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => setValue(initalValue);
  return { value, handleChange, resetForm };
}
