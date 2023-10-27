import Rock from "../assets/images/icon-rock.svg";
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import SelectButton from "../components/SelectButton";

interface Props {
  handleClick: (arg1: string, arg2: string, arg3: string) => void;
}

const GameBoard = ({ handleClick }: Props) => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-[url('.\assets\images\bg-triangle.svg')]">
        {/* Paper Button */}
        <SelectButton
          styles="top-0 left-0"
          color="border-[#4B67F8]"
          onClick={() => handleClick(Paper, "border-[#4B67F8]", "Paper")}
        >
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Paper} />
          </div>
        </SelectButton>

        {/* Rock Button */}
        <SelectButton
          styles="right-1/2 left-[29%] bottom-0"
          color="border-[#DE3353]"
          onClick={() => handleClick(Rock, "border-[#DE3353]", "Rock")}
        >
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Rock} />
          </div>
        </SelectButton>

        {/* Scissors Button */}
        <SelectButton
          styles="right-0 top-0"
          color="border-[#EDA012]"
          onClick={() => handleClick(Scissors, "border-[#EDA012]", "Scissors")}
        >
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Scissors} />
          </div>
        </SelectButton>
      </div>
    </div>
  );
};

export default GameBoard;
