import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Recipedetails from "./components/RecipeDetails";
export default function App() {
  return (
    <div className="bg-purple-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/product/:productid" element={<Product />} />
          <Route
            path="/RecipeDetails/:recipeslist"
            element={<Recipedetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
