import Rock from "../assets/images/icon-rock.svg";
import Paper from "../assets/images/icon-paper.svg";
import Scissors from "../assets/images/icon-scissors.svg";
import SelectButton from "../components/SelectButton";

const GameBoard = () => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="relative w-[500px] h-[450px] bg-no-repeat bg-center bg-[url('.\assets\images\bg-triangle.svg')]">
        <SelectButton x="top-0" y="left-0" color="border-[#4B67F8]">
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Paper} />
          </div>
        </SelectButton>
        <SelectButton
          x="right-1/2 left-[29%]"
          y="bottom-0"
          color="border-[#DE3353]"
        >
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Rock} />
          </div>
        </SelectButton>
        <SelectButton x="right-0" y="top-0" color="border-[#EDA012]">
          <div className="h-[150px] flex items-center justify-center">
            <img className="scale-125" src={Scissors} />
          </div>
        </SelectButton>
      </div>
    </div>
  );
};

export default GameBoard;
