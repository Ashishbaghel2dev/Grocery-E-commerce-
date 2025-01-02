import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authslice.js"; // Update with your actual path

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/api/user/login";

    try {
      const response = await axios.post(url, { email, password });
      dispatch(setUser(response.data)); // Set user data in Redux
      toast.success(response.data.message);
      console.log(response.data);
      const jsondata = JSON.stringify(response.data);
      localStorage.setItem("authuser", jsondata);
    
      navigate("/admin/dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to log in";
      toast.error(errorMessage);
    }
  };

  return (
    <main>
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
      <section className="login-poster">
        <div className="container-fluid blur py-5">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 py-3">
                  <p>
                    Home <i className="fa-solid fa-angles-right"></i> User Login
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="login-main-container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 py-5 order-lg-2">
                <div className="login-container">
                  <p className="admin-link">
                    <Link to="/admin">
                      <i className="fa-solid fa-user-tie"></i> Admin Login
                    </Link>
                  </p>
                  <h1 className="my-4 mt-4 text-g">Grosfit</h1>
                  <p className="m-0">
                    Exceptional Grocery Stores and Delivery Services
                  </p>
                  <p className="m-0">Quality, Speed, and Convenience</p>
                  <div className="col-lg-6 my-4">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Enter your Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        <input
                          type="password"
                          placeholder="Enter your Password"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                        <button type="submit" className="btn-login mt-3">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="my-2">
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="login-side-poster">
                  <h1 className="my-4 mt-4 text-g">Grosfit</h1>
                  <h4>From Store to Door Fast Delivery with Grosfit!</h4>
                  <p>
                    Rated 5 🌟 stars for speed, quality, and customer
                    satisfaction in grocery delivery.
                  </p>
                  <div className="review-emojis">
                    <div>
                      <span>😁</span>
                      <div className="label">Best</div>
                    </div>
                    <div>
                      <span>🙂</span>
                      <div className="label">Good</div>
                    </div>
                    <div>
                      <span>😐</span>
                      <div className="label">Neutral</div>
                    </div>
                    <div>
                      <span>🙁</span>
                      <div className="label">Poor</div>
                    </div>
                    <div>
                      <span>😠</span>
                      <div className="label">Worst</div>
                    </div>
                  </div>
                  <Link to="#">Review Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
