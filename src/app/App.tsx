import {Route, Routes} from "react-router-dom";
import SearchPokemon from "./page/SearchPokemon/Index";

function App() {
    return (
        <div style={
            {
                width:'100%'
            }
        }>
            <Routes>
                <Route path={'/'} element={<SearchPokemon/>}/>
            </Routes>
        </div>
    )
}

export default App
