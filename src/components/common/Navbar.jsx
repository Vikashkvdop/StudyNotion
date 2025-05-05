import { Link, useLocation,matchPath } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";

import { useEffect, useState,useRef } from "react";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../assets/StudyNotion-logo-light.png"
import ProfileDropdown from "../core/Auth/ProfileDropDown";
import { IoMenu } from "react-icons/io5";
import { ACCOUNT_TYPE } from "../../utils/constants";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { HiOutlineShoppingBag } from "react-icons/hi";


function Navbar() {
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setMobileMenuOpen(false));

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
  
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);
  

  //console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-gray-700 ${
        location.pathname !== "/" ? "bg-[#07121b]" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-gray-200">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-300"
                          : "text-gray-200"
                      }`}
                    >
                      <p>{link.title}</p>
                      <RiArrowDownSLine />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-200 p-4 text-gray-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-200"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : (subLinks && subLinks.length) ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-gray-300"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-300"
                          : "text-gray-200"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <HiOutlineShoppingBag  className="text-2xl text-gray-200" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-gray-800 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-gray-200">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-gray-700 bg-gray-800 px-[12px] py-[8px] text-gray-200">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        {/* Menu Button for Mobile */}
        <button
          className="mr-4 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <IoMenu fontSize={24} fill="#AFB2BF" className="text-gray-200" />
        </button>

      </div>
      {mobileMenuOpen && (
        <div ref={menuRef}
        className={`fixed top-0 right-0 z-50 h-full w-[50%] bg-[#06121b] px-6 py-4 shadow-lg transition-transform duration-300 ease-in-out transform
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-yellow-300 text-2xl"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col gap-y-4 text-gray-300">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <p className="font-semibold">{link.title}</p>
                    {loading ? (
                      <p className="text-sm">Loading...</p>
                    ) : (subLinks && subLinks.length > 0) ? (
                      subLinks
                        .filter((subLink) => subLink?.courses?.length > 0)
                        .map((subLink, i) => (
                          <Link
                            key={i}
                            to={`/catalog/${subLink.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="ml-4 block py-1 text-sm text-yellow-300"
                          >
                            {subLink.name}
                          </Link>
                        ))
                    ) : (
                      <p className="text-sm">No courses found</p>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-200"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            {token === null && (
              <>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <p className="text-gray-200">Log in</p>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <p className="text-gray-200">Sign up</p>
                </Link>
              </>
            )}
            {token !== null && <ProfileDropdown />}
          </ul>
        </div>
      )}


    </div>
  )
}

export default Navbar;
