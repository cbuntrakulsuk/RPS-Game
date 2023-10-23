import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ScoreBoard from "./components/ScoreBoard";
import Modal from "./components/Modal";

function App() {
  const [modalVisible, setModalVisibility] = useState(false);

  return (
    <div>
      <ScoreBoard />
      {modalVisible && <Modal> Rules </Modal>}
      <Button
        styles="border-headerOutline border-2 rounded-lg px-8 py-1 absolute bottom-20 right-20"
        onClick={() => setModalVisibility(true)}
      >
        RULES
      </Button>
    </div>
  );
}

export default App;
