import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
  StyledComponent,
} from "styled-components"

export const GlobalStyles: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 100vh;
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  }
`

export const Wrapper: StyledComponent<"div", any, {}, never> = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.4)
  );
  padding: 0 2rem;
  width: 50rem;
  height: 40rem;
  border-radius: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 2rem;

  h3 {
    font-size: 2rem;
    color: #333;
  }

  h4 {
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;

    &.sign__out {
      background: #eee;
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1.2rem;
    }
  }
`

export const Register: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-size: 1.1rem;
  }

  button {
    padding: 0.5rem;
    margin: auto;
    background-color: #0ce25d;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`

export const Login: StyledComponent<"div", any, {}, never> = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    font-size: 1.1rem;
  }

  button {
    padding: 0.5rem;
    margin: auto;
    background-color: #0044ff44;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.5rem;
  }
`
