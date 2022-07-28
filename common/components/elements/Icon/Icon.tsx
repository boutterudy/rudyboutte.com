import { CSSProperties } from 'react'

type IconProps = {
  lib: 'remix-icon'
  icon: string
  className?: string
  style?: CSSProperties
}

const Icon = ({ lib, icon, className, style }: IconProps) => {
  return (
    <i
      className={
        (lib === 'remix-icon' ? 'ri-' + icon : '') +
        (className !== undefined ? ' ' + className : '')
      }
      style={style}
    ></i>
  )
}

export default Icon
