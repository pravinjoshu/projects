import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddMemberForm = () => {
  return (
    <div className="container mt-4">
      {/* Back Button & Title */}
      <div className="d-flex align-items-center text-danger mb-3">
        <Button variant="light" className="me-2">
          ←
        </Button>
        <h4 className="mb-0">Add Member</h4>
      </div>

      <Form className="border p-4 rounded shadow-sm">
        <Row className="mb-3 text-center">
          <Col>
            <div className="d-flex flex-column align-items-center">
              <div
                className="rounded-circle border mb-2 d-flex justify-content-center align-items-center"
                style={{ width: "120px", height: "120px" }}
              >
                <span>Upload photo</span>
              </div>
              <Form.Text className="text-danger">Upload photo*</Form.Text>
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Chapter*</Form.Label>
              <Form.Select>
                <option>Select a chapter</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Join date*</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Renewal date*</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Renewal status</Form.Label>
              <Form.Control placeholder="Renewal status" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>First name*</Form.Label>
              <Form.Control placeholder="Enter first name" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Last name*</Form.Label>
              <Form.Control placeholder="Enter last name" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Date of birth*</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Company*</Form.Label>
              <Form.Control placeholder="Enter company" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Category*</Form.Label>
              <Form.Control placeholder="Enter category" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Blood group</Form.Label>
              <Form.Control placeholder="Enter blood group" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Email*</Form.Label>
              <Form.Control type="email" placeholder="Enter email id" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control placeholder="Enter website" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Sponsor</Form.Label>
              <Form.Control placeholder="Enter sponsor" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Address*</Form.Label>
              <Form.Control placeholder="Enter address" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>City*</Form.Label>
              <Form.Control placeholder="Enter city" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>State*</Form.Label>
              <Form.Control placeholder="Enter state" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Pincode</Form.Label>
              <Form.Control placeholder="Enter pincode" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Mobile number*</Form.Label>
              <Form.Control placeholder="Enter mobile number" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Alternative number</Form.Label>
              <Form.Control placeholder="Enter alternative number" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Office number</Form.Label>
              <Form.Control placeholder="Enter office number" />
            </Form.Group>
          </Col>
        </Row>

        {/* Submit Button */}
        <div className="text-end">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddMemberForm;
