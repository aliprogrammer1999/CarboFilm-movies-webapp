/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./header.module.css";
import imgtest from "../../../public/assest/userimg.jpg";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [openDrop, setOpenDrop] = useState(false);
  const [user, setUser] = useState(false);

  const navLink = [
    { href: "/", title: "Home", icon: "ri-home-4-fill" },
    { href: "/movies", title: "Movie", icon: "ri-movie-2-fill" },
    { href: "/tv", title: "Tv", icon: "ri-tv-fill" },
    { href: "/search", title: "Search", icon: "ri-search-2-line" },
  ];

  return (
    <header className="h-[55px] flex justify-center items-center select-none fixed w-full">
      <div className="w-[95%] flex justify-between">
        {/* Nav link  */}

        <div className="flex w-1/3 py-1 gap-1">
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

        {/* Logo  */}
        <div className="w-1/3 text-center flex justify-center">
          <i className="ri-clapperboard-fill text-color-red text-[35px]"></i>
          <h1>
            <span className=" font-bold text-[35px] text-color-red">C</span>
            arbon
          </h1>
          <h1>
            <span className=" font-bold text-[35px] text-color-red">F</span>ilm
          </h1>
        </div>

        {/* Account  */}
        <div className="w-1/3 flex justify-end items-center gap-2">
          {user ? (
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
                  alirezapur{" "}
                </div>
                <Image
                  src={imgtest}
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
                <button className="flex items-center justify-center py-1 gap-1 bg-color-gray w-full rounded-md">
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
                <div>Account</div>
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
