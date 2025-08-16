import { cva, type VariantProps } from 'class-variance-authority'
// test123
const buttonVariants = cva("flex items-center gap-2 text-sm font-medium rounded-md w-fit", {
    variants: {
        background: {
            blue: "bg-indigo-600 text-primary-foreground hover:bg-indigo-700",
            green: "bg-green-600 text-secondary-foreground hover:bg-green-700",
            red: "bg-red-600 text-primary-foreground hover:bg-red-700",
        },
        size: {
            default: "px-4 py-3",
            sm: "px-3 py-2 text-xs",
            md: "px-4 py-3 text-sm",
            lg: "px-8 py-4 text-lg",
        },
        position: {
            left: "flex-row",
            right: "flex-row-reverse",
        },
        disabled: {
            false: null,
            true: "cursor-not-allowed opacity-50",
        }
    },
    defaultVariants: {
        disabled: false,
        background: "blue",
        size: "default",
        position: "left",
    }
})

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonVariants> {
    icon?: React.ReactNode;
    tooltip?: string;
    tooltipPosition?: "top" | "bottom" | "left" | "right"; // Tooltip position
}

export const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    background,
    size,
    position,
    tooltip,
    tooltipPosition = "top",
    disabled,
    icon,
    children,
    ...props
}) => {
    const tooltipPositionClasses = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };

    return (
        <div className="relative w-fit group">
            <button
                className={buttonVariants({ background, size, position, disabled, className })}
                disabled={disabled || undefined}
                {...props}
            >
                {icon}
                {children}
            </button>
            {tooltip && (
                <div className={`absolute w-full z-10 hidden px-2 py-1 text-xs text-white bg-black rounded-md shadow-sm shadow-white group-hover:flex ${tooltipPositionClasses[tooltipPosition]}`}
                >
                    {tooltip}
                </div>
            )}
        </div>
    )
}