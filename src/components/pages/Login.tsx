import { useState, FormEvent, MouseEvent, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import supabase from "../../utils";
import { quotes } from "../../quotes";

export default function Login() {
  const [randomQuote, setRandomQuote] = useState<
    (typeof quotes)[number] | null
  >(null);
  const location = useLocation();
  // const accountCreated = location.state?.accountCreated;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [focus, setFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function googleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signInWithEmail() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    }
    if (data) {
      console.log(data);
      navigate("/");
    }
  }
  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/");
    });
  }, []);
  return (
    <div className="bg-[#09090b] h-screen flex text-white justify-evenly">
      <div className=" bg-[#18181b] w-full border-r-2 border-[#27272a] overflow-hidden h-full p-10 flex flex-col justify-between">
        <Link
          className="font-bold text-3xl font-lakki w-fit hover:animate-pulse"
          to="/"
        >
          Blogology.
        </Link>
        <div>
          <p className="text-white text-lg font-medium font-poly">
            {randomQuote?.quote}
          </p>
          <p className="text-[0.8rem] mt-4 tracking-widest uppercase font-medium">
            {randomQuote?.speaker}
          </p>
        </div>
      </div>
      <Link
        to="/signup"
        className="absolute top-10 right-20 hover:bg-[#27272a] px-3 py-1 rounded-md font-semibold"
      >
        Sign Up
      </Link>
      <div className="w-full grid items-center place-content-center">
        {errorMessage && (
          <div className="mb-5 text-[#a1a1aa] text-[1rem]">{errorMessage}</div>
        )}
        <div className="text-white bg-[#09090b] min-w-[19rem] text-center">
          <h1 className="text-3xl font-semibold pb-3 ">Welcome Back!</h1>
          <p className="text-[#a1a1aa] text-sm">
            Enter the details below to login to your account
          </p>
          <form className="flex flex-col gap-3 pt-6 pb-4">
            <input
              type="text"
              placeholder="Email"
              className="px-6 placeholder:text-[#a1a1aa] focus:outline-none focus:border-white  bg-[#09090b] border-2 border-[#27272a] rounded-lg py-2 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              className={`flex px-6 focus-within:border-white justify-between bg-[#09090b] rounded-lg py-2 items-center group border-2 border-[#27272a] `}
            >
              <input
                type={showPassword ? "text" : "password"}
                className="placeholder:text-[#a1a1aa] outline-none bg-[#09090b] min-w-[86%]"
                placeholder="Password"
                value={password}
                // onFocus={() => setFocus(true)}
                // onBlur={() => setFocus(false)}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password &&
                (showPassword ? (
                  <VscEyeClosed
                    onClick={() => setShowPassword(!showPassword)}
                    className={`hover:text-[#3cffd0] text-white cursor-pointer`}
                    size={20}
                  />
                ) : (
                  <VscEye
                    onClick={() => setShowPassword(!showPassword)}
                    className={`hover:text-[#3cffd0] text-white cursor-pointer`}
                    size={20}
                  />
                ))}
            </div>
            <button
              onClick={signInWithEmail}
              className={`bg-white hover:bg-[#e2e2e2] w-full py-2 rounded-md text-black font-semibold ${
                !email || !password ? "cursor-not-allowed" : ""
              } `}
              disabled={!email || !password || loading}
            >
              {loading ? "Loading..." : "Continue with email"}
            </button>
          </form>

          <div className=" relative my-6 border-b border-white  flex flex-row justify-between">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-main pb-1.5  text-[#a1a1aa] text-xs">
              OR CONTINUE WITH
            </p>
          </div>

          <button
            onClick={googleLogin}
            className="bg-main hover:bg-[#27272a] w-full py-2 text-white font-semibold border-2 border-[#27272a] rounded-md flex justify-center items-center"
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
}
