

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
// import * as db from "../Database/";
import * as client from "./client";
//import users from "../Database/users.json";
import { FormControl, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
      if (!user) {
        console.log("No matching user found", credentials);
        return;
      }
    dispatch(setCurrentUser(user));
    navigate('/Kambaz/Dashboard');
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl value={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
      <FormControl value={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
    </div>
);}




// import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <Form.Control id="wd-username"
//              placeholder="username"
//              className="mb-2"/>
//       <Form.Control id="wd-password"
//              placeholder="password" type="password"
//              className="mb-2"/>
//       <Link id="wd-signin-btn"
//             to="/Kambaz/Account/Profile"
//             className="btn btn-primary w-100 mb-2">
//             Sign in </Link>
//       <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
//     </div> );}


// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign in</h3>
//       <input placeholder="username" className="wd-username" /> <br />
//       <input placeholder="password" type="password" className="wd-password" /> <br />
//       <Link  to="/Kambaz/Account/Profile" id="wd-signin-btn"> Sign in </Link> <br />
//       <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>
//     </div>
// );}

