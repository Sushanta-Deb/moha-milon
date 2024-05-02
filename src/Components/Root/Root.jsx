import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"


const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

Root.propTypes = {}

export default Root