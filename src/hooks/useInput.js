import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const { value } = e.target;

    setValue(value);
  };

  return [value, onChange, setValue];
};

export default useInput;
