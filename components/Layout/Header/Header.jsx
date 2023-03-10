/* eslint-disable jsx-a11y/alt-text */
// dependency
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

// user Data
import { UserAuth } from "@/context/Auth.context";

// style css
import style from "./header.module.css";

function Header() {
  const router = useRouter();
  const [openDrop, setOpenDrop] = useState(false); //login and logout btn show
  const [showNavbar, setShowNavbar] = useState(false); //mobile show navbar

  const { user, logOut } = UserAuth({}); //use data from firebase

  // header effect style
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  // google logout function
  const LogOutHandler = async () => {
    try {
      await logOut();
      toast.error("LogOut !!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "dark",
      });
      router.reload(window.location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  // page and link info
  const navLink = [
    { href: "/", title: "Home", icon: "ri-home-4-fill" },
    { href: "/movies", title: "Movie", icon: "ri-movie-2-fill" },
    { href: "/tv", title: "Tv", icon: "ri-tv-fill" },
    { href: "/search", title: "Search", icon: "ri-search-2-line" },
  ];

  return (
    <header
      className={
        scrollDirection === "down" ? style.showHeader : style.Headercss
      }
    >
      <div className={`w-[95%] flex justify-between `}>
        {/* Nav Bar Link   */}
        <div className="flex items-center w-1/3 py-1 gap-4 relative lg:static">
          <button
            className="lg:hidden bg-color-black px-2 pt-[1px] rounded border-color-black border transition-all hover:bg-color-black hover:border hover:border-gray-400"
            onClick={() => {
              setShowNavbar(true);
            }}
          >
            <i className="ri-menu-line text-2xl font-bold"></i>
          </button>

          <div
            className={`transition-all duration-500 p-3 ${style.headerMobile} ${
              showNavbar ? style.activeNavbar : style.closeNavbar
            } flex`}
          >
            <i
              className="ri-close-fill absolute top-4 right-5 text-2xl cursor-pointer lg:hidden"
              onClick={() => setShowNavbar(false)}
            ></i>

            {/* Link to page  */}
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-1 ${
                  router.pathname == item.href
                    ? style.activeLink
                    : style.header_link
                }`}
              >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            ))}

            {/* respansive Account */}
            <div className="md:hidden flex items-center text-sm flex-col p-3 bg-color-gray w-full rounded-md h-[200px]">
              {user?.photoURL == null ? (
                <i className="ri-user-3-fill w-[40px] h-[40px] bg-color-gray rounded-full flex justify-center items-center text-2xl"></i>
              ) : (
                <Image
                  src={user.photoURL}
                  className="h-20 w-20 rounded-full"
                  alt="user Image"
                  width={50}
                  height={50}
                />
              )}

              <h2 className="text-2xl text-white my-3">
                <span>
                  {user?.email ? (
                    user.displayName
                  ) : (
                    <Link href="/user/login">Login/singup</Link>
                  )}
                </span>
              </h2>

              {/* ------------------------------ */}
              <div className="flex justify-center gap-5">
                <Link
                  className="flex items-center bg-color-black p-2 text-white gap-2 rounded-sm"
                  href="/watchlist"
                >
                  <i className="ri-archive-line text-sm"></i>
                  Watch List +
                </Link>
                <button
                  className="flex items-center bg-color-black p-2 text-white gap-2 rounded-sm"
                  onClick={LogOutHandler}
                >
                  <i className="ri-logout-circle-r-line text-sm"></i>
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logo  */}
        <Link
          href="/"
          className="w-1/3 text-center flex items-center justify-center"
        >
          <i className="ri-clapperboard-fill text-color-red text-[40px]"></i>
          <h1 className={style.logo_h1}>
            <span>C</span>
            arbon
          </h1>
          <h1 className={style.logo_h1}>
            <span>F</span>
            ilm
          </h1>
        </Link>

        {/* Account  */}
        <div className="w-1/3 flex justify-end items-center gap-2">
          {user?.email ? (
            <div className="flex justify-center items-center relative">
              <div
                className="flex items-center z-50 gap-3 bg-color-black p-[2px] rounded-full cursor-pointer"
                onClick={() => {
                  setOpenDrop(!openDrop);
                }}
              >
                {/* user Watch List badage  */}
                <div className="items-center gap-2 hidden md:flex pl-3">
                  <span>{user.displayName}</span>
                </div>

                {/* user Image */}
                {user?.photoURL == null ? (
                  <i className="ri-user-3-fill w-[40px] h-[40px] bg-color-gray rounded-full flex justify-center items-center text-2xl"></i>
                ) : (
                  <Image
                    src={user.photoURL}
                    className={style.uesrImg}
                    alt="user Image"
                    width={20}
                    height={20}
                  />
                )}
              </div>

              {/* singOut / singIn and watch list box  */}
              <div
                className={style.accountDrop}
                style={
                  openDrop
                    ? {
                        height: "112px",
                        padding: ".5rem .7rem",
                        fontWeight: "900",
                      }
                    : { height: 0, padding: 0 }
                }
              >
                {/* ------------------------------ */}
                <Link
                  className="flex items-center justify-center py-1 gap-1 bg-color-gray w-full rounded-md "
                  href="/watchlist"
                >
                  {/* ------------------------ */}
                  <i className="ri-archive-line text-lg"></i>
                  Watch List +
                </Link>
                <button
                  className="flex items-center justify-center py-1 gap-1 bg-color-gray w-full rounded-md"
                  onClick={LogOutHandler}
                >
                  <i className="ri-logout-circle-r-line text-lg"></i>
                  LogOut
                </button>
              </div>
            </div>
          ) : (
            // if user singOut show this section -------------------
            <Link href="/user/login" className=" hidden md:flex">
              <div
                className={`flex items-center z-50 gap-3 bg-color-gray p-[1px] pl-4 rounded-full cursor-pointer transition-all  ${style.accBtn}`}
              >
                <div>SignUp / Login</div>
                <i className="ri-user-3-fill w-[40px] h-[40px] bg-color-black rounded-full flex justify-center items-center text-2xl"></i>{" "}
              </div>
            </Link>
          )}
        </div>
      </div>
      <ToastContainer />
    </header>
  );
}

export default Header;
