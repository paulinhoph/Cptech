import React, { Component } from 'react';


// Image
import logoWhite from '../assets/images/logo-white.png';
import logo from '../assets/images/logo.png';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logo: logoWhite,
      standardClass: 'navbar',
      colorfulClass: ''
    } 
  }

  componentDidMount = () =>  {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    // check where the user is on the page
    if(window.pageYOffset > 0 ){
      // Add class Colorful
      this.setState({
        logo: logo,
        colorfulClass: 'colorful'
      });

    } else{
      // Remove Add class Colorful
      this.setState({
        logo: logoWhite,
        colorfulClass: ''
      });

    }    
  }


  render() {
    return (
      <div className={this.state.standardClass + ' ' + this.state.colorfulClass }>
        <div className="container">
          <div className="row">
            <img src={this.state.logo} title="CpTech" alt="CpTech" />
            <ul className="nav-items">
              <li>
                <a href="Home" alt="Home" title="Home">Home</a>
              </li>
              <li>
                <a href="Servicos" alt="Serviços" title="Serviços">Serviços</a>
              </li>
              <li>
                <a href="ComoCriamos" alt="Como Criamos" title="Como Criamos">Como Criamos</a>
              </li>
              <li>
                <a href="Sobre" alt="Sobre" title="Sobre">Sobre</a>
              </li>
              <li>
                <a href="Recomendacoes" alt="Recomendações" title="Recomendações">Recomendações</a>
              </li>
              <li>
                <a href="Contato" alt="Contato" title="Contato">Contato</a>
              </li>
              <li className="transparent-button">
                <a href="orcamento" alt="Orçamento Online" title="Orçamento Online">Orçamento Online</a>
              </li>   
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
