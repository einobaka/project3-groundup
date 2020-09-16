import React, { useState, useEffect } from "react";

import API from "../utils/API";


function Drink() {
  // Setting our component's initial state
  const [drink, setDrink] = useState([])
  

  // Load all books and store them with setBooks
  useEffect(() => {
    loadDrink()
  }, [])

  // Loads all books and sets them to books
  function loadDrink() {
    API.getDrinkData()
        
      .then(res => 
        setDrink(res.data)

      )
      .catch(err => console.log(err));
  };

  

    return (
      
          <div>

            
           
                {drink.filter(drink => drink.price > 5).map(drink => (
                  
                 
                    
                    
                    <div>
                        ${drink.price}  {drink.name} 
                        
                    </div>
                    
                    

                ))}
            
            ) 
              </div>
            )
        }
          
    

        



export default Drink;
