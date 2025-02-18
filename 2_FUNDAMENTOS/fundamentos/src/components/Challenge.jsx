const Challenge = () => {
const a = 20
const b = 10

    return (
    <div>   
        <p> Número: {a} </p>
        <p> Número: {b} </p>

        <button onClick={() => console.log(a+b)}>
            Clique aqui para ver uma mágica!
        </button>

        
    </div>
    );
};

export default Challenge;