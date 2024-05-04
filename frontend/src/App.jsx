import { Routes, Route } from "react-router-dom";
import BuffetReservations from "./componentsDhanithya/BuffetReservations";
import MakeReservation from "./componentsDhanithya/MakeReservation/MakeReservation";
import BuffetAdminPages from "./componentsDhanithya/BuffetAdminPages";
import Addbuffet from "./componentsDhanithya/AddBuffet/Addbuffet";
import AdminPanel from "./componentsDhanithya/AdminPanel";
import BuffetPages from "./componentsDhanithya/BuffetPages";
import ReservationDetails from "./componentsDhanithya/ReservationDetails";

import HomeC from "./ComponentsTharushaComplain/Home/Home";
import AddComplain from "./ComponentsTharushaComplain/AddComplain/AddComplain";
import DisplayComplains from "./ComponentsTharushaComplain/ComplainDetails/DisplayComplains";
import Review from './componentsTharushaReview/Review'
import AddFeedback from './componentsTharushaReview/AddFeedback/AddFeedback';

import Home from "./Dilakshi/Pages/Home";
import Login from "./Dilakshi/Pages/User_Management/Login";
import RegisterUser from "./Dilakshi/Pages/User_Management/RegisterUser";
import AdminDashboard from "./Dilakshi/Pages/User_Management/AdminDashboard";
import ContactUs from "./Dilakshi/Pages/User_Management/ContactUs";
import Profile from "./Dilakshi/Pages/User_Management/Profile";

import AddSalary from "./componentChalani/addSalary";
import AllSalaries from "./componentChalani/allSalaries";
import UpdateSalary from "./componentChalani/updateSalary";
import Repoart from './componentChalani/FinanceDashboard';

import AddRooms from './componentJanani/addrooms';
import RoomsDetails from './componentJanani/roomdetails';
import UpdateRooms from './componentJanani/updaterooms';
import Reportdetails from './componentJanani/report';
import HomeScreen from './componentJanani/homescreen';
import CategoryRooms from './componentJanani/caregoryrooms';

import Posters from './componentsDilushaVacancy/Posters';
import AddPoster from './componentsDilushaVacancy/AddPoster/AddPoster';
import Users from './componentsDilushaApplications/Users';
import SkillsBar from './componentsDilushaApplications/SkillsBar';
import AddPosters from './componentsDilushaApplications/AddPosters/AddPosters';
import Poster from './componentsDilushaApplications/Posters/Posters';
import AdminSkillsBar from './componentsDilushaApplications/AdminSkillsBar';




const App = () => {
  return (
    <Routes>
      {/*Dhanithya*/}
      <Route path="/" element={<BuffetReservations />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      <Route path="/buffet-admin" element={<BuffetAdminPages/>} /> 
      <Route path="/add-buffet" element={<Addbuffet />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/buffet-page" element={<BuffetPages/>} />
      <Route path="/reservation/:id" element={<ReservationDetails />} /> 
      {/*Tharusha*/}
          <Route path="/home" element={<HomeC />} />
          <Route path="/addcomplains" element={<AddComplain />} /> 
          <Route path="/complaindetails" element={<DisplayComplains/>} />
          <Route path="/review" element={<Review />} />
          <Route path="/addfeedback" element={<AddFeedback />} />





      {/*Dilakshi*/} 
      <Route exact path="/dilakshihome" element={<Home />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<RegisterUser />} />
        <Route exact path="/Profile" element={<Profile />} />
        {localStorage.getItem("userRole") === "admin" && (
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        )}

        {/*Chalani*/}
        <Route path="/addsalary" element={<AddSalary />} />
          <Route path="/salarydetails" element={<AllSalaries />} />
          <Route path="/update/:id" element={<UpdateSalary />} />
          <Route path="/repoartfinance" element={<Repoart />} />


          {/*Deshan*/}

          {/*Dilusha*/}
          <Route path="/posters" element={<Posters />} />
          <Route path="/AddPoster" element={<AddPoster />} />

          <Route path='/applicants' element={<Users />} />
          <Route path='/skillsBar' element={<SkillsBar />} />
          <Route path='/vacancies' element={<Poster />} />
          <Route path='/AddPosters' element={<AddPosters />} />
          <Route path='/AdminSkillsBar' element={<AdminSkillsBar />} />

          {/*Janani*/}
          <Route path="/roomhome" element={<HomeScreen />}></Route>
          <Route path="/categoryrooms" element={<CategoryRooms />}></Route>
          <Route path="/addrooms" element={<AddRooms />}></Route>
          <Route path="/roomsdetails" element={<RoomsDetails />}></Route>
          <Route path="/roomsupdate/:id" element={<UpdateRooms />}></Route>
          <Route path="/report" element={<Reportdetails />}></Route>


          {/*Anjalee*/}
    </Routes>
  );   
};

export default App;