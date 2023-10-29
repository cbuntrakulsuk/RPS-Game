interface Props {
  choice: any;
  onClick?: () => void;
}

const SelectButton = ({ onClick, choice }: Props) => {
  return (
    <div
      className={`cursor-pointer w-[200px] h-[200px] bg-white border-[24px] drop-shadow-2xl rounded-full ${choice.color}`}
      onClick={onClick}
    >
      <div className="h-[150px] flex items-center justify-center">
        <img className="scale-125" src={choice.img} />
      </div>
    </div>
  );
};

export default SelectButton;
