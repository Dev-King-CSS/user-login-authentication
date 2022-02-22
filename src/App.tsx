import { useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  UserCredential,
} from "firebase/auth"
import { auth } from "./firebase-config"
//! Styles
import { Login, Register, Wrapper } from "./App.styles"

const App: React.FC<{}> = (): JSX.Element => {
  const [registerEmail, setRegisterEmail] = useState<string>("")
  const [registerPassword, setRegisterPassword] = useState<string>("")
  const [loginEmail, setLoginEmail] = useState<string>("")
  const [loginPassword, setLoginPassword] = useState<string>("")

  const [user, setUser] = useState<User | null>(null)

  onAuthStateChanged(auth, currentUser => setUser(currentUser))

  const register = async (): Promise<void> => {
    try {
      const user: UserCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
      setRegisterEmail("")
      setRegisterPassword("")
    } catch ({ message }) {
      alert(message)
      console.warn(
        `Error caused due to invalid input\n Message: ${message}`
      )
    }
  }

  const login = async (): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      setLoginEmail("")
      setLoginPassword("")
    } catch ({ message }) {
      alert(message)
      console.warn(
        `Error caused due to invalid input\n Message: ${message}`
      )
    }
  }

  const logout = async () => await signOut(auth)

  return (
    <Wrapper>
      <Register>
        <h3>Register User</h3>
        <input
          placeholder="Email"
          onChange={e => setRegisterEmail(e.target.value)}
          value={registerEmail}
        />
        <input
          placeholder="Password"
          onChange={e => setRegisterPassword(e.target.value)}
          value={registerPassword}
        />
        <button onClick={register}>Create User</button>
      </Register>
      <Login>
        <h3>Login</h3>
        <input
          placeholder="Email..."
          onChange={e => setLoginEmail(e.target.value)}
          value={loginEmail}
        />
        <input
          placeholder="Password..."
          onChange={e => setLoginPassword(e.target.value)}
          value={loginPassword}
        />

        <button onClick={login}>Login</button>
      </Login>

      <h4>User Logged In : {user?.email}</h4>
      <button onClick={logout} className="sign__out">
        Sign Out
      </button>
    </Wrapper>
  )
}

export default App
