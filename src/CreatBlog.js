const CreatBlog = () => {
  return (
    <div className="create-blog content">
      <form action="/blogs" method="POST">
        <lable for="title">Blog Title:</lable>
        <input type="text" id="title" name="title" required />
        <lable for="snippet">Blog Snippet:</lable>
        <input type="text" id="snippet" name="snippet" required />
        <label for="body">Blog Body:</label>
        <textarea name="body" id="body" cols="30" rows="10" required></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatBlog;
