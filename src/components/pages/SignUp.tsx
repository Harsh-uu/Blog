import { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

import { VscEye, VscEyeClosed } from "react-icons/vsc";
import supabase from "../../utils";
import { quotes } from "../../quotes";

export default function SignUp() {
  const [randomQuote, setRandomQuote] = useState<
    (typeof quotes)[number] | null
  >(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [focus, setFocus] = useState(false);
  async function googleLogin() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signUpNewUser() {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:3000",
      },
    });
    if (!data && error) {
      console.log(error);
    }
    setLoading(false);
    alert("Account created successfully! Please check your mail to continue.");
    if (data) {
      navigate("/login");
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
      <div className=" bg-[#18181b] w-full border-r-2 max-w-90 border-[#27272a] overflow-hidden h-full p-10 flex flex-col justify-between">
        <Link
          className="font-bold text-3xl font-lakki w-fit hover:animate-pulse"
          to="/"
        >
          Blogology.
        </Link>
        <div>
          {randomQuote && (
            <>
              <p className="text-white text-lg font-medium font-poly">
                {randomQuote.quote}
              </p>
              <p className="text-[0.8rem] mt-4 tracking-widest uppercase font-medium">
                {randomQuote.speaker}
              </p>
            </>
          )}
        </div>
      </div>
      <Link
        to="/login"
        className="absolute top-10 right-20 hover:bg-[#27272a] px-3 py-1 rounded-md font-semibold"
      >
        Login
      </Link>
      <div className="w-full grid items-center place-content-center">
        <div className="text-white bg-[#09090b] min-w-[19rem] text-center">
          <h1 className="text-3xl font-semibold pb-3 ">Create an account</h1>
          <p className="text-[#a1a1aa] text-sm">
            Enter the details below to create your account
          </p>
          <div className="flex flex-col gap-3 pt-6 pb-4">
            <input
              type="text"
              placeholder="Email"
              className="px-6 placeholder:text-[#a1a1aa] bg-[#09090b] border-2 border-[#27272a] rounded-md py-2 "
              value={email}
              onChange={handleEmailChange}
            />
            <form
              className={`flex px-6 justify-between bg-[#09090b] rounded-lg py-2 items-center group border-2 ${
                focus ? "border-white" : "border-[#27272a]"
              } `}
            >
              <input
                type={showPassword ? "text" : "password"}
                className="placeholder:text-[#a1a1aa] outline-none bg-[#09090b] min-w-[86%]"
                placeholder="Password"
                value={password}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handlePasswordChange}
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
            </form>
            <button
              onClick={signUpNewUser}
              type="submit"
              className={`bg-white hover:bg-[#e2e2e2] w-full py-2 rounded-md text-black font-semibold ${
                !email || !password ? "cursor-not-allowed" : ""
              } `}
              disabled={!email || !password || isLoading}
            >
              {isLoading ? <FiLoader className="animate-spin" /> : "Sign Up"}
            </button>

            {/* //login error message
                      {loginError !== "" && (
                        <div className="text-red-500 text-[0.9rem]">
                          {loginError}
                        </div>
                      )} */}

            {/* show info msg
                      {infoMsg !== "" && (
                        <div className="text-green-500 text-[0.9rem]">
                          {infoMsg}
                        </div>
                      )} */}
          </div>

          <div className=" relative my-6 border-b border-white  flex flex-row justify-between">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-main pb-1.5  text-[#a1a1aa] text-xs">
              OR CONTINUE WITH
            </p>
          </div>

          <button
            disabled={isLoading}
            onClick={googleLogin}
            className="bg-main disabled:bg-black/35 hover:bg-[#27272a] w-full py-2 text-white font-semibold border-2 border-[#27272a] rounded-md flex justify-center items-center"
          >
            <FaGoogle />
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from 'react'
// import { Session, createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

// const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null)

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setSession(session)
//     })

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   if (!session) {
//     return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
//   }
//   else {
//     return (<div>Logged in!</div>)
//   }
// }
