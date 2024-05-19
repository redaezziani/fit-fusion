import { twMerge } from 'tailwind-merge'
enum AlertType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DEFAULT = 'default'
}

interface AlertMessageProps {
    type?: AlertType,
    title: string,
    description: string
    icon?: React.ReactNode
    className?: string
}


const AlertMessage = ({ type, title, description, icon = null, className = '' }: AlertMessageProps) => {
  return (
    <div className={twMerge(`flex items-center w-full justify-between mt-2 bg-slate-100 rounded py-3 px-4 space-x-4 ,${className} `)}>
      <div className="flex items-center space-x-2">
        {icon}
      </div>
      <div className="w-full flex flex-col  justify-start items-start gap-1">
      <span className="font-semibold">{title}</span>
      <span
      className='text-sm font-normal '
      >{description}</span>
      </div>
    </div>
  )
}

export default AlertMessage