import {Dispatch} from "redux";
import {POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, PokemonDispatchTypes} from "./pokemonActionType";
import PokemonApi from "../../config/api";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING
        })
        const response = await PokemonApi.get(`/pokemon/${pokemon}`)
        dispatch({type: POKEMON_SUCCESS, payload: response.data})
    } catch (err) {
        dispatch({
            type: POKEMON_FAIL
        })
    }
}