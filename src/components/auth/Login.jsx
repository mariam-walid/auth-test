import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const userData = new FormData();
    userData.append("email", email);
    userData.append("password", password);

    try {
      const response = await axios.post(
        "https://wearher-from-mimi.com/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      console.log(response)

      if (response.status == 200 ){
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="main">
      
      <div className="formContainer">
      <h1>Login</h1> 
        <form onSubmit={login}>

          <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
