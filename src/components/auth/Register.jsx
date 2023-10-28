import axios from "axios";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault();
    const userData = new FormData();
    userData.append("first_name", firstName);
    userData.append("last_name", lastName);
    userData.append("email", email);
    userData.append("phone", phone);
    userData.append("password", password);
    userData.append("password_confirmation", confirmPassword);

    try {
      const response = await axios.post(
        "https://wearher-from-mimi.com/api/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      const resData = await response.data
      console.log(response)

      if (response.status === 201 ){
        localStorage.setItem('userToken', resData.data.Token)
      navigate('/login')
      }
      
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="formContainer"> 
      <h1>Registration</h1>
        <form onSubmit={register}>
          <div className="inputContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          </div>

          <div className="inputContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          </div>

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
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          <div className="inputContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>

    //   <div className='main'>
    //   <div className='register'>
    //     <h5>Create an account</h5>
    //     <form onSubmit={register}>
    //     <div className='inputContainer'>
    //         <label htmlFor="firstName">First Name</label>
    //         <input
    //           id="firstName"
    //           type="text"
    //           value={firstName}
    //           onChange={(e) => setfirstName(e.target.value)}
    //         />
    //         {firstName === "" && accept && (
    //           <p className='error'>FirstName is required</p>
    //         )}
    //       </div>
    //       <div className='inputContainer'>
    //         <label htmlFor="lastName">Last Name</label>
    //         <input
    //           id="lastName"
    //           type="text"
    //           value={lastName}
    //           onChange={(e) => setlastName(e.target.value)}
    //         />
    //         {lastName === "" && accept && (
    //           <p className='error'>LastName is required</p>
    //         )}
    //       </div>
    //       <div className='inputContainer'>
    //         <label htmlFor="email">EMAIL</label>
    //         <input
    //           id="email"
    //           type="email"
    //           required
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         {userExist && <p className='error'>User already exists!</p>}
    //       </div>

    //       <div className='inputContainer'>
    //         <label htmlFor="password">PASSWORD</label>
    //         <input
    //           id="password"
    //           type="password"
    //           required
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <div className='inputContainer'>
    //         <label htmlFor="password">Confirm PASSWORD</label>
    //         <input
    //           id="password"
    //           type="password"
    //           required
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <div className='inputContainer'>
    //         <label htmlFor="age">AGE</label>
    //         <input
    //           id="age"
    //           type="text"
    //           // value={age}
    //           onChange={(e) => setAge(e.target.value)}
    //         />
    //         {age === null && accept && (
    //           <p className='error'>Please enter your age</p>
    //         )}
    //       </div>

    //       <button type="submit">Continue</button>

    //       {/* <Link href="/login">Already have an account?</Link> */}
    //     </form>
    //   </div>
    // </div>
  );
};

export default Register;
