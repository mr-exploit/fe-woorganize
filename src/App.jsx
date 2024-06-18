import AfterFormReq from "./pages/FormReq/AfterFormReq"
import FormReq from "./pages/FormReq/FormReq"
import LandingPage from "./pages/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import RincianAnggaran from "./pages/RincianAnggaran/RincianAnggaran"
import Concept from "./pages/Concept/Concept"
import Schedule from "./pages/Schedule/Schedule"
import ScheduleAdmin1 from "./pages/Admin/ScheduleAdmin/ScheduleAdmin1"
import ScheduleAdmin2 from "./pages/Admin/ScheduleAdmin/ScheduleAdmin2"
import Dashboard1 from "./pages/Admin/DashboardAdmin/Dashboard1"
import Dashboard2 from "./pages/Admin/DashboardAdmin/Dashboard2"
import Profile from "./pages/SettingProfile/SettingLayout/Profile"
import Setting from "./pages/SettingProfile/SettingLayout/Setting"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"
import RincianAdmin2 from "./pages/Admin/RincianAnggaran/RincianAdmin2"
import RincianAdmin from "./pages/Admin/RincianAnggaran/RincianAdmin1"
import AdminProfile from "./pages/Admin/AdminSetting/AdminProfile"
import AdminEditProfile from "./pages/Admin/AdminSetting/AdminEditProfile"
import AdminSetting from "./pages/Admin/AdminSetting/AdminSetting"
import FormA1 from "./pages/Admin/FormAdmin/FormA1"
import FormA2 from "./pages/Admin/FormAdmin/FormA2"
import EditProfile from "./pages/SettingProfile/SettingLayout/EditProfile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/form" element={<FormReq />}></Route>
        <Route path="/costplan" element={<RincianAnggaran />}></Route>
        <Route path="aform" element={<AfterFormReq />}></Route>
        <Route path='user/profile' element={<Profile />} />
        <Route path='user/setting' element={<Setting />} />
        <Route path='user/profile/edit' element={<EditProfile />} />
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/concept" element={<Concept />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/RA1" element={<RincianAdmin />}></Route>
        <Route path="/RA2" element={<RincianAdmin2 />}></Route>
        <Route path="/fa1" element={<FormA1 />}></Route>
        <Route path="/fa2" element={<FormA2 />}></Route>
        <Route path='admin/profile' element={<AdminProfile />} />
        <Route path='admin/setting' element={<AdminSetting />} />
        <Route path='admin/profile/edit' element={<AdminEditProfile />} />
        <Route path="/dashboard/concept1" element={<Dashboard1 />}></Route>
        <Route path="/dashboard/concept2" element={<Dashboard2 />}></Route>
        <Route path="/dashboard/schedule1" element={<ScheduleAdmin1 />}></Route>
        <Route path="/dashboard/schedule2" element={<ScheduleAdmin2 />}></Route>
      </Routes>
    </>
  )
}

export default App
