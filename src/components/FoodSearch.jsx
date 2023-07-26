import { Input } from "antd";

function FoodSearch({ onSearch }) {
  const handleSearch = (event) => {
    const search = event.target.value;
    onSearch(search);
  };

  return (
    <div>
      <Input
        placeholder="Enter search query"
        onChange={handleSearch}
        style={{ width: 300, marginBottom: 20 }}
      />
    </div>
  );
}

export default FoodSearch;
