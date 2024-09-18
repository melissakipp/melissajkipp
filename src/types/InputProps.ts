export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'textarea';
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  // ... other props as needed
}