import { cn } from '@/lib/utils';
import {ButtonHTMLAttributes, forwardRef} from 'react';

export type ButtonsProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement,ButtonsProps>(({
    className,
    children,
    disabled=false,
    type ="button",
    ...props
},ref)=>{
    return (
        <button ref={ref}
        {...props}
        type={type}
        disabled={disabled}
         className={cn(`
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            py-3
            disabled:cursor-not-allowed
            disabled:opacity-50
            text-white
            font-semibold
            hover:opacity-75
            transition
        
        `,className)} >
            {children}
        </button>
    )
});

Button.displayName="Button";

export default Button;