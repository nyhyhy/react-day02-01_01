import { Outlet , Link } from "react-router-dom"
import AccountFooter from "./components/AccountFooter"
import AccountHeader from "./components/AccountHeader"
// import AccountMain from "./components/AccountMain"

function App() {
  
  return (
    <>
      {/* <AccountHeader/>
      <AccountMain/>
      <AccountFooter/> */}
      <nav className="flex gap-4 p-4 border-b bg-white">
        <Link className="text-blue-600 hover:text-blue-800" to="/">Home</Link>
        <Link className="text-blue-600 hover:text-blue-800" to="/about">About</Link>
        <Link className="text-blue-600 hover:text-blue-800" to="/welcome">Welcome</Link>
      </nav>
      <AccountHeader />
      <Outlet />
      <AccountFooter />
    </>
  )
}

export default App
