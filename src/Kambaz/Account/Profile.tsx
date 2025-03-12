import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
 import { FormControl, Button } from "react-bootstrap";
export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div className="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl defaultValue={profile.username} id="wd-username" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <FormControl defaultValue={profile.password} id="wd-password" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <FormControl defaultValue={profile.firstName} id="wd-firstname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <FormControl defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <FormControl defaultValue={profile.dob} id="wd-dob" className="mb-2"
                       onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <FormControl defaultValue={profile.email} id="wd-email" className="mb-2"
                       onChange={ (e) => setProfile({ ...profile, email: e.target.value })}/>
          <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
</div>);}


// import { Link } from "react-router-dom";
// import { Form } from "react-bootstrap";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <Form.Control id="wd-username"
//              placeholder="username"
//              defaultValue={"alice"}
//              className="mb-2"/>
//       <Form.Control id="wd-password"
//              placeholder="password"
//              defaultValue={"123"}
//              className="mb-2"/>
//       <Form.Control id="wd-firstname"
//              placeholder="First Name"
//              defaultValue={"Alice"}
//              className="mb-2"/>
//       <Form.Control id="wd-lastname"
//              placeholder="Last Name"
//              defaultValue={"Wonderland"}
//              className="mb-2"/>
//       <Form.Control id="wd-dob"
//             type="date"
//              defaultValue={"2000-01-01"}
//              className="mb-2"/>
//       <Form.Control id="wd-email"
//             type="email"
//              defaultValue={"alice@wonderland"}
//              className="mb-2"/>
      
//       <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </Form.Select>
      
//       <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2 text-white">Sign out</Link>
//     </div>
// );}





// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
//       <input defaultValue="123"   placeholder="password" type="password"
//              className="wd-password" /><br/>
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kambaz/Account/Signin" >Sign out</Link>
//     </div>
// );}
