import categories from "../data/categoriesMap";
import Categorie from "../components/Categorie";

import "../css/style.css";
import Game from "../components/Game";
import { useEffect, useState } from "react";

const Home = () => {
  const [testeapi, settesteapi] = useState("");
  useEffect(() => {
    const callAPI = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.text();
      settesteapi(data);
    };
    callAPI();
  }, []);

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
            <Categorie key={categorie.name} color={categorie.color}>
              {categorie.name}
            </Categorie>
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
      <h1>{testeapi}</h1>
    </div>
  );
};

export default Home;
