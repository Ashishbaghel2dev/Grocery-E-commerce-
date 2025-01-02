import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/user/register";

    try {
      const response = await axios.post(url, {
        fullname,
        email,
        phone,
        address,
        password,
      });
      setSuccess("User registered successfully!");
      setError(null);
      toast.success(response.data.message); // Success toast notification
      setFullname("")
      setEmail("")
      setAddress("")
      setPassword("")
      setPhone("")
    } catch (error) {
      console.error("Error registering user:", error);
      const errorMessage = error.response?.data?.message || "Failed to register user";
      toast.error(errorMessage); // Error toast notification
      setError(errorMessage);
      setSuccess(null);
    }
  };

  return (
    <main className="admin-main">
      <div className="blur py-1">
        <section className="admin-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 py-1">
                <p>
                  Home <i className="fa-solid fa-angles-right"></i> Sign Up
                </p>
              </div>
            </div>
          </div>
          <div className="signin">
            <div className="content">
              <form className="form" onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                  />
                  <i>Full Name</i>
                </div>
                <div className="inputBox">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <i>Email</i>
                </div>
                <div className="inputBox">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <i>Phone</i>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <i>Address</i>
                </div>
                <div className="inputBox">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <i>Password</i>
                </div>

                <div className="links">
                  <Link to="#">Forgot Password</Link>
                </div>
              
                <div className="inputBox">
                  <input type="submit" value="Sign up" />
                </div>
              </form>
              <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
              <div className="links">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Signup;
