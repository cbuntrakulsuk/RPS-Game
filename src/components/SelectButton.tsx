interface Props {
  children: JSX.Element | JSX.Element[];
  color: string;
  x: string;
  y: string;
}

const SelectButton = ({ color, children, x, y }: Props) => {
  return (
    <div
      className={`cursor-pointer absolute w-[200px] h-[200px] bg-white border-[24px] drop-shadow-2xl rounded-full ${color} ${x} ${y}`}
    >
      {children}
    </div>
  );
};

export default SelectButton;
