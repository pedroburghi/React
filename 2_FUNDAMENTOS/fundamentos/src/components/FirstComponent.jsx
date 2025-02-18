//arquivos de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {
// a função faz algo

/*
multi line
*/

    return(
        <div>
            {/*Algum Comentário*/}
            <h1>
                Meu primeiro componente
            </h1>
            <p classname="teste">Meu Texto</p>
            <MyComponent />
        </div>
    );

};

export default FirstComponent;