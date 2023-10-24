import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";
import GameBoard from "./components/GameBoard";

function App() {
  const [modalVisible, setModalVisibility] = useState(false);

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
      <GameBoard />
    </div>
  );
}

export default App;
