import React, { Component } from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import {incrementar, decrementar, setear} from './reducers'
import UserForm from './components/UserForm'
import './App.css';

class App extends Component {
  handleSetear = e => {
    const {setear} = this.props //saco setear desde las props 
    const {valor} = this.state //El valor lo saca del estado 
    setear(Number(valor)) //Pongo number para que me lo tome como numero y no string 
  }
  handleChange = e => {
    const { name, value } = e.target 
    this.setState({[name]: value})
  }
  handleSubmit = payload => {

  }
  render(){
    const {incrementar, decrementar, valor} = this.props
    console.log(this.state)
    return (
      <div className="App">

        <UserForm onSubmit= {this.handleSubmit} />

        <p>{valor}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
        <input name="valor" onChange={this.handleChange}/>
        <button onClick={this.handleSetear}>Setear</button>
        
      </div>
    );
  }
  
}

const mapStateToProps = state => { //Recibe el estado completo y la principal funcion es adaptar este estado a entregarle a nuestro componente de app
  return {
    valor: state.contador,
  }
}
const mapDispatchToProps = dispatch =>({ // Vamos aconstruir un objeto cuya propiedades se le tiene que pasar a App, osea la propiedad que cree aca va a aparecer disponible en nuestro app
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
  setear: payload => dispatch(setear(payload)), //Cuando ejecutemos la funcion de setear, que va a quedar disponible en las propiedades 
  
})
export default connect(mapStateToProps, mapDispatchToProps) (App); // El primer parentesis es la primera vez de que nosotros la ejecutemos vamos a tener que pasarle dos argumentos 
