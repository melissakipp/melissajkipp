import { Button as HeadlessButton } from '@headlessui/react';
import { CustomButtonProps } from '@/src/types/Button';

export default function CustomButton({ text, type, value }: CustomButtonProps) {
  return (
    <HeadlessButton 
      className="m-2 py-2 px-4 rounded bg-purple-600 text-sm text-white font-bold tracking-wide data-[hover]:bg-purple-500 data-[active]:bg-purple-700"
      type={type}
      value={value}
    >
      {text}
    </HeadlessButton>
  );
}
