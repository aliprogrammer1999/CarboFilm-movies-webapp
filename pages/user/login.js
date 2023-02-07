import React, { useState } from "react";
import style from "@/styles/User.module.css";
import Link from "next/link";
import { UserAuth } from "@/context/Auth.context";
import { useRouter } from "next/router";

function UserLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { user, login, signWithGoogle } = UserAuth({});

  const googleSignInHandler = async () => {
    try {
      router.push("/");
      await signWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      router.push("/");
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.login}>
      <div className={style.login_box}>
        <div className={style.login_box_content}>
          <div>
            {/* logo login form  */}
            <div className="w-1/3 text-center flex items-center justify-center">
              <i className="ri-clapperboard-fill text-color-red text-[40px]"></i>
              <h1 className={style.logo_h1}>
                <span>C</span>
                arbon
              </h1>
              <h1 className={style.logo_h1}>
                <span>F</span>
                ilm
              </h1>
            </div>

            {/* google sign in btn  */}
            <button className={style.loginBtn} onClick={googleSignInHandler}>
              Continue with google{" "}
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
                Login <i className="ri-login-circle-line"></i>
              </button>
              <Link
                href="/user/signup"
                className="flex justify-center gap-2 mt-2 transition-all hover:text-color-red"
              >
                Do not have an account?<i className="ri-edit-box-line"></i>
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

export default UserLogin;
