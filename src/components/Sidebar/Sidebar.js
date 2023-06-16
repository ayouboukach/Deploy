/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
//import { getToken } from "components/Utils/Common";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const user = useSelector((state) => state?.auth?.user);
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  const CorporelBlock = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);
    return (
      <li className="items-center">
        <button
          id="deleteButtonStyle"
          class="dropdown-btn text-xs uppercase py-3 font-bold block "
          onClick={() => setToggle(!toggle)}
        >
          CORPOREL
          <i className="fas fa-user text-sm opacity-75 text-blueGray-300"></i>{" "}
          {!toggle && (<i id="changeIcon" class="fa fa-caret-down"></i>)}
          {toggle && (<i id="changeIcon" class="fa fa-caret-up"></i>)}
        </button>
        {toggle && (<div class="dropdown-container">
          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf("/admin/tables") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/tables"
          >
            <i
              className={
                "fas fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf("/admin/tables") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Performance par gestionnaire
          </Link>

          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf(
                "/admin/dossier-cloture-par-mois"
              ) !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/dossier-cloture-par-mois"
          >
            <i
              className={
                "fa fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf(
                  "/admin/dossier-cloture-par-mois"
                ) !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Dossiers clôturés par mois
          </Link>
        </div>
        )}
      </li>

    );
  };

  const AdminBlock = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);
    return (
      <li className="items-center">
        <button
          id="deleteButtonStyle"
          class="dropdown-btn text-xs uppercase py-3 font-bold block "
          onClick={() => setToggle1(!toggle1)}
        >
          ADMIN
          <i className="fas fa-user text-sm opacity-75 text-blueGray-300"></i>{" "}
          {!toggle1 && (<i id="changeIcon" class="fa fa-caret-down"></i>)}
          {toggle1 && (<i id="changeIcon" class="fa fa-caret-up"></i>)}
        </button>
        {toggle1 && (<div class="dropdown-container">
          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf("/admin/tables") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/tables"
          >
            <i
              className={
                "fas fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf("/admin/tables") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Performance par gestionnaire
          </Link>

          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf(
                "/admin/dossier-cloture-par-mois"
              ) !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/dossier-cloture-par-mois"
          >
            <i
              className={
                "fa fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf(
                  "/admin/dossier-cloture-par-mois"
                ) !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Dossiers clôturés par mois
          </Link>
        </div>
        )}
      </li>
    );
  };

  const ATBlock = () => {
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(true);
    return (
      <li className="items-center">
        <button
          id="deleteButtonStyle"
          class="dropdown-btn text-xs uppercase py-3 font-bold block "
          onClick={() => setToggle2(!toggle2)}
        >
          AT
          <i className="fas fa-user text-sm opacity-75 text-blueGray-300"></i>{" "}
          {!toggle2 && (<i id="changeIcon" class="fa fa-caret-down"></i>)}
          {toggle2 && (<i id="changeIcon" class="fa fa-caret-up"></i>)}
        </button>
        {toggle2 && (<div class="dropdown-container">
          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf("/admin/tables") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/tables"
          >
            <i
              className={
                "fas fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf("/admin/tables") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Performance par gestionnaire
          </Link>

          <Link
            className={
              "text-xs uppercase py-3 font-bold block " +
              (window.location.href.indexOf(
                "/admin/dossier-cloture-par-mois"
              ) !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
            to="/admin/dossier-cloture-par-mois"
          >
            <i
              className={
                "fa fa-folder-open mr-2 text-sm " +
                (window.location.href.indexOf(
                  "/admin/dossier-cloture-par-mois"
                ) !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Dossiers clôturés par mois
          </Link>
        </div>
        )}
      </li>
    );
  };
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-blueGray-200 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold"
            to="/"
          >
            <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-0 px-0">
              <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                  <img
                    alt="..."
                    className="w-full rounded-full align-middle border-none"
                    src={require("assets/img/Matu-assurance.png")}
                  ></img>
                </span>
              </ul>
              <div className="relative flex w-full flex-wrap items-stretch ml-1">
                <span>Matu assurance</span>
              </div>
            </div>
          </Link>

          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right- overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/accueil") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/accueil"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/accueil") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Accueil
                </Link>
              </li>
                {/*getToken() ? <CorporelBlock /> : null*/}
              {user?.lastName=="admin" && (
                <><AdminBlock /><CorporelBlock /> <ATBlock/></>
              )}
              {user?.lastName == "corporel" && (
                <><CorporelBlock /></>
              )}
              {user?.lastName == "at" && (
                <><ATBlock /></>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
