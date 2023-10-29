import SelectButton from "./SelectButton";

interface Props {
  player: any;
  cpu: any;
}

const ResultBoard = ({ player, cpu }: Props) => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="relative w-[700px] h-[450px]">
        {/* Player Pick */}
        <h1 className="absolute top-[10%] left-[21%]">You Picked</h1>
        <div className="absolute left-[15%] top-[30%]">
          <SelectButton choice={player} />
        </div>
        {/* Computer Pick */}
        <h1 className="absolute top-[10%] left-[60%]">The House Picked</h1>
        <div className="absolute left-[57%] top-[30%]">
          <SelectButton choice={cpu} />
        </div>
      </div>
    </div>
  );
};

export default ResultBoard;
