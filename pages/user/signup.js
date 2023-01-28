import React, { useState } from "react";
import Link from "next/link";
import { UserAuth } from "@/context/Auth.context";
import style from "@/styles/User.module.css";
import { useRouter } from "next/router";

function UeseSignUP() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { user, signUp, signWithGoogle } = UserAuth({});

  const googleSignInHandler = async () => {
    try {
      await signWithGoogle();
      router.push("/user/login");
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      router.push("/user/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.signup}>
      <div className={style.login_box}>
        <div className={style.login_box_content}>
          <div>
            {/* logo login form  */}
            <div className="w-1/3 text-center flex justify-center mb-4">
              <i className="ri-clapperboard-fill text-color-red text-[35px]"></i>
              <h1>
                <span className=" font-bold text-[35px] text-color-red">C</span>
                arbon
              </h1>
              <h1>
                <span className=" font-bold text-[35px] text-color-red">F</span>
                ilm
              </h1>
            </div>

            {/* google sign in btn  */}
            <button className={style.loginBtn}>
              Sign up with google{" "}
              <i className="ri-google-fill text-color-red"></i>
            </button>

            <h4 className={style.separator}>or</h4>

            {/* sign in with form  */}
            <form onSubmit={submitHandler}>
              <input
                type="email"
                placeholder="Email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type={show ? "type" : "password"}
                placeholder="Password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <i
                className={`${
                  show ? "ri-eye-off-line" : "ri-eye-fill"
                } absolute text-color-black text-xl top-[76px] right-3 cursor-pointer`}
                onClick={() => setShow(!show)}
              ></i>
              <button type="submit" className={style.loginBtn}>
                SignUp
              </button>
              <Link
                href="/user/login"
                className="flex justify-center gap-2 mt-2 transition-all hover:text-color-red"
              >
                Do have an account?<i className="ri-edit-box-line"></i>
              </Link>
            </form>
          </div>
          <Link href="/" className="flex justify-center gap-2">
            Back to Home <i className="ri-reply-line"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UeseSignUP;
