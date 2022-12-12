function FileInput() {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(nextValue);
  };

  return <input type="file" onChange={handleChange} />;
}

export default FileInput;
