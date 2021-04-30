import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function SearchForm({ handleSubmit, handleChange, searchString }) {
  return (
    <div>
      <Form onSubmit={handleSubmit} className="form-horizontal">
        <FormControl
         type="text"
         placeholder="Enter World Name Here"
         className="mr-sm-2"
         name="searchString"
         required
         onChange={handleChange}
         value={searchString} />
         <br></br>
        <Button type="submit" class="btn btn-light">Search</Button>
      </Form>
    </div>
  );
}

export default SearchForm;
