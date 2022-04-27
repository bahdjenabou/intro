import { useState } from "react";

const GenerateNumber = () => {
  const [aleatoire, setAleatoire] = useState(0);

  const genNumber = () => {
    const myNum = Math.floor(Math.random() * 50 + 1);
    setAleatoire(myNum);
  };

  return (
    <div>
      <h1>Generer un nombre aleatoire</h1>
      <p>Nombre généré : {aleatoire}</p>
      <button onClick={genNumber}> Generer un nombre </button>
    </div>
  );
};

export default GenerateNumber;
