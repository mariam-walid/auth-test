import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
const token = localStorage.getItem("userToken")
  
  const createPost = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://wearher-from-mimi.com/api/post-create-image",
        {
            "post_type" : "image",
            "post_category": "scientific",
            "text": text,
            "images": images,
        },
        {
          
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        console.log("Posted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {localStorage.getItem("userToken") ? (
        <div>
          <h1>welcome home</h1>
          <div>
            <h2>Create Image Post</h2>
            <form onSubmit={createPost}>
              <input
                type="text"
                placeholder="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                type="file"
                id="img"
                name="img"
                multiple
                accept="image/*"
                onChange={(e)=> setImages(e.target.files)}
              />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h1> Register to go to home </h1>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
