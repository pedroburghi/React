import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Não tem mais jeito, acabou</h1>
        <h2>A sua pontuação foi:<span>{score}</span> </h2>
        <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver;