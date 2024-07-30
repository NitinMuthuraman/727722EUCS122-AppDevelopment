import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Home from "./component/Home";
import User from "./component/User";
import Profile from "./component/Profile";
import AdminHome from "./component/AdminHome";
import CalendarPage from "./component/Calender";
import StaffPage from "./component/AdminSP";
import AdminRequestPage from "./component/AdminReq";
import AdminDashboard from "./component/AdminDashBoard";
import RequestsPage from "./component/Request";
import Dashboard from "./component/User";
import CalendarPage1 from "./component/UserSchedule";
import UserHome from "./component/User";
import UserDashboard from "./component/UserDashBoard";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Request" element={<RequestsPage />} />
      <Route path="/admin" element={<AdminHome />}>
      <Route index element={<AdminDashboard />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="staff" element={<StaffPage />} />
      <Route path="settings" element={<div className="calendar-page">Settings Page</div>} />
      <Route path="requests" element={<AdminRequestPage />} /></Route>
      <Route path="/user" element={< UserHome/>}>
      <Route index element={<UserDashboard />} />
      <Route path="calendar" element={<CalendarPage1 />} />
      <Route path="requests" element={<RequestsPage />} /></Route>
    </Routes>
    // <CalendarPage1/>
  );
}

export default App;