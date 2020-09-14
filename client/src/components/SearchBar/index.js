// import React from 'react';
// import './style.css';

// const SearchBar = () => {
//     return (
//         <div class="col pt-2">
//             <div class="form-group">
//                 <input type="text" class="form-control mt-1" id="search-bar" placeholder="Search for a drink or shop..." ></input>
//             </div>
//         </div>
//     )
// }

// export default SearchBar;

import React from "react";
import './style.css';

function SearchBar(props){


// import SearchResult from '../SearchResult'

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     // alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//     // searchEntry(this.state.value);
//     const data = {
//       name: this.state.value
//     }
    
//     this.props.searchEntry(data);
//     // console.log(data)
//   }

  
    return (
      
        <form >
          <label>
            <input type="text" 
            onChange = {props.handleInputChange}
            value={props.search} 
            class="form-control mt-1" id="search-bar" placeholder="Search for a drink or shop..." />
          </label>
          <input type="submit" value="Submit" />
        </form>
     
    );
    }

export default SearchBar;