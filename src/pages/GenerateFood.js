import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEgg,
  faFish,
  faAppleWhole,
  faBowlRice,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

const GenerateFood = () => {
  const [food, setFood] = useState("");

  const foodList = [faEgg, faFish, faAppleWhole, faBowlRice, faDrumstickBite];

  const genFood = () => {
    const myNum = Math.floor(Math.random() * 4);
    setFood(foodList[myNum]);
  };

  return (
    <div>
      <h1>Generer de la nourriture</h1>
      <div>
        <FontAwesomeIcon icon={food} size="4x" color="brown" />
      </div>
      <button style={{ marginTop: "4em" }} onClick={genFood}>
        Generer
      </button>
    </div>
  );
};

export default GenerateFood;
