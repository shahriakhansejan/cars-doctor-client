import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const {logInEmail} = useContext(AuthContext);
  const { logInEmail } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInEmail(email, password)
      .then((result) => {
        // console.log(result.user);
        navigate(location.state? location.state : '/')
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex mx-2 flex-col my-8 items-center md:flex-row justify-between">
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
      <div className="border rounded-lg py-12 flex-1">
        <h1 className="text-5xl font-bold text-[#444444] text-center">Login</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="font-semibold text-lg rounded border text-white bg-[#FF3811] px-3 py-2 hover:bg-[#ce2b0a]">
              Login
            </button>
          </div>
        </form>
        <p className="font-medium ml-8">
          New in Cars-Doctor? Please{" "}
          <Link className="font-bold text-orange-600" to="/sign-up">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
