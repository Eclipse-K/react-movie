import { useState } from "react";
import { getReviews } from "../api";
import ReviewList from "./ReviewList";

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState();
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("rating");

  const handleDeleteClick = () => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList item={sortedItems} onDelete={handleDeleteClick} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
