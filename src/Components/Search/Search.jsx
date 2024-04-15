
import useDebounce from '../../hooks/useDebounce';
import './Search.css'

function Search({updateSearchTerm}) {
    const debouncedCallback =  useDebounce((e) => updateSearchTerm(e.target.value)) 
    return (
        <div className="search-wrraper">
            <input 
                id='pokemon-name-search'
                type="text"
                placeholder="pokemon Name....."
                onChange={debouncedCallback}
            />
            
        </div>

    )
}

export default Search;