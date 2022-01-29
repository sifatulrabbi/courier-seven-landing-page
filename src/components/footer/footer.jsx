import React from "react";
import { Link } from "react-router-dom";
import { siteLinks } from "../../assets";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-about">
          <div className="brand">Courier 007</div>
          <p className="about">
            He standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original.
          </p>
        </div>
        <div className="site-links">
          <h3 className="site-links-title">Site links</h3>
          <ul className="site-links-list">
            {siteLinks.map((data) => (
              <li className="site-links-list-item">
                <Link to={data.link}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-links">
          <h3 className="contact-links-title">Site links</h3>
          <ul className="contact-links-list">
            <li className="contact-links-list-item">
              <FaFacebook />
              <Link to="/" target="_blank">
                Facebook
              </Link>
            </li>
            <li className="contact-links-list-item">
              <FaInstagram />
              <Link to="/" target="_blank">
                Instagram
              </Link>
            </li>
            <li className="contact-links-list-item">
              <FaEnvelope />
              <Link to="/" target="_blank">
                gazisabbirahmmad@gmail.com
              </Link>
            </li>
            <li className="contact-links-list-item">
              <FaPhone />
              <Link to="mailto:" target="_blank">
                +8801625041214
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="page-bottom">© Courier 007 2022. All rights reserved</div>
    </>
  );
}
