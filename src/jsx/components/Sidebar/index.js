import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import { Button, Dropdown, Modal } from "react-bootstrap";

const Sidebar = ({ open, children, setOpen }) => {
  const sidebar = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", function (event) {
      if (sidebar.current && !sidebar.current.contains(event.target)) {
        setOpen(false);
      }
    });
  }, []);
  return (
    <div
      className={open ? styles.sidebar + " " + styles.expand : styles.sidebar}
      ref={sidebar}
    >
      {children}
    </div>
  );
};
export default Sidebar;
