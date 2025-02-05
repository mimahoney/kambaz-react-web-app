import { Button, Dropdown, Container, Form, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <Container>
      <div id="wd-assignments-editor">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>a
        <Form.Control className="mb-2"id="wd-name" value="A1 - ENV + HTML" />
        <textarea id="wd-description" className="w-100 mb-2">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        
        
          <Row className="mb-2">
            <Col className="text-end">
              <Form.Label className="wd-points">Points</Form.Label>
            </Col>
            <Col>
              <Form.Control id="wd-points" value={100} />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col className="text-end">
              <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
            </Col>
            <Col>
            <Form.Select name="wd-group" id="wd-group">
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            </Form.Select>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col className="text-end">
              <Form.Label htmlFor="wd-group">Display Grade As:</Form.Label>
            </Col>
            <Col>
            <Form.Select name="wd-display-grade-a" id="wd-display-grade-a">
            <option value="Percentage">Percentage</option>
            <option value="Numeric">Numeric</option>
            </Form.Select>
            </Col>
            </Row>
        
        <Row className="mb-2">
            <Col className="text-end">
              <Form.Label htmlFor="wd-group">Display Grade As:</Form.Label>
            </Col>
            <Col>
            <Form.Select name="wd-display-grade-a" id="wd-display-grade-a">
            <option value="Percentage">Percentage</option>
            <option value="Numeric">Numeric</option>
            </Form.Select>
            </Col>
            </Row>
  
        <div className="border p-3 rounded mb-2">
        <Row className="mb-2">
            <Col className="text-end">
              <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
            </Col>
            <Col>
            <Form.Select name="wd-submission-type" id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="Hand-in">Hand-in</option>
            </Form.Select>
            </Col>
            </Row>

            <Row className="mb-2">
            <Col className="text-end">
              <Form.Label htmlFor="online-submission-type">Online Submission Type</Form.Label>
            </Col>
            <Col>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Upload" />
            {/* <Form.Control type="checkbox" id="wd-text-entry" name="wd-text-entry" value="text-entry"></Form.Control>
            <Form.Label htmlFor="wd-text-entry">Text Entry</Form.Label><br />
            <Form.Control type="checkbox" id="wd-website-url" name="wd-website-url" value="website-url"></Form.Control>
            <Form.Label htmlFor="wd-website-url">Website URL</Form.Label><br />
            <Form.Control type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="media-recordings"></Form.Control>
            <Form.Label htmlFor="wd-media-recordings">Media Recordings</Form.Label><br />
            <Form.Control type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="wd-student-annotation"></Form.Control>
            <Form.Label htmlFor="wd-student-annotation">Student Annotation</Form.Label><br />
            <Form.Control type="checkbox" id="wd-file-upload" name="wd-file-upload" value="wd-file-upload"></Form.Control>
            <Form.Label htmlFor="wd-file-upload">File Upload</Form.Label><br /> */}
            </Col>
            </Row>
            </div>

    <div className="border p-3 rounded">
    <Row className="mb-2">
    <Col className="text-end">
    <Form.Label htmlFor="wd-assign">Assign</Form.Label>
    </Col>
    <Col >
    <Form.Group controlId="wd-assign-to">
      <Form.Label>Assign to</Form.Label>
    <Form.Control as="select" defaultValue="Everyone">
      <option>Everyone</option>
      <option>Accelerated Students</option>
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>

    <Row className="mb-2">
        <Col  className="text-end">
            <Form.Label htmlFor="wd-due-date">Due:</Form.Label>
        </Col>
        <Col >
            <Form.Control id="wd-due-date" type="date" className="w-100" />
        </Col>
    </Row>


    <Row className="mb-2">
        <Col className="text-end">
            <Form.Label htmlFor="wd-available-from">Available From:</Form.Label>
        </Col>
        <Col >
            <Form.Control id="wd-available-from" type="date" className="w-100" />
        </Col>
        <Col  className="text-end">
            <Form.Label htmlFor="wd-available-until">Available Until:</Form.Label>
        </Col>
        <Col >
            <Form.Control id="wd-available-until" type="date" className="w-100" />
        </Col>
    </Row>
</div>

<div className = "right-aligned-assignment-editor-buttons justify-content-end mt-2">
<Button size="lg" className="me-1 float-end" id="wd-add-assignment" variant="danger">
        Save
        </Button>
        <Button size="lg" className="me-1 float-end" id="wd-add-assignment-group" variant="outline-secondary">
        Cancel
        </Button>
  
        </div>


{/* 

            <div className="border p-3 rounded">
            <Row>
                <Col className="text-end" style={{ paddingRight: "10px" }}>
                    <Form.Label htmlFor="wd-assign">Assign</Form.Label>
                </Col>
                <Col>
                <Form.Group controlId="wd-assign-to">
                <Form.Label><b>Assign to</b></Form.Label>
                <Form.Control as="select" defaultValue="Everyone">
                  <option>Everyone</option>
                  <option>Accelerated Students</option>
                </Form.Control>
              </Form.Group>
              
              
                <Form.Label htmlFor="wd-due-date">Due:</Form.Label>
                <Form.Control id="wd-due-date" type="date" /> 


                
                <Row>
                  <Col>
                  <Form.Label htmlFor="wd-available-from">Available From:</Form.Label>
                  <Form.Control id="wd-available-from" type="date" className="w-100"/>
                  </Col> 
                  <Col>
                  <Form.Label htmlFor="wd-available-until">Available Until:</Form.Label>
                  <Form.Control id="wd-available-until" type="date" className="w-100"/>  
                  </Col>
                </Row>
            
                </Row>
            </div> */}

           
      
      </div>
      </Container>
      
  );}
  