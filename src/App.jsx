import PlayerInfo from './Components/PlayerInfo';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name="Player 1" symbol="X" />
          <PlayerInfo name="Player 2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
