import React, { createContext, Component } from "react";

export const ThContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,

    light: {
      syntax: "#555",
      ui: "#ddd",
      bg: "#eee"
    },

    dark: {
      syntax: "#ddd",
      ui: "#333",
      bg: "#555"
    }
  };
  toggleTheme = () => {
    this.setState((prevState) => { return { isLightTheme: !prevState.isLightTheme }})
  }

  render() {
    return (
      <ThContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </ThContext.Provider>
    );
  }
}

export default ThemeContextProvider;