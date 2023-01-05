import React, {FunctionComponent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "../../store/store";
import {GetPokemon} from "../../store/actions/pokemonAction";

const SearchPokemon: FunctionComponent = () => {
    const pokemonState = useSelector((state: RootStore) => state.pokemon)
    const dispatch = useDispatch()
    const [pokemonName, setPokemonName] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch<any>(GetPokemon(pokemonName))
    }
    return (
        <form style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }} onSubmit={handleSubmit}>
            <div>
                <input onChange={handleChange} type={"text"} placeholder={'Insert pokemon name here'} style={{
                    padding: '10px'
                }}/>
                <button type={'submit'} style={
                    {
                        height:'40px'
                    }
                }>Search</button>
            </div>
            {pokemonState.pokemon && (<div>
                <p>{pokemonState.pokemon?.forms[0].name}</p>
                {<img src={pokemonState.pokemon?.sprites?.front_default} alt={pokemonState.pokemon?.forms[0].name}/>}
                <table border={1}>
                    <thead>
                    <tr style={{
                        background: '#dedede'
                    }}>
                        {pokemonState.pokemon && <td>abilities</td>}
                    </tr>
                    <tr></tr>
                    </thead>
                    <tbody>
                    {pokemonState.pokemon?.abilities.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.ability.name}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>)}
        </form>
    )
}
export default SearchPokemon