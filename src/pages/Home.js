import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const noms = ["Diallo", "Mansare", "Haba", "Bah"];
  const filtered = noms.filter((nom) => nom !== "Haba");

  return (
    <div>
      <h1>
        Page d'accueil <FontAwesomeIcon icon={faCoffee} />
      </h1>
      <h3>Liste non filtrée</h3>
      <ul>
        {noms.map((nom) => (
          <li> {nom} </li>
        ))}
      </ul>

      <h3>Liste filtrée</h3>
      <ul>
        {filtered.map((nom) => (
          <li> {nom} </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
