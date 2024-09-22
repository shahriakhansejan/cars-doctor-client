import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
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
        <h1 className="text-5xl font-bold text-[#444444] text-center">
          Sign Up Now!
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="font-semibold text-lg rounded border text-white bg-[#FF3811] px-3 py-2 hover:bg-[#ce2b0a]">
              Sign Up
            </button>
          </div>
        </form>
        <p className="font-medium ml-8">
          Already have an Account? Please{" "}
          <Link className="font-bold text-orange-600" to="/log-in">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
