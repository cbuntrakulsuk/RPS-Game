interface Props {
  children?: JSX.Element | JSX.Element[];
  color?: string;
  styles: string;
  onClick?: () => void;
}

const SelectButton = ({ color, children, styles, onClick }: Props) => {
  return (
    <div
      className={`cursor-pointer absolute w-[200px] h-[200px] bg-white border-[24px] drop-shadow-2xl rounded-full ${color} ${styles}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SelectButton;
