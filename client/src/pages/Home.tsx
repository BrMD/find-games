import categories from "../data/categoriesMap";
import Categorie from "../components/Categorie";

import "../css/style.css";
import Game from "../components/Game";

const Home = () => {
  return (
    <div className="containerHome">
      <div>
        <h1 className="headline headline--background-clip headline--linear-gradient">
          find-games
        </h1>
      </div>
      <div className="categoriesContainer">
        {categories.map((categorie) => {
          return (
            <Categorie color={categorie.color}>{categorie.name}</Categorie>
          );
        })}
      </div>
      <div className="gamesContainer">
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
    </div>
  );
};

export default Home;
