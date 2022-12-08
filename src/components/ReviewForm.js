import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const [value, setValue] = useState({
    title: "",
    rating: 0,
    content: "",
  });
  /*const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleRatingChange = (e) => {
    const nextRating = Number(e.target.value);
    setRating(nextRating);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  }; */

  const handleChange = (e) => {
    const [name, value] = e.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, rating, content });
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} />
      <input type="number" value={rating} onChange={handleChange} />
      <textarea value={content} onChange={handleChange} />
      <button type="submit">확인</button>
    </form>
  );
}

export default ReviewForm;
