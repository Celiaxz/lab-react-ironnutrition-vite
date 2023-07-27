import { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
function AddFoodForm({ onAdd }) {
  const [addNew, setAddNew] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleNewFood = (event) => {
    const { name, value } = event.target;
    setAddNew({ ...addNew, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      id: Date.now().toString(),
      ...addNew,
    };
    onAdd(newFood);
    setAddNew({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={addNew.name}
          onChange={handleNewFood}
        />
      </div>
      <div>
        <label>Image</label>
        <input
          type="text"
          name="image"
          value={addNew.image}
          onChange={handleNewFood}
        />
      </div>
      <div>
        <label>Calories</label>
        <input
          type="number"
          name="calories"
          value={addNew.calories}
          onChange={handleNewFood}
        />
      </div>
      <div>
        <label>Servings</label>
        <input
          type="number"
          name="servings"
          value={addNew.servings}
          onChange={handleNewFood}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}
export default AddFoodForm;

// import { useState } from "react";
// import { Form, Input, Button, Row, Col } from "antd";

// function AddFoodForm({ onAdd }) {
//   const [form] = Form.useForm();

//   const handleSubmit = (values) => {
//     onAdd(values);
//     form.resetFields();
//   };

//   return (
//     <Form form={form} onFinish={handleSubmit} layout="vertical">
//       <Row gutter={[16, 16]}>
//         <Col span={24}>
//           <Form.Item label="Name" name="name" style={{ marginBottom: 16 }}>
//             <Input />
//           </Form.Item>
//         </Col>
//         <Col span={24}>
//           <Form.Item label="Image" name="image" style={{ marginBottom: 16 }}>
//             <Input />
//           </Form.Item>
//         </Col>
//         <Col span={24}>
//           <Form.Item
//             label="Calories"
//             name="calories"
//             style={{ marginBottom: 16 }}
//           >
//             <Input type="number" />
//           </Form.Item>
//         </Col>
//         <Col span={24}>
//           <Form.Item
//             label="Servings"
//             name="servings"
//             style={{ marginBottom: 16 }}
//           >
//             <Input type="number" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <Row>
//         <Col span={24}>
//           <Button type="primary" htmlType="submit">
//             Create
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   );
// }

// export default AddFoodForm;
