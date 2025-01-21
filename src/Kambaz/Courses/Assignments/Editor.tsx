export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select name="wd-group" id="wd-group">
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Display Grade As:</label>
            </td>
            <td>
            <select name="wd-display-grade-a" id="wd-display-grade-a">
            <option value="Percentage">Percentage</option>
            <option value="Numeric">Numeric</option>
            </select>
            </td>
            </tr>
        
        <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Display Grade As:</label>
            </td>
            <td>
            <select name="wd-display-grade-a" id="wd-display-grade-a">
            <option value="Percentage">Percentage</option>
            <option value="Numeric">Numeric</option>
            </select>
            </td>
            </tr>
        </table>

        <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select name="wd-submission-type" id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="Hand-in">Hand-in</option>
            </select>
            </td>
            </tr>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="online-submission-type">Online Submission Type</label>
            </td>
            <td><input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="text-entry"></input>
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" name="wd-website-url" value="website-url"></input>
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="media-recordings"></input>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="wd-student-annotation"></input>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-upload" name="wd-file-upload" value="wd-file-upload"></input>
            <label htmlFor="wd-file-upload">File Upload</label><br />
            </td>
            </tr>

            <tr>
                <td align="right" valign="top" style={{ paddingRight: "10px" }}>
                    <label htmlFor="wd-assign">Assign</label>
                </td>
                <td>
                <label htmlFor="wd-assign-to">Assign to:</label><br />
                    <input id="wd-assign-to" value="Everyone"/> <br />
                <label htmlFor="wd-due-date">Due:</label><br />
                <input id="wd-due-date" type="date" />  <br />
                
                <label htmlFor="wd-available-from">Available From:</label><br />
                <input id="wd-available-from" type="date" /><br />  

                <label htmlFor="wd-available-until">Available Until:</label><br />
                <input id="wd-available-until" type="date" />  

                </td>
            </tr>

           
           
      </div>
      
  );}
  