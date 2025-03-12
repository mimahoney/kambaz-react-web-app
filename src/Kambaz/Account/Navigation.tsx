import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
export default function AccountNavigation() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="Signin"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to="/Kambaz/Account/Signup" id="Signup"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kambaz/Account/Profile" id="Profile"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
);}