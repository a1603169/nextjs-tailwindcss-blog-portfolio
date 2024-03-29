import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SocialLinks from "./SocialLinks";
interface layoutProps {
  children: React.ReactNode;
}
const logoStyle: string =
  "border-solid border-2 border-indigo-300 p-2 ease-in duration-300 hover:text-indigo-500 hover:border-indigo-500 hover:scale-90";
const logoStyleActive: string =
  "ease-in duration-300 border-solid border-2 border-indigo-300 p-2 text-indigo-50 bg-indigo-500 hover:scale-90";
const linkStyle: string =
  "p-1 ease-in duration-300 mr-5 hover:text-indigo-500 ";
const linkStyleActive: string = "p-1 text-indigo-500 mr-5 ";
const hamburgerButton: string =
  "ease-in duration-300 flex items-center p-1 rounded-xl text-indigo-300 border-indigo-300 hover:bg-indigo-500 hover:text-indigo-50 hover:border-indigo-400";
const hamburgerButtonActive: string =
  "ease-in duration-300 flex items-center p-1 rounded-xl bg-indigo-500 text-indigo-50 border-indigo-400";
export default function Layout({ children }: layoutProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  const [isTop, setIsTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setIsTop(isTop);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [router]);
  return (
    <>
      <div className="sticky top-0 left-0 right-0 border-solid border-b-2 border-indigo-300 text-indigo-300 shadow-sm shadow-indigo-100 z-50 bg-white">
        <nav className="font-sans">
          <ul className="flex p-5 text-2xl justify-between items-center font-sans pt-5 -mt-5">
            <div>
                <Link href="/" className={
                  "rounded-xl " +  
                  (router.pathname === "/" ? logoStyleActive : logoStyle)
                }>DAVID.BANG</Link>
            </div>
            <div className="flex justify-between max-md:hidden">
              <li
                className={
                  router.pathname === "/projects" ? linkStyleActive : linkStyle
                }
              >
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li
                className={
                  router.pathname === "/about" ? linkStyleActive : linkStyle
                }
              >
                <Link href="/about">ABOUT</Link>
              </li>
              <li className={linkStyle}>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1rGlpw4vWapjUbNwfnm2q4PxNMbv7SySQ/view"
                >
                  RESUME
                </a>
              </li>
              <li
                className={
                  router.pathname === "/blog" ? linkStyleActive : linkStyle
                }
              >
                <Link href="/blog">BLOG</Link>
              </li>
              <li
                className={
                  router.pathname === "/contact" ? linkStyleActive : linkStyle
                }
              >
                <Link href="/contact">CONTACT</Link>
              </li>
            </div>
            <div className="hidden max-md:block">
              <button
                className={isOpen ? hamburgerButtonActive : hamburgerButton}
                onClick={toggleMenu}
              >
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </ul>
          <div className={isOpen ? "" : "hidden"}>
            <ul className="hidden justify-center items-center flex-col text-2xl max-md:flex">
              <li
                className={
                  "my-5 transition duration-300 hover:text-indigo-500" +
                  (router.pathname === "/projects" ? " text-indigo-500" : "")
                }
                onClick={toggleMenu}
              >
                <Link href="/projects">PROJECTS</Link>
              </li>
              <li
                className={
                  "mb-5 transition duration-300 hover:text-indigo-500" +
                  (router.pathname === "/about" ? " text-indigo-500" : "")
                }
                onClick={toggleMenu}
              >
                <Link href="/about">ABOUT</Link>
              </li>
              <li
                className={"mb-5 transition duration-300 hover:text-indigo-500"}
                onClick={toggleMenu}
              >
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1rGlpw4vWapjUbNwfnm2q4PxNMbv7SySQ/view"
                >
                  RESUME
                </a>
              </li>
              <li
                className={
                  "mb-5 transition duration-300 hover:text-indigo-500" +
                  (router.pathname === "/blog" ? " text-indigo-500" : "")
                }
                onClick={toggleMenu}
              >
                <Link href="/blog">BLOG</Link>
              </li>
              <li
                className={
                  "mb-5 transition duration-300 hover:text-indigo-500" +
                  (router.pathname === "/contact" ? " text-indigo-500" : "")
                }
                onClick={toggleMenu}
              >
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* This has to be based on viewheights */}
      <main className={`py-10`}>{children}</main>
      <footer className={`${isTop ? 'fixed' : 'relative'} bottom-0 right-0 left-0 bg-white z-50`}>
        <SocialLinks />
        <p className="text-2xl text-indigo-400 text-center">
          © 2024 Seunghun David Bang
        </p>
      </footer>
    </>
  );
}