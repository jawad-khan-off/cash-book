import { Outlet } from "react-router"
import Navbar from "../../components/Navbar"

const TabsLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default TabsLayout