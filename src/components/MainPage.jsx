import React from "react";
import PostList from "../components/PostList";
import CreatePostForm from "../components/CreatePostForm";

const MainPage = () => {
  return (
    <div>
      <h1>Главная</h1>
      <CreatePostForm />
      <PostList />
    </div>
  );
};

export default MainPage;
