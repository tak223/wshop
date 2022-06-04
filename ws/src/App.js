import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeCart from "./component/RecipeCart";
import { useEffect, useState } from "react";
import axios from "axios";
import ListRecipe from "./component/ListRecipe";
import { Search } from "./component/Search";
import { useDispatch } from "react-redux";
import { getrecipe } from "./redux/actions";
import { Route, Routes } from "react-router-dom";
import Details from "./component/Details";

function App() {
  const [query, setquery] = useState('chiken')
  const [recipes, setrecipes] = useState([]);
  const [loading, setloading] = useState(true);
  const dispatch =useDispatch();
  useEffect(() => {
    // const getAllRecipes = async () => {
    //   try {
    //     // const res = await axios.get(
    //     //   `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=c7081841&app_key=%20854d3b8c6808b4d74535e9a1cd5844d4%09`
            
    //     //   );
    //     //   setrecipes(res.data.hits)
    //     //   setloading(false)
    //     //   console.log(res)
    //   } catch (error) {}
    
    // };

    // getAllRecipes();

    dispatch(getrecipe(query));
    
  }, [query]);
  
 const handleSubmit=(search)=>{
  setquery(search)
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div><Search handleSubmit={handleSubmit}/>
      <ListRecipe recipes={recipes} /></div>}/>
      <Route path="/details/:id" element={<Details/>}/>
      </Routes>

    </div>
  );
}

export default App;
