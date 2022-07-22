const initialState={
    razas:[],
    raza:[],
    temperaments:[],
    exitoAndError:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_RAZAS":
            return{
                ...state,
                razas: action.payload,
                exitoAndError:[
                    {exito: "Lista de razas obtenidas",
                    paginaPeticion: action.paginaPeticion}
                ]
            }
        case "GET_RAZA":
            return{
                ...state,
                raza: action.payload,
                exitoAndError:[
                    {exito: "Raza encontrada",
                    paginaPeticion: action.paginaPeticion}
                ]
            }
        case "GET_TEMPERAMENTOS":
            return{
                ...state,
                temperaments: action.payload,
                exitoAndError:[
                    {exito: "Lista de temperamentos obtenida",
                    paginaPeticion: action.paginaPeticion}
                ]
            }
        case "POST_RAZA":
            state.razas.push(action.payload);
            return {
                ...state,
                razas: state.razas,
                exitoAndError:[
                    {exito: "Se creo con éxito una nueva raza",
                    paginaPeticion: action.paginaPeticion}
                ]
            }
        case "ADD_ERROR":
            return {
                ...state,
                exitoAndError: action.payload
            }
        default:
            return state
    }
}

export default rootReducer