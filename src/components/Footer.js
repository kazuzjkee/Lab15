import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Литвинов Егор Константинович. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
