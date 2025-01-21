import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/FINA2201.jpg" width={200} />
            <div>
              <h5> FINA2201 </h5>
              <p className="wd-dashboard-course-title">
                Financial Accounting  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/fina2202.jpg" width={200} />
            <div>
              <h5> FINA2202 </h5>
              <p className="wd-dashboard-course-title">
                Managerial Accounting </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS2500.jpg" width={200} />
            <div>
              <h5> CS2500 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science I  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS2510.jpg" width={200} />
            <div>
              <h5> CS2510 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science II  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/MKTG.jpg" width={200} />
            <div>
              <h5> MKTG2201 </h5>
              <p className="wd-dashboard-course-title">
                Intro to Marketing  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/CS1800.jpg" width={200} />
            <div>
              <h5> CS1800 </h5>
              <p className="wd-dashboard-course-title">
                Discrete Mathematics  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/UX.jpg" width={200} />
            <div>
              <h5> CS4973 </h5>
              <p className="wd-dashboard-course-title">
                User Experience Design  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}










