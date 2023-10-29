import rockIMG from "./assets/images/icon-rock.svg";
import paperIMG from "./assets/images/icon-paper.svg";
import scissorsIMG from "./assets/images/icon-scissors.svg";

export const RPS = [
  { name: "Rock", color: "border-[#DE3353]", img: rockIMG },
  { name: "Paper", color: "border-[#4B67F8]", img: paperIMG },
  { name: "Scissors", color: "border-[#EDA012]", img: scissorsIMG },
];

export const PLAYER_CHOICE = {
  name: "",
  color: "",
  img: "",
};

export const CPU_CHOICE = {
  name: "",
  color: "",
  img: "",
};

export const CPU_CHOICES: string[] = ["Rock", "Paper", "Scissors"];
