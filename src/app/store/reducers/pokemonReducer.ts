import {
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    PokemonDispatchTypes,
    PokemonType
} from "../actions/pokemonActionType";

type DefaultState = {
    loading: boolean,
    pokemon?: PokemonType
}
const defaultState: DefaultState = {
    loading: false
}
const pokemonReducer = (state: DefaultState = defaultState, action: PokemonDispatchTypes): DefaultState => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading: false
            }
        case POKEMON_LOADING:
            return {
                loading: true
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        default:
            return state
    }
}
export default pokemonReducer