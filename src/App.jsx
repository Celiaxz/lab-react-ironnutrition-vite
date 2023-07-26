import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row } from "antd";
import FoodSearch from "./components/FoodSearch";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);
  //delete food
  const deleteFood = (id) => {
    const newFood = foods.filter((food) => food.id !== id);
    setFoods(newFood);
    setFilteredFoods(newFood);
  };

  //add new food
  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
    setFilteredFoods([...foods, newFood]);
  };

  // search food
  const searchFood = (search) => {
    const filteredItems = foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(filteredItems); // update
  };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAdd={addFood} />
      <FoodSearch onSearch={searchFood} />
      <Row gutter={[15, 15]}>
        {filteredFoods.map((oneFood) => (
          <FoodBox
            key={oneFood.id}
            food={oneFood}
            clickDeleteButton={deleteFood}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
