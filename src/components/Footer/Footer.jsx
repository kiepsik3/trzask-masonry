import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container 2xl:max-w-[1320px]">
        <div className="footer-content">
          <address className="footer-address">
            Jana Pawła II 13, 20-535 Lublin, Polska
          </address>
          <div className="footer-links">
            <ul>
              <li>
                <a href="https://instagram.com/trzaskstudio" target="_blank">
                  @insta
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/trzaskstudio"
                  target="_blank"
                >
                  @linked
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCCgVKfDGxxWt-PHsZwz2NDQ"
                  target="_blank"
                >
                  @youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
