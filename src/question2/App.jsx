// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)));
  }, []);

  const handlePostClick = (id) => {
    console.log("Post ID:", id);
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <button onClick={() => handlePostClick(post.id)}>
            {post.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;