'use client';
import { InputProps } from '../../types/InputProps';

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  name,
  label,
  placeholder,
  value,
  onChange,
  className,
  required = false,
}) => {
  return (
    <div className="form-group">
      <label
        className="mt-4 block text-md font-medium text-gray-800" 
        htmlFor={name}
      >{label}:&nbsp;
        {required && (
          <small className="text-red-700">&#42;</small>
        )}
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          required={required}
        />
      </label>
    </div>
  );
}

export default Input;