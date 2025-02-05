import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link} from "react-router";
import { CiSettings } from "react-icons/ci";



export default function KambazNavigation() {
 return (
  
  <div id="wd-kambaz-navigation" style={{ width: "110px", minWidth: "105px", maxWidth: "115px" }} 
       className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
    <a id="wd-neu-link" target="_blank" 
       href="https://www.northeastern.edu/"
       className="list-group-item bg-black border-0 text-center">
       <img src="/images/nulogo.png" width="75px" /></a>
    <Link to="/Kambaz/Account" id="wd-account-link"
       className="list-group-item text-center border-0 bg-black text-white">
       <FaRegCircleUser className="fs-1 text text-white" /><br />
       Account </Link>
    <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
       className="list-group-item text-center border-0
                  bg-white text-danger">
       <AiOutlineDashboard className="fs-1 text-danger" /><br />
       Dashboard </Link>
    <Link to="/Kambaz/Dashboard" id="wd-course-link"
       className="list-group-item text-white
                  bg-black text-center border-0">
       <LiaBookSolid className="fs-1 text-danger" /><br />
       Courses </Link>
    <Link to="/Kambaz/Calendar" id="wd-calendar-link"
        className="list-group-item text-white
                  bg-black text-center border-0">
        <FaCalendarAlt className="fs-1 text-danger"/><br />
          Calendar</Link>
    <Link to="/Kambaz/Inbox" id="wd-inbox-link"
        className="list-group-item text-white
                    bg-black text-center border-0">
          <FaInbox className="fs-1 text-danger"/><br />           
          Inbox</Link>
    <Link to="/Labs" id="wd-labs-link" className="list-group-item text-white
                    bg-black text-center border-0">
          <CiSettings className="fs-1 text-danger"/><br /> 
          Labs</Link>

  </div>);}


// export default function KambazNavigation() {
//   return (
//     <div id="wd-kambaz-navigation">
//       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//       <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
//       <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//       <Link to="/Kambaz/Dashboard" id="wd-course-link">Courses</Link><br/>
//       <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//       <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//       <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
//     </div>
// );}
