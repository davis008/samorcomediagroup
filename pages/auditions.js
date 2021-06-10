import Layout from "../components/Layout"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import { useForm} from '@formspree/react';


function Auditions(){
    const [state, handleSubmit] = useForm("xpzkrwbz");
  if (state.succeeded) {
      return <p>Thanks for sending details!</p>;
  }
    return (
    <Layout>
        <br/>
  <Form onSubmit={handleSubmit}>
  
   
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">FullName</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      name="name"
      placeholder="Fullname"
      aria-label="  Fullname"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  
  <Form.Group controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="tel" name="tel" placeholder="Enter Phone" />
  </Form.Group>
 
  <Form.Group controlId="formBasicLocation">
    <Form.Label>Residence</Form.Label>
    <Form.Control type="text" name="location" placeholder="Enter Location" />
  </Form.Group>
 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
 
  <Button variant="primary" type="submit" disabled={state.submitting}>
    Submit
  </Button>
</Form>
   
      
    </Layout>
);
}
export default Auditions;
