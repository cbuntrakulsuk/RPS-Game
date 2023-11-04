import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import GameBoard from "./components/GameBoard";
import ResultBoard from "./components/ResultBoard";
import { PLAYER_CHOICE, CPU_CHOICE, RPS } from "./data";

function App() {
  const [modalVisible, setModalVisibility] = useState(false);
  const [isClicked, setisClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState("");

  const getCpuChoice = () => {
    const cpuChoice = Math.floor(Math.random() * 3);
    return RPS[cpuChoice];
  };

  const updateChoice = (
    choice: any,
    newChoice: { name: any; color: any; img: any }
  ) => {
    newChoice.name = choice.name;
    newChoice.color = choice.color;
    newChoice.img = choice.img;
    return newChoice;
  };

  const getWinner = (cpuChoice: string, playerChoice: string) => {
    if (cpuChoice === playerChoice) {
      return "Tie";
    } else if (
      (playerChoice === "Rock" && cpuChoice === "Scissors") ||
      (playerChoice === "Scissors" && cpuChoice === "Paper") ||
      (playerChoice === "Paper" && cpuChoice === "Rock")
    ) {
      updateScore("win");
      return "You Win";
    } else {
      updateScore("lose");
      return "You Lose";
    }
  };

  const updateScore = (outcome: string) => {
    if (outcome == "win") {
      setScore(score + 1);
    } else {
      if (score > 0) {
        setScore(score - 1);
      }
    }
  };

  const handleClick = (pick: any) => {
    setisClicked(true);

    //1. getCpuPick
    const cpuPick = getCpuChoice(); // random a number between 1 - 3
    const newcpuPick = updateChoice(cpuPick, CPU_CHOICE); //updates the cpu choice object

    // 2. getPlayerPick
    const playerPick = updateChoice(pick, PLAYER_CHOICE); //update the player choice object

    // 3. compare result to computer selection
    const winner = getWinner(newcpuPick.name, playerPick.name);
    setWinner(winner);
  };

  return (
    <div>
      <div className="flex justify-center">
        {modalVisible && (
          <Modal onClose={() => setModalVisibility(false)}> Rules </Modal>
        )}
        <ScoreBoard score={score} />
        <Button
          styles="border-headerOutline border-2 rounded-lg px-8 py-1 absolute bottom-20 right-20"
          onClick={() => setModalVisibility(true)}
        >
          RULES
        </Button>
      </div>
      {isClicked === false ? (
        <GameBoard handleClick={handleClick} />
      ) : (
        <ResultBoard
          result={winner}
          restart={setisClicked}
          player={PLAYER_CHOICE}
          cpu={CPU_CHOICE}
        />
      )}
    </div>
  );
}

export default App;
