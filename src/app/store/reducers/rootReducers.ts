import {combineReducers} from "redux";
import pokemonReducer from "./pokemonReducer";

const rootReducers = combineReducers({
    pokemon: pokemonReducer
})
export default rootReducers