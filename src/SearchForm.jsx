import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchForm(props) {
  return (
    <div>
      <Form inline>
        <FormControl type="text" placeholder="Enter World Name Here" className="mr-sm-2" />
        <Button class="btn btn-light">Search</Button>
      </Form>
    </div>
  );
}

export default SearchForm;
