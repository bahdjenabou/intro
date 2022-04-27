import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

const GenerateD = () => {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const dList = [
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
  ];

  const genD = () => {
    const myD1 = Math.floor(Math.random() * 5);
    const myD2 = Math.floor(Math.random() * 5);
    setD1(dList[myD1]);
    setD2(dList[myD2]);
  };

  return (
    <div>
      <h1> generate un D</h1>
      <div>
        <FontAwesomeIcon icon={d1} size="4x" color="brown" />
        <FontAwesomeIcon icon={d2} size="4x" color="brown" />
      </div>
      <button style={{ marginTop: "4em" }} onClick={genD}>
        Generer
      </button>
    </div>
  );
};

export default GenerateD;
