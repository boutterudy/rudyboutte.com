type IconProps = {
  lib: 'remix-icon';
  icon: string;
  className?: string;
};

const Icon = ({ lib, icon, className }: IconProps) => {
  return (
    <i
      className={
        (lib === 'remix-icon' ? 'ri-' + icon : '') +
        (className !== undefined ? ' ' + className : '')
      }
    ></i>
  );
};

export default Icon;
