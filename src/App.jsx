import { Route, Routes } from "react-router"
import PageLayout from "./all/Layout"
import TabsLayout from "./all/tabs/Layout"
import Index from "./all/tabs/Index"
import Help from "./all/tabs/Help"
import Setting from "./all/tabs/Setting"
import SignIn from "./Sign-in"


const App = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route element={<PageLayout />}>
        <Route element={<TabsLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/help" element={<Help />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App