import React, { useContext } from "react";
import styled from "styled-components";
import { ThContext } from "../contexts/ThContext";
import { AuthContext } from "../contexts/AuthContext";

function ThemeToggle() {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  // **************** STYLES ********************
  const Btn = styled.button`
    border: none;
    border-radius: 50px;
    padding: 20px;
    color: ${theme.syntax};
    background-color: ${theme.ui};
    cursor: pointer;
  `;

  return (
    <Btn
      onClick={() => {
        toggleTheme();
        toggleAuth();
      }}
    >
      Toggle Theme Authenticated = {isAuthenticated ? "true" : "false"}
    </Btn>
  );
}

export default ThemeToggle;