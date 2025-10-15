import React, { useEffect, useState } from "react";
import axios from "axios";
import Hello from "./components/Hello";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL || "http://localhost:5000"}/api/users`)
     .then((res) => setUsers(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo Full Project</h1>
      <Hello />
      <h2>Users ({users.length})</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name} ({u.email}) - {u.city}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
