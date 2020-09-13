import React from "react";
// import "./style.css";

function SearchForm(props) {
    // console.log(props)
    
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="drink"
                    list="drinks"
                    type="text"
                    className="form-control"
                    placeholder="Search for a drink or shop"
                    id="drink"
                />
                <datalist id="drinks">
                    {props.name.map(drink => (
                        <option value={drink.name} key={drink.name}/>
                    ))}
                </datalist>
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;
