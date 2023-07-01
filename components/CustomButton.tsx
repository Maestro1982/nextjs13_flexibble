import Image from 'next/image';
import { MouseEventHandler } from 'react';

type Props = {
  title: string;
  type?: 'button' | 'submit';
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  bgColor?: string;
  textColor?: string;
};

const CustomButton = ({
  title,
  type,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  bgColor,
  textColor,
}: Props) => {
  return (
    <button
      type={type || 'button'}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3
      ${textColor || 'text-white'}
      ${
        isSubmitting ? 'bg-black-50' : bgColor || 'bg-primary-purple'
      } rounded-xl text-sm font-sans max-md:w-full
      `}
      onClick={handleClick}
    >
      {leftIcon && <Image src={leftIcon} width={14} height={14} alt='Left' />}
      {title}
      {rightIcon && (
        <Image src={rightIcon} width={14} height={14} alt='Right' />
      )}
    </button>
  );
};
export default CustomButton;
