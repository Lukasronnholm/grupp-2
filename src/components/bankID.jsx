import React, { useEffect } from "react";
import { Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import bankidLogo from "../assets/BankID_logo.png";

function BankID({ opened, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!opened) return;

    const timer = setTimeout(() => {
      onClose();
      navigate("/signcompleted");
    }, 3000);

    return () => clearTimeout(timer);
  }, [opened, onClose, navigate]);

  if (!opened) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          fontSize: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >

        <p style={{ margin: "0 0 10px 0" }}>Signera via BankID</p>
        <img
          src={bankidLogo}
          alt="BankID Logo"
          style={{ width: "150px", margin: "20px 0" }}
        />
        <div style={{ margin: "20px 0" }}>
          <Loader color="blue" size="lg" style={{ margin: "0 auto" }} />
       
        <div style={{ textAlign: "center" }}>
       
          <div style={{ color: "gray", fontSize: "16px" }}>
            Signerar...
          </div>
      </div>
      </div>
    </div>
  </div>);
}

export default BankID;
