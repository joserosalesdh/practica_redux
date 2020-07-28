// modulo/accion
const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'


// Los reducers por lo general son una funcion que reciben dos argumentos.. el primeo es el estado, pero si q la aplicación se ejecuta por primea vez tiene que recibir un estado inicial y a su vez recibe una accion
const initialState = 0;
export default function (state = initialState, action){
    switch (action.type) {
        case INCREMENTAR:
            return state + 1
        case DECREMENTAR:
            return state - 1
        default:
            return state
    }
}
