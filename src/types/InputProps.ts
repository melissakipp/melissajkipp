export interface InputProps {
  id: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time' | 'textarea';
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}