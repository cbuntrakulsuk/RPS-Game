import SelectButton from "./SelectButton";

interface Props {
  image: string;
  color: string;
}

const ResultBoard = ({ image, color }: Props) => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="relative w-[700px] h-[450px]">
        {/* Player Pick */}
        <h1 className="absolute top-[10%] left-[21%]">You Picked</h1>
        <SelectButton styles="left-[15%] top-[30%]" color={color}>
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={image} />
          </div>
        </SelectButton>
        {/* Computer Pick */}
        <h1 className="absolute top-[10%] left-[60%]">The House Picked</h1>
        <SelectButton styles="left-[57%] top-[30%]" color={color}>
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={image} />
          </div>
        </SelectButton>
      </div>
    </div>
  );
};

export default ResultBoard;
