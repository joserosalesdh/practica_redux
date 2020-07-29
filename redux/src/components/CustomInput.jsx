import React, { Component } from 'react';

export default class CustomInput extends Component {
    render() {
        const { input, meta, title,...props } = this.props // ...props mean y todas las otras propiedades que se le esten pasando a este componente
        console.log(meta)
        return (
           <div>
               {title && <span>{title}</span>}
               <input {...input} {...props} />
            {meta.submitFaild && meta.error && <span>{meta.error}</span>}
           </div> 
        )
    }
}