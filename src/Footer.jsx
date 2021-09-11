import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center">
        <i class="bi bi-twitter"></i>
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <LinkedInIcon />
        <p>
          Copyright ©2021 Anuja More All Rights Reserved | Terms and Conditions
        </p>
      </footer>
    </>
  );
};
export default Footer;
