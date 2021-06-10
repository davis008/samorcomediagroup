import Layout from "../components/Layout"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { useForm, ValidationError } from '@formspree/react';


function Auditions(){
    
  const [state, handleSubmit] = useForm("xpzkrwbz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <Layout>
      <Form onSubmit={handleSubmit}>

    <Form.Group controlId="name">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="brian kuria" name="fullname"/>
  </Form.Group>

  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="john@example.com" name="email" />
    <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
  </Form.Group>

  <Form.Group controlId="phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phone" placeholder="0700000000" name="phone"/>
    <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
  </Form.Group>

  <Form.Group controlId="role">
    <Form.Label>Role</Form.Label>
    <Form.Control type="text" placeholder="Lisa" name="role"/>
    <ValidationError 
        prefix="Role" 
        field="role"
        errors={state.errors}
      />
  </Form.Group>
  <Form.Group controlId="residence">
    <Form.Label>Residence</Form.Label>
    <Form.Control type="text" placeholder="Donholm" name="residence"/>
    <ValidationError 
        prefix="Residence" 
        field="residence"
        errors={state.errors}
      />
  </Form.Group>

  <Button variant="success" type="submit" disabled={state.submitting}>
        Submit
      </Button>

      
    </Form>
    </Layout>
);
}
export default Auditions;
