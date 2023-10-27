import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import GameBoard from "./components/GameBoard";
import ResultBoard from "./components/ResultBoard";

function App() {
  const [modalVisible, setModalVisibility] = useState(false);
  const [choice, setChoice] = useState({
    image: "null",
    color: "null",
    option: "null",
  });

  const handleClick = (Paper: string, color: string, selection: string) => {
    setChoice((prevChoice: any) => ({
      ...prevChoice,
      image: Paper,
      color: color,
      option: selection,
    }));
    console.log("Run other stuff");
    // 1. random a computer selection
    // 2. compare result to computer selection
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
      {choice.image === "null" ? (
        <GameBoard handleClick={handleClick} />
      ) : (
        <ResultBoard
          option={choice.option}
          color={choice.color}
          image={choice.image}
        />
      )}
    </div>
  );
}

export default App;
