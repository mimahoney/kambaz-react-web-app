import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const { pathname } = useLocation();
 const active = (path: string) => (pathname.includes(path) ? "active" : "");
 return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
    {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
      <Link to="/Kambaz/Account/Signin" id="Signin"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to="/Kambaz/Account/Signup" id="Signup"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kambaz/Account/Profile" id="Profile"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}