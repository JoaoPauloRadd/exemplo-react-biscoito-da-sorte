import React, { Component } from "react"
import './estilo.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase : '' //carrega sem nenhuma frase (biscoito não quebrado)
    };

    //permitindo a atualização do campo de texto enviando acesso aos atributos
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    // 10 frases de recado do biscoito
    this.frases = [
      "Uma nova oportunidade baterá à sua porta quando menos esperar.",
      "Confie mais em sua intuição; ela conhece o caminho.",
      "Pequenos passos hoje resultam em grandes conquistas amanhã.",
      "O riso que você espalha volta para você multiplicado.",
      "Um velho sonho pode renascer se você lhe der atenção.",
      "A sorte favorece quem age com coragem e coração.",
      "Você encontrará sabedoria em um lugar inesperado.",
      "Desapegar-se do passado abre espaço para o novo.",
      "Uma conexão hoje pode virar parceria valiosa amanhã.",
      "A gentileza que você oferece é o eco do seu legado."
      ];
  }

  quebraBiscoito(){
    let state = this.state;
    let atualiza = true;
    //laço para garantir que não seja escolhida a mesma frase que antes
    do{
      let nAleatorio= Math.floor(Math.random() * this.frases.length);
      if (!this.state.textoFrase.includes(this.frases[nAleatorio])){
        state.textoFrase = '" '+ this.frases[nAleatorio] +' "';
        atualiza = false;
      }
    }while(atualiza)
    
    this.setState(state);//atualizo a frase do momento
  }

  render(){
    return(
      <div className="container">
        <h1>React em Biscoito da sorte</h1>
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    )
  }
}

//para manipular e disparar o evento de escolha de frase
class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}



export default App;