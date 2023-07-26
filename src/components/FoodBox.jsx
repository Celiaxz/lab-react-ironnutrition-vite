import { Card, Button, Col, Row } from "antd";
function FoodBox({ food, clickDeleteButton }) {
  const { id, name, calories, image, servings } = food;
  const totalCalories = servings * calories;
  console.log("Image:", image);

  const deleteButton = () => {
    clickDeleteButton(id);
  };
  return (
    <div className="FoodBox">
      <Col xs={24} sm={12} md={8} lg={8} xl={6} style={{ marginBottom: 20 }}>
        <Card title={name} style={{ width: 300, marginBottom: 20 }}>
          <img
            src="https://media.istockphoto.com/id/1158495558/photo/homemade-avocado-toast-with-eggs.jpg?s=612x612&w=0&k=20&c=kWHRACcO9wUrnXmkUeNPrLPbhP4Aw0Ickn_ZZHvQ4Fs="
            alt={name}
            style={{ height: 150 }}
          />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>Total Calories: {totalCalories} kcal</p>
          <Button onClick={deleteButton} type="primary">
            Delete
          </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
