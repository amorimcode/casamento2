import { Modal } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/svg/logo.svg";
import LogoWhite from "../../assets/svg/logoWhite.svg";

import "./styles.scss";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header
      id="header"
      className={
        navbar
          ? "header fixed-top active"
          : `header ${location.pathname !== "/" ? "" : "fixed-top"}`
      }
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={navbar ? LogoWhite : Logo} alt="" />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                Início
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Save the date
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#location">
                Localização
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contato
              </a>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/padrinhos">
                Padrinhos
              </Link>
            </li>

            <li>
              <Link className="nav-link scrollto" to="/damas">
                Damas de honra
              </Link>
            </li>

            {/* <li>
              <Link className="nav-link scrollto" to="/posts">
                Posts
              </Link>
            </li> */}
            <li>
              <a
                className="getstarted scrollto"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5519991123574"
                rel="noreferrer"
              >
                Whatsapp <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={showModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </i>
        </nav>
      </div>
      <Modal visible={isModalVisible} footer={false} onCancel={handleCancel}>
        <div className="modal-container">
          <ul>
            <li>
              <Link to="/" className="nav-link scrollto active">
                Início
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/posts">
                Posts
              </Link>
            </li>
          </ul>
          <a
            className="whatsapp-button"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519991123574"
            rel="noreferrer"
          >
            Whatsapp <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
