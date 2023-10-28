import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import GameBoard from "./components/GameBoard";
import ResultBoard from "./components/ResultBoard";

function App() {
  const CPU_CHOICES: string[] = ["Rock", "Paper", "Scissors"];
  const [modalVisible, setModalVisibility] = useState(false);
  const [playerChoice, setPlayerChoice] = useState({
    image: "null",
    color: "null",
    option: "null",
  });

  const cpuChoice = () => {
    // 1. random a computer selection
    const cpuChoice = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    return CPU_CHOICES[cpuChoice];
  };

  const checkWinner = (cpuChoice: string, playerChoice: string) => {
    if (cpuChoice === playerChoice) {
      return "Tie!";
    } else if (
      (playerChoice === "Rock" && cpuChoice === "Scissors") ||
      (playerChoice === "Scissors" && cpuChoice === "Paper") ||
      (playerChoice === "Paper" && cpuChoice === "Rock")
    ) {
      return "You Win!";
    } else {
      return "You Lose";
    }
  };

  const handleClick = (Paper: string, color: string, selection: string) => {
    setPlayerChoice((prevChoice: any) => ({
      ...prevChoice,
      image: Paper,
      color: color,
      option: selection,
    }));

    //1. Cpu picks a selection
    const cpuPick = cpuChoice();

    // 2. compare result to computer selection
    console.log("Player picked: " + selection);
    console.log("CPU picked: " + cpuPick);
    console.log(checkWinner(cpuPick, selection));

    // 3. update ScoreBoard

    // 4. play again
  };

  return (
    <div>
      <div className="flex justify-center">
        {modalVisible && (
          <Modal onClose={() => setModalVisibility(false)}> Rules </Modal>
        )}
        <ScoreBoard />
        <Button
          styles="border-headerOutline border-2 rounded-lg px-8 py-1 absolute bottom-20 right-20"
          onClick={() => setModalVisibility(true)}
        >
          RULES
        </Button>
      </div>
      {playerChoice.image === "null" ? (
        <GameBoard handleClick={handleClick} />
      ) : (
        <ResultBoard color={playerChoice.color} image={playerChoice.image} />
      )}
    </div>
  );
}

export default App;
