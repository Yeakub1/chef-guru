import React from "react";
import { Link } from "react-router-dom";

const Registerion = () => {
  return (
    <div>
      <section className="" style={{ backgroundColor: " #F6DDCC" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign Up</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="form-control form-control-lg"
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="text"
                      name="text"
                      required
                      className="form-control form-control-lg"
                      placeholder="Your Photo Url"
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {"  "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Registration
                  </button>
                  <hr className="my-4" />
                  {/* <button
                      className="btn btn-lg btn-block btn-primary mb-2 border-0"
                      style={{ backgroundColor: "#dd4b39" }}
                      type="submit"
                    >
                      <i className="fab fa-google me-2" /> Sign in with google
                    </button>
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2 bg-black border-0"
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Sign in with Github
                    </button> */}
                  <p>
                    Have already an account? <Link to="/reg">Login here</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registerion;
