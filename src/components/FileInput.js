import { useRef } from "react";

function FileInput({ name, value, onChange }) {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return <input type="file" onChange={handleChange} ref={inputRef} />;
} //FileInput은 반드시 비제어 컴포넌트로

export default FileInput;
