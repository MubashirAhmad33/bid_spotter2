import searchicon from '../../images/view_lots_pg/search.png'



function Search(){
    return (
        
        <div className="container mb-5">
            
        <div className="search_bar_div d-flex justify-content-center">
            {/* <!-- Search Input Field --> */}
            <form className="d-flex home_page_search_bar">
                <input className="form-control home_page_search_bar_control me-2" type="search"
                    placeholder="Search for lots" aria-label="Search"/>
            </form>
            {/* <!-- Search Icon Image --> */}
            <img className={searchicon} src="images/Vector.png" alt=""/>
        </div>
    </div>
    )
}
export default Search