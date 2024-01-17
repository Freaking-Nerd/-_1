import React, { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Создан новый пост:", { title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Создать пост</h2>
      <label>
        Заголовок:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Текст:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <br />
      <button type="submit">Создать пост</button>
    </form>
  );
};

export default CreatePostForm;