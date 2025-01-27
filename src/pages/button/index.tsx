import { ButtonCustom } from "@/components/elements/ButtonCustom"
import { Sun, Moon } from 'lucide-react'

const ButtonPage = () => {
    return (
        <div className="min-h-screen flex gap-4 justify-center items-center">
            <div className="flex flex-col gap-3 p-4 border border-1-white rounded-lg">
                <ButtonCustom
                    background="blue"
                    size='sm'
                    position="left"
                    icon={<Sun className="w-3 h-3" />}
                    tooltip="Tooltip di atas"
                    tooltipPosition="top"
                >
                    Sun
                </ButtonCustom>

                <ButtonCustom
                    background="green"
                    size='md'
                    position="left"
                    icon={<Moon className="w-4 h-4" />}
                    tooltip="Tooltip di bawah"
                    tooltipPosition="bottom"
                >
                    Moon
                </ButtonCustom>

                <ButtonCustom
                    background="red"
                    size='lg'
                    position="left"
                    icon={<Sun className="w-5 h-5" />}
                    tooltip="Tooltip di kiri"
                    tooltipPosition="right"
                >
                    Moon
                </ButtonCustom>
            </div>
        </div>
    )
}

export default ButtonPage