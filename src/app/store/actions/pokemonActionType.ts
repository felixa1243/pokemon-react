export const POKEMON_LOADING = "POKEMON_LOADING"
export const POKEMON_FAIL = "POKEMON_FAIL"
export const POKEMON_SUCCESS = "POKEMON_SUCCESS"
export type PokemonType = {
    abilities: PokemonAbility[],
    sprites: PokemonSprites,
    stats: PokemonStats[],
    forms:Array<any>
}
export type PokemonAbility = {
    ability: {
        name: string,
        url: string
    }
}
export type PokemonSprites = {
    front_default: string
}
export type PokemonStats = {
    base_stat: number,
    stat: {
        name: string
    }
}

export interface PokemonLoading {
    type: typeof POKEMON_LOADING
}

export interface PokemonFail {
    type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: {
        abilities: PokemonAbility[],
        sprites: PokemonSprites,
        stats: PokemonStats[]
    }
}

export  type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess