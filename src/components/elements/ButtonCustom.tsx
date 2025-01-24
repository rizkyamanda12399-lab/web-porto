import { cva, type VariantProps } from 'class-variance-authority'
import { Sun } from 'lucide-react'

const buttonVariants = cva("flex items-center gap-2 text-sm font-medium rounded-md w-fit", {
    variants: {
        background: {
            primary: "bg-primary text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground",
        },
        size: {
            default: "px-4 py-3",
            sm: "px-3 py-2 text-xs",
            lg: "px-8 py-4",
        },
        position: {
            left: "justify-start",
            center: "justify-center",
            right: "justify-end",
        },
        disabled: {
            false: null,
            true: "cursor-not-allowed opacity-50",
        }
    },
    defaultVariants: {
        disabled: false,
        background: "primary",
        size: "default",
        position: "left",
    }
})

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
    icon?: boolean;
}

export const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    background,
    size,
    position,
    disabled,
    icon,
    children,
    ...props
}) => {
    return (
        <button
            className={buttonVariants({ background, size, position, disabled, className })}
            disabled={disabled || undefined}
            {...props}
        >
            {icon && <Sun className='w-4 h-4' />}
            {children}
        </button>
    )
}