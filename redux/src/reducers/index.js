// modulo/accion
const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEAR = 'CONTADOR/SETEAR'

export const incrementar = () => ({
    type: INCREMENTAR
})
export const decrementar = () => ({
    type: DECREMENTAR
})
// Setear recibe un payload por que de esta manera nos aseguramos que los datos que vienen adjuntos en las accio nes q despachamos van a ser de payload
export const setear = payload => ({
    type: SETEAR,
    payload,
})


// Los reducers por lo general son una funcion que reciben dos argumentos.. el primeo es el estado, pero si q la aplicación se ejecuta por primea vez tiene que recibir un estado inicial y a su vez recibe una accion
const initialState = 0;

// Tdos nuestros reducers tienen que retornar estados inmutables 
export default function (state = initialState, action){ //La accion son los objetos que se encuentran dentro de las const osea los types 
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        case SETEAR:
            return action.payload    
        default:
            return state
    }
}
