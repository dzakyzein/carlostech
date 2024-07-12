import { useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

const usePasswordVisibility = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const PasswordVisibilityIcon = (field) =>
    showPassword[field] ? (
      <MdOutlineVisibility
        onClick={() => togglePasswordVisibility(field)}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer'
      />
    ) : (
      <MdOutlineVisibilityOff
        onClick={() => togglePasswordVisibility(field)}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer'
      />
    );

  return { showPassword, PasswordVisibilityIcon };
};

export default usePasswordVisibility;
