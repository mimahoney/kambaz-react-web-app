import { Routes, Route, Navigate }
  from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";

import Courses from "./Courses";


export default function Kambaz() {
  return (
    <div id="wd-kambaz" className="d-flex">
          <div className="row">
          <div className="d-none d-md-block flex-column">
          <KambazNavigation />
        </div>
            <div className="col flex-grow">
            <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
        </div>
        </div>
    </div>
  );
}


// export default function Kambaz() {
//   return (
//     <div id="wd-kambaz">
//       <table>
//         <tr>
//           <td valign="top">
//             <KambazNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//               <Route path="/" element={<Navigate to="Account" />} />
//               <Route path="/Account/*" element={<Account />} />
//               <Route path="/Dashboard" element={<Dashboard />} />
//               <Route path="/Courses/:cid/*" element={<Courses />} />
//               <Route path="/Calendar" element={<h1>Calendar</h1>} />
//               <Route path="/Inbox" element={<h1>Inbox</h1>} />
//             </Routes>
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }
