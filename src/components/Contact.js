import React from "react";
import { Form, Button } from "react-bootstrap";
import { Grid, Cell, List, ListItemContent } from "react-mdl";
import contact from "../img/contact.png";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-body" style={{ textAlign: "center" }}>
        <Grid className="contact-grid">
          <Cell col={6} style={{ textAlign: "center" }}>
            <img
              src={contact}
              alt="contact"
              style={{ height: "200px", textAlign: "center" }}
            />
            <h3>Contact us!</h3>

            <hr />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}></p>
            <div className="contact-lsit">
              <List>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamilly: "Anton" }}
                >
                  <i
                    className="fa fa-phone-square"
                    aria-hidden="true"
                    style={{ paddingRight: "10px" }}
                  />
                  +1 503-960-6547
                </ListItemContent>
              </List>
              <List>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamilly: "Anton" }}
                >
                  <i
                    className="fa fa-envelope-square"
                    aria-hidden="true"
                    style={{ paddingRight: "10px" }}
                  />
                  <a href="mailto:jwpeterkim@gmail.com">jwpeterkim@gmail.com</a>
                </ListItemContent>
              </List>
              <List>
                <ListItemContent
                  style={{ fontSize: "25px", fontFamilly: "Anton" }}
                >
                  <i
                    className="fa fa-home"
                    aria-hidden="true"
                    style={{ paddingRight: "10px" }}
                  />
                  Chicago, IL
                </ListItemContent>
              </List>
            </div>
          </Cell>
          <Cell col={6}>
            {" "}
            <Form className="contact-form" id="contactForm">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name / Organization</Form.Label>
                <Form.Control type="text" placeholder="" id="name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  id="email"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="000-000-0000"
                  id="phone"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Inquiry type</Form.Label>
                <Form.Control as="select" type="text" id="inquiryType">
                  <option>Please select one</option>
                  <option>Job related questions - job seeker</option>
                  <option>Job related questions - recruiter</option>
                  <option>Login/signup related issue</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please leave comments here."
                  type="text"
                  id="comment"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ background: "#55582b" }}
              >
                Submit
              </Button>
            </Form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
