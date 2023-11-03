import SelectButton from "./SelectButton";
import Button from "./Button";

interface Props {
  player: any;
  cpu: any;
  restart: any;
  result: string;
}

const ResultBoard = ({ player, cpu, restart, result }: Props) => {
  return (
    <div className="flex items-center justify-center mt-[60px]">
      <div className="w-[700px] h-[450px] flex items-center justify-center text-center">
        {/* Player Pick */}
        <div className="m-5">
          <div className="mb-12 text-lg">You Picked</div>
          <div className="pointer-events-none">
            {result == "You Win" ? (
              <div className="rounded-full shadow-rings">
                <SelectButton choice={player} />
              </div>
            ) : (
              <SelectButton choice={player} />
            )}
          </div>
        </div>

        <div className="m-5 z-50">
          <div className="text-4xl font-bold"> {result} </div>

          <Button
            onClick={() => restart(false)}
            styles="border-headerOutline border-2 rounded-lg px-8 py-1 uppercase bg-white text-black mt-3 "
          >
            Play Again
          </Button>
        </div>

        {/* Computer Pick */}
        <div className="m-5">
          <div className="mb-12 text-lg">The House Picked</div>
          <div className="pointer-events-none">
            {result == "You Lose" ? (
              <div className="rounded-full shadow-rings">
                <SelectButton choice={cpu} />
              </div>
            ) : (
              <SelectButton choice={cpu} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBoard;
