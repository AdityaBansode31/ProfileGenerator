import { Link } from "react-router-dom"

export default function Register() {
    return (
        <>
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col-12 col-sm-auto col-sm-6 m-auto">
          <div className="card">
            <div className="card-body">
              <div className="card-header bg-white">
                <h1 className="text-center">Register Form</h1>
              </div>
              <form>
                <div className="row mt-4 pt-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      aria-label="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      aria-label="Last Name"
                    />
                  </div>
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control mt-4"
                    placeholder="Email"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                {/* Submit button */}
                <div className="d-grid gap-2 mx-auto mb-4">
                  <button type="button" className="btn btn-primary">
                    Sign up
                  </button>
                </div>

                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Already a member? <Link to='/login'>Login</Link>
                  </p>
                  <p>or sign in with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


        </>
    );
}
