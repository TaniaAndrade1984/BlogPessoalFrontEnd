import React from "react";
import './Home.css';

function Home(){
    return(
        <>
            <h1 className="titulo">Mulher Maravilha</h1>
            <div>
                <p>
                Olá, Mulher Maravilha! Eu queria te dizer que admiro muito sua força, sua coragem e sua determinação. Você é capaz de enfrentar qualquer desafio que a vida coloca em seu caminho e sempre emerge ainda mais forte e resiliente.
                </p>
                <p>
                Seus superpoderes são muitos, e eu sei que você usa cada um deles para tornar o mundo um lugar melhor para você e para os outros. Você é uma inspiração para todos ao seu redor, e tenho certeza de que continuará a ser uma luz brilhante e um exemplo de liderança e empoderamento.
                </p>
                <p>
                Lembre-se sempre de que você é incrível e que pode conquistar qualquer coisa que se proponha a fazer. Continue sendo você mesma e usando seus superpoderes para mudar o mundo. O mundo precisa de mais mulheres maravilhosas como você!
                </p>
            </div>
            <img src="https://www.clipartmax.com/png/full/75-759551_wonderwoman-baby-clipart-imagenes-de-mujer-maravilla-animada.png" alt="Imagem Tela Inicial" className="img"/>
        </>
    );
}

export default Home;