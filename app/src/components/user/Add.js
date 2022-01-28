import React, { useState } from 'react';
import { gql , useMutation } from '@apollo/client'

const MUTATION_REGISTER_USER = gql`
    mutation registerUser (
    $email: String!
    $password: String!
    ) {
        insert_user(object: {email: $email, password: $password}) {
            affected_rows
        }
    }
`;

export const Add = () => {
    const [registerUser, { data, loading, error }] = useMutation(MUTATION_REGISTER_USER)

    const initialState = {
      email: '',
      password: '',
    }

    const [formState, setFormState] = useState(initialState)
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    const handleSubmit = event => {
      event.preventDefault();
      registerUser({
        variables: formState,
      });
      setFormState(initialState)
    }
  
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Email</span>
            <textarea onChange={(e) => setFormState({ ...formState, email: e.target.value })} 
                value={formState.email}></textarea>
          </label>          
          <label>
            <span>Password</span>
            <textarea onChange={(e) => setFormState({ ...formState, password: e.target.value })} 
                value={formState.password}></textarea>
          </label>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
}
