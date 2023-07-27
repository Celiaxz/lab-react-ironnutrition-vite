import React, { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import FoodSearch from "./FoodSearch";
import AddFoodForm from "./AddFoodForm";
import { Row } from "antd";

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [filteredFoods, setFilteredFoods] = useState(foodsJson);

  // Delete food
  const deleteFood = (id) => {
    const newFood = foods.filter((food) => food.id !== id);
    setFoods(newFood);
    setFilteredFoods(newFood);
  };

  // Add new food
  const addFood = (newFood) => {
    setFoods([...foods, newFood]);
    setFilteredFoods([...foods, newFood]);
  };

  // Search food
  const searchFood = (search) => {
    const filteredItems = foods.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(filteredItems);
  };

  return (
    <div>
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

export default FoodList;
