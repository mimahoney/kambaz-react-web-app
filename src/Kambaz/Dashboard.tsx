import { Link } from "react-router-dom";
import * as db from "./Database";
import { Row, Col, Card, Button } from 'react-bootstrap'; 
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}











// import { Link } from "react-router-dom";
// import { Row, Col, Card, Button } from 'react-bootstrap'; 
// export default function Dashboard() {
//   return (

//     <div id="wd-dashboard">
//     <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//     <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//     <div id="wd-dashboard-courses">
//       <Row xs={1} md={4} className="g-4 gy-4" >
//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//           <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="/images/reactjpg.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>
//         <Col className="wd-dashboard-course" style={{ width: "300px"}}> 
//         <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/FINA2201.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">FINA2201</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Financial Accounting</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>
//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//         <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/CS2500.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">CS2500</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Fundamentals of Computer Science I</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
          
//         </Col>
      

//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//           <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/fina2202.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">FINA2202</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Managerial Accounting</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>

//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//           <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/CS1800.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">CS1800</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Discrete Math</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>

//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//           <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/CS2510.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">CS2510</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Fundamentals of Computer Science II</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>

//         <Col className="wd-dashboard-course" style={{ width: "300px"}}>
//           <Card>
//             <Link to="/Kambaz/Courses/1234/Home"
//                   className="wd-dashboard-course-link text-decoration-none text-dark">
//               <Card.Img variant="top" src="images/MKTG.jpg" width="100%" height={160}/>
//               <Card.Body>
//                 <Card.Title className="wd-dashboard-course-title">MKTG2201</Card.Title>
//                 <Card.Text  className="wd-dashboard-course-description">Intro to Marketing</Card.Text>
//                 <Button variant="primary">Go</Button>
//               </Card.Body>
//             </Link>
//           </Card>
//         </Col>
//         </Row>


//   </div></div>
  


// );}




    
// <div id="wd-dashboard">
// <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
// <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
// <div id="wd-dashboard-courses">
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/reactjs.jpg" width={200} />
//       <div>
//         <h5> CS1234 React JS </h5>
//         <p className="wd-dashboard-course-title">
//           Full Stack software developer  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/FINA2201.jpg" width={200} />
//       <div>
//         <h5> FINA2201 </h5>
//         <p className="wd-dashboard-course-title">
//           Financial Accounting  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/fina2202.jpg" width={200} />
//       <div>
//         <h5> FINA2202 </h5>
//         <p className="wd-dashboard-course-title">
//           Managerial Accounting </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/CS2500.jpg" width={200} />
//       <div>
//         <h5> CS2500 </h5>
//         <p className="wd-dashboard-course-title">
//           Fundamentals of Computer Science I  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/CS2510.jpg" width={200} />
//       <div>
//         <h5> CS2510 </h5>
//         <p className="wd-dashboard-course-title">
//           Fundamentals of Computer Science II  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/MKTG.jpg" width={200} />
//       <div>
//         <h5> MKTG2201 </h5>
//         <p className="wd-dashboard-course-title">
//           Intro to Marketing  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/CS1800.jpg" width={200} />
//       <div>
//         <h5> CS1800 </h5>
//         <p className="wd-dashboard-course-title">
//           Discrete Mathematics  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
//   <div className="wd-dashboard-course">
//     <Link to="/Kambaz/Courses/1234/Home"
//           className="wd-dashboard-course-link" >
//       <img src="/images/UX.jpg" width={200} />
//       <div>
//         <h5> CS4973 </h5>
//         <p className="wd-dashboard-course-title">
//           User Experience Design  </p>
//         <button> Go </button>
//       </div>
//     </Link>
//   </div>
// </div>
// </div>



