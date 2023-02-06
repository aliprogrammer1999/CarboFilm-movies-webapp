/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./header.module.css";
import { UserAuth } from "@/context/Auth.context";

function Header() {
  const router = useRouter();
  const [openDrop, setOpenDrop] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const { user, logOut } = UserAuth({});

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

  const LogOutHandler = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const navLink = [
    { href: "/", title: "Home", icon: "ri-home-4-fill" },
    { href: "/movies", title: "Movie", icon: "ri-movie-2-fill" },
    { href: "/tv", title: "Tv", icon: "ri-tv-fill" },
    { href: "/search", title: "Search", icon: "ri-search-2-line" },
  ];

  return (
    <header
      className={scrollDirection ==='down' ? style.showHeader :style.Headercss}
    >
      <div className={`w-[95%] flex justify-between`}>
        {/* Nav link  */}
        <div className="flex items-center w-1/3 py-1 gap-4 relative lg:static">
          <button
            className="lg:hidden bg-color-black px-2 pt-[1px] rounded border-color-black border transition-all hover:bg-color-black hover:border hover:border-gray-400"
            onClick={() => {
              setShowNavbar(true);
            }}
          >
            <i className="ri-menu-line text-2xl font-bold"></i>
          </button>
          {
            <div
              className={`transition-all duration-500 ${style.headerMobile} ${
                showNavbar ? style.activeNavbar : style.closeNavbar
              } flex`}
            >
              <i
                className="ri-close-fill absolute top-4 right-5 text-2xl cursor-pointer lg:hidden"
                onClick={() => setShowNavbar(false)}
              ></i>
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
            </div>
          }
        </div>

        {/* Logo  */}
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

        {/* Account  */}
        <div className="w-1/3 flex justify-end items-center gap-2">
          {user?.email ? (
            <div className="flex justify-center items-center relative">
              <div
                className="flex items-center z-50 gap-3 bg-color-black p-[2px] pl-4 rounded-full cursor-pointer"
                onClick={() => {
                  setOpenDrop(!openDrop);
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-color-red h-4 w-4 flex justify-center items-center rounded-full">
                    1
                  </span>{" "}
                  {user.displayName}
                </div>
                <img
                  src={user.photoURL}
                  className={style.uesrImg}
                  alt="user Image"
                />
              </div>

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
                <Link
                  className="flex items-center justify-center py-1 gap-1 bg-color-gray w-full rounded-md "
                  href="/account"
                >
                  <i className="ri-archive-line text-lg"></i>
                  Favorite
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
            <Link href="/user/login">
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
    </header>
  );
}

export default Header;
