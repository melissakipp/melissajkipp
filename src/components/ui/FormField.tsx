import { FormFieldProps } from '../../types/FormFieldProps';

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  id, 
  type = 'text', 
  name = id,
  placeholder, 
  onChange, 
  required = false, 
  isTextarea = false,
  rows = 4
}) => {
  const inputProps = {
    id,
    type,
    name,
    className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
    placeholder,
    onChange,
    required
  };

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}:&nbsp;
        {required && (
          <small className="text-red-700">&#42;</small>
        )}
      </label>
      {isTextarea ? (
        <textarea 
          {...inputProps}
          rows={rows}
        />
      ) : (
        <input 
          {...inputProps}
          type={type}
        />
      )}
    </div>
  );
};

export default FormField;