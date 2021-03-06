import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormGroup from '../form-group';
import { v4 } from 'uuid';
import { userRegistrationData } from '../../assets';

export const ProfileRegForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      action='submit'
      onSubmit={handleSubmit}
      className='bg-white rounded p-3 shadow-sm mx-auto'
      style={{ maxWidth: '450px' }}
    >
      {userRegistrationData.profileFields.map(
        ({ id, label, type, required, name }) => (
          <FormGroup
            key={v4()}
            id={id}
            label={label}
            type={type}
            required={required}
            name={name}
            className='mb-3'
          />
        )
      )}
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Link to='/'>
          <Button variant='outline-primary'>Cancel</Button>
        </Link>
        <Button>Register</Button>
      </Container>
    </Form>
  );
};
