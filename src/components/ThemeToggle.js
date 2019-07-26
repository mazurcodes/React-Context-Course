import React, { Component } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>
        {auth => {

          // ***************** CODE  ********************
          const { isLightTheme, light, dark, toggleTheme } = this.context;
          const { toggleAuth, isAuthenticated } = auth;
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
        }}
      </AuthContext.Consumer>
    );
  }
}
