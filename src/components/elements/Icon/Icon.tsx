import { CSSProperties, MouseEvent } from 'react'

type IconProps = {
  lib: 'remix-icon'
  icon: string
  className?: string
  style?: CSSProperties
  onClick?: (event: MouseEvent<HTMLElement>) => void
}

const Icon = ({ lib, icon, className, style, onClick }: IconProps) => {
  return (
    <i
      className={
        (lib === 'remix-icon' ? 'ri-' + icon : '') +
        (className !== undefined ? ' ' + className : '')
      }
      style={style}
      onClick={onClick}
    ></i>
  )
}

export default Icon
