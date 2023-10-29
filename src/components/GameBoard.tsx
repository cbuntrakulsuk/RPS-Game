import SelectButton from "../components/SelectButton";
import { RPS } from "../data";

interface Props {
  handleClick: (arg1: any) => void;
}

const GameBoard = ({ handleClick }: Props) => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-[url('.\assets\images\bg-triangle.svg')]">
        {/* Rock Button */}
        <div className="absolute right-1/2 left-[29%] bottom-0">
          <SelectButton choice={RPS[0]} onClick={() => handleClick(RPS[0])} />
        </div>
        {/* Paper Button */}
        <div className="absolute top-0 left-0">
          <SelectButton choice={RPS[1]} onClick={() => handleClick(RPS[1])} />
        </div>
        {/* Scissors Button */}
        <div className="absolute right-0 top-0">
          <SelectButton choice={RPS[2]} onClick={() => handleClick(RPS[2])} />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
