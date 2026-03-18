

export default function Search({ search , setSearch ,handleSearch}){

    return(<div className="search_engine">
         {/* <div>Search</div>  */}
         {/* 7870098992 */}
           <input type="text"
             
             placeholder="Enter city name"
             name="search"
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             />
             <button onClick={handleSearch} > Search City </button>
        </div>)
} 
