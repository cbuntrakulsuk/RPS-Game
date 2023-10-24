import Logo from "../assets/images/logo.svg";

function ScoreBoard() {
  return (
    <>
      <div className="flex items-center justify-between mt-[50px] border border-4 border-headerOutline rounded-2xl  w-[700px] h-[150px]">
        <img className="px-[32px] py-[25px]" src={Logo} />
        <div className="bg-white rounded-2xl text-center w-[150px] h-[115px] mr-[25px] py-[10px]">
          <h2 className="text-xl text-scoreText">Score</h2>
          <div className="text-6xl text-darkText">12</div>
        </div>
      </div>
    </>
  );
}

export default ScoreBoard;
