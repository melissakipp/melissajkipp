'use client';

import { InputProps } from '../../types/InputProps';

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  // onChange,
  className,
  // ... other props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        // onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;