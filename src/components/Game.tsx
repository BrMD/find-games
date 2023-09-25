const Game = () => {
  return (
    <div className="containerGame">
      <div>
        <h3>titulo</h3>
      </div>
      <div className="gameImage"></div>
      <div className="textDivGame">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <div className="gameCategories">
          <div>
            <span>RPG</span>
          </div>
          <div>
            <span>Shooter</span>
          </div>
          <div>
            <span>Racing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
