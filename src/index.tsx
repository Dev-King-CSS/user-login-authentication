import { StrictMode } from "react"
import { render } from "react-dom"
//! Components
import { GlobalStyles } from "./App.styles"
import App from "./App"

render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.querySelector("#app")
)
