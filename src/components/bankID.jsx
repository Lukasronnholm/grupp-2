import React, { useEffect } from "react";
import { Modal, Text, Title, Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import bankidLogo from "../assets/bankid-logo.png"; // 👈 din logga

function BankIDModal({ opened, onClose }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!opened) return;

    const timer = setTimeout(() => {
      onClose();
      navigate("/signcompleted");
    }, 3000);

    return () => clearTimeout(timer);
  }, [opened, onClose, navigate]);

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>BankID-signering</Title>}
      centered
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      radius="md"
    >
      <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
        {/* 🖼️ BankID-logga */}
        <img
          src={bankidLogo}
          alt="BankID logotyp"
          style={{
            width: "140px",
            marginBottom: "1.5rem",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))",
          }}
        />

        <Loader color="blue" size="lg" />
        <Text mt="md" c="dimmed">
          Startar BankID på din enhet...
        </Text>
        <Text c="gray" size="sm">
          Du kommer automatiskt vidare när signeringen är klar.
        </Text>
      </div>
    </Modal>
  );
}

export default BankIDModal;
