import { useState } from "react";
import { createReviews } from "../api";
import FileInput from "./FileInput";
import RatingInput from "./RatingInput";
import "./ReviewForm.css";

const INITIAL_VALUES = {
  title: "",
  rating: 0,
  content: "",
  imgFile: null,
};

function ReviewForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onCancel,
  onSubmitSuccess,
}) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
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

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title, values.title");
    formData.append("rating, values.rating");
    formData.append("content, values.content");
    formData.append("imgFile, values.imgFile");

    let result;
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      result = await createReviews(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }

    const { review } = result;
    setValues(INITIAL_VALUES);
    onSubmitSuccess(review);
  };

  return (
    <form className="ReviewForm" onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        initialPreview={initialPreview}
        onChange={handleChange}
      />
      <input name="title" value={values.title} onChange={handleInputChange} />
      <input
        type="number"
        name="rating"
        value={values.rating}
        onChange={handleInputChange}
      />
      <RatingInput
        name="rating"
        value={values.rating}
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit" disabled={isSubmitting}>
        확인
      </button>
      {submittingError && <div>{submittingError.message}</div>}
    </form>
  );
}

export default ReviewForm;
