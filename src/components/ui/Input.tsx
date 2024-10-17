'use client';

import { InputProps } from '../../types/InputProps';

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  className,
  // ... other props
}) => {
  return (
    <div className="form-group">
      <label
        className="mt-4 block text-md font-medium text-gray-800" 
        htmlFor={name}
      >{label}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
        />
      </label>
    </div>
  );
};

export default Input;