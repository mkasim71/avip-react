import { useState, useEffect } from "react";

function UserList() {
  const [posts, setPosts] = useState([]);

  //hanya dijalankan sekali saat komponen pertama kali muncul
  useEffect(() => {
    console.log("Mengambil data pengguna...");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []); // [] = hanya sekali

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Post:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
