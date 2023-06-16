/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createPopper } from "@popperjs/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeNotify } from "redux/features/notify/notifySlice";
import { logoutEveryDevice } from "Services";
//import { getUser, removeUserSession } from "..//Utils/Common.js";



const UserDropdown = (props) => {
  const dispatch = useDispatch();
  // dropdown props
  let navigate = useNavigate();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  //const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    //removeUserSession();
    dispatch(closeNotify());
    dispatch(logoutEveryDevice());
  };

  return (
    <>
      <a
        className="text-blueGray-500 block"
        ref={btnDropdownRef}
        onClick={handleLogout}
        /*onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}*/
      >
        <div className="items-center flex cursor-pointer">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-800 inline-flex items-center justify-center rounded-full">
            {/*<img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("assets/img/Matu-assurance.png")}
              ></img>*/}
              Log
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Profile
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Paramètres
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Statistiques
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          type="button"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer"
          }
          onClick={handleLogout}
        >
          Déconnecter
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
