import React, { Component } from 'react';
import {reduxForm,Field} from 'redux-form' //Al formulario lo tenemos que conectar con redux-form
// Field es un componente el cual nos va a yudar a que nosotros podamos creamos ams componentes de campo
import CustomInput from './CustomInput'

const validate = values => {
    const errors = { }
    if (!values.name) {
        errors.name = 'Campo obligatorio'
    }
    if (!values.lastname) {
        errors.lastname = 'Campo obligatorio' 
    }
    return errors
}
class UserForm extends Component{
    render(){
        const {handleSubmit} = this.props //hanldeSubmit lo que hace es que cuando se la pasamos al form en onSubmit, va a tomar el evento del formulario, va a prevenir el comportamiento por defecto, le va a pasar la validacion que nosotros le indiquemos y si todo funciona bien va a ejecutar una función de onSubmit que nosotros le pasemos como propiedad a UserForm 
        return(
            <form onSubmit={handleSubmit}> 
                <Field name="name" component={CustomInput} placeholder="Nombre" title="Nombre"/>
                <Field name="lastname" component={CustomInput} placeholder="Apellido" title="Apellido"/>
                <input type="submit" value= "Enviar" />
            </form>
        )
    }
}

export default reduxForm ({
    form: 'user',
    validate,
})(UserForm)