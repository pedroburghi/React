import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Clique no Botão pra Começar a Jogar</p>
        <button onClick={startGame}>Começar o Jogo!</button>
    </div>
  )
}

export default StartScreen;