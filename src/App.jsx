import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeOne from "./components/Home/HomeOne";
import HomeThree from "./components/Home/HomeThree";
import HomeTwo from "./components/Home/HomeTwo";
import ErrorPage from "./components/Pages/404Page";
import AboutOne from "./components/Pages/AboutOne";
import AboutTwo from "./components/Pages/AboutTwo";
import BLogStandard from "./components/Pages/BLogStandard";
import ContactUs from "./components/Pages/ContactUs";
import Courses from "./components/Pages/Courses";
import CourseSideBar from "./components/Pages/CourseSideBar";
import Event from "./components/Pages/Event";
import EventSingle from "./components/Pages/EventSingle";
import InstructorDetails from "./components/Pages/InstructorDetails";
import Profile from "./components/Pages/Profile";
import InstructorOne from "./components/Pages/InstructorOne";
import InstructorTwo from "./components/Pages/InstructorTwo";
import SingleBlog from "./components/Pages/SingleBlog";
import SingleCourse from "./components/Pages/SingleCourse";
import Thanks from "./components/Pages/Thanks";
import Register from "./components/Pages/Register";
import Login from "./components/Pages/Login";
import Logout from "./components/Logout/Logout";
import MemberPostJob from "./components/Pages/MemberPostJob";
import MemberJobs from "./components/Pages/MemberJobs";
import ProfileView from "./components/Profile/ProfileView";
import ReqMentor from "./components/Pages/ReqMentor";
import RequestForMentor from "./components/Pages/RequestForMentor";
import AuthRoute from "./routes/AuthRoute";
import AdminRoute from "./routes/AdminRoute";
import Membership from "./components/Pages/Membership";
import Sponsorship from "./components/Pages/Sponsorship";
import LearnJournal from "./components/Pages/LearnJournal";
import LearnCourses from "./components/Pages/LearnCourses";
import LearnCommittees from "./components/Pages/LearnCommittees";
import LearnResources from "./components/Pages/LearnResources";
import Policy from "./components/Pages/Policy";
import ViewMatches from "./components/Pages/ViewMatches";
import MatchesProfileView from "./components/Pages/MatchesProfileView";
import MatchesProfile from "./components/Pages/MatchesProfile";
import ViewMembers from "./components/Pages/ViewMembers";
import AddEventForm from "./components/Event/AddEventForm";

function App() {
  return (
    <BrowserRouter>
      <div className="font-gilroy font-medium text-gray text-lg leading-[27px]">
        <Routes>

          <Route path="/view_members" element={<ViewMembers/>} />
          <Route path="/view_matches" element={<ViewMatches />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/learn_resources" element={<LearnResources />} />
          <Route path="/learn_committees" element={<LearnCommittees />} />
          <Route path="/learn_courses" element={<LearnCourses />} />
          <Route path="/learn_journal" element={<LearnJournal />} />
          <Route path="/join_us_sponsorship" element={<Sponsorship />} />
          <Route path="/join_us_membership" element={<Membership />} />
          <Route path="/req_mentor_post" element={<ReqMentor />} />
          <Route path="/req_mentor" element={<RequestForMentor />} />
          <Route path="/member_jobs" element={<MemberJobs />} />
          <Route path="/member_job_post" element={<MemberPostJob />} />
          <Route path="/membership" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" exact element={<HomeOne />} />
          <Route
            path="/profile"
            exact
            element={<AuthRoute Element={Profile} />}
          />
          <Route path="/member/:memberID" exact element={<ProfileView />} />
          <Route
            path="/matches_profile"
            exact
            element={<AuthRoute Element={MatchesProfile} />}
          />
          <Route path="/matches/:memberID" exact element={<MatchesProfileView />} />

          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/home-three" element={<HomeThree />} />
          <Route path="/about" element={<AboutOne />} />
          <Route path="/about-two" element={<AboutTwo />} />
          <Route path="/instructor" element={<InstructorOne />} />
          <Route path="/instructor-two" element={<InstructorTwo />} />
          <Route path="/instructor-details" element={<InstructorDetails />} />

          <Route path="/event" element={<Event />} />

          <Route
            path="/event-single"
            exact
            element={<AuthRoute Element={EventSingle} />}
          />
          <Route
            path="/add-event"
            element={<AdminRoute Element={AddEventForm} />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses-sidebar" element={<CourseSideBar />} />
          <Route path="/single-course" element={<SingleCourse />} />
          <Route path="/blog-standard" element={<BLogStandard />} />
          <Route path="/single-blog" element={<SingleBlog />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
