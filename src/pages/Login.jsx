import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex w-screen flex-wrap text-slate-800">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12">
            <img className="w-28" src="/src/assets/icons/adhil-02.png" alt="" />
          </div>
          <div className="my-auto mx-auto flex flex-col justify-center px-6 md:justify-start lg:w-[28rem]">
            <p className="font-Sans text-primary text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
              Welcome back <br />
              to <span className="text-yellow-500">Hackingly</span>
            </p>
            <p className="mt-6 text-center font-medium md:text-left">
              Sign in to your account below.
            </p>

            <form className="flex flex-col items-stretch pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="mb-4 flex flex-col pt-4">
                <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                  <input
                    name="password"
                    type="password"
                    id="login-password"
                    className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                  />
                </div>
              </div>

              <button
                 
                type="submit"
                className="bg-primary hover:bg-black w-full text-white p-2 rounded-md"
              >
                Sign in
              </button>
            </form>
            <div className="py-6 text-center">
              <p className="text-gray-600">
                Don't have an account?
                <button 
                 onClick={() => navigate("/register")}
                 className="whitespace-nowrap font-semibold text-gray-900 underline underline-offset-4 hover:text-blue-500">
                  Sign up.
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden h-screen select-non bg-primary bg-gradient-to-br md:block md:w-1/2">
          <div className="mt-16 px-8 text-white xl:w-[40rem]">
            <p className="my-6 text-3xl font-semibold leading-10">
              Connecting you to your dream career Empowering Minds with
              Technology - Dive into the Hackathon Revolution at Hackingly! Your
              Gateway to Innovation and Excitement
              <span className="abg-white whitespace-nowrap py-2 ml-2 text-yellow-500">
                We'll achieve greatness.
              </span>
            </p>
          </div>
          <div className="flex justify-center mt-8">
            {/* <img
              className="ml-8 w-11/12 max-w-lg rounded-lg"
              src="/assets/img/workerLogin.png"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
