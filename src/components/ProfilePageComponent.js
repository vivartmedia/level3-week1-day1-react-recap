import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const ProfilePageComponent = () => {
    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate('/');
    }
    
  return (
    <div>
      <h1>This is the Profile Page</h1>
      <Button variant="success" onClick={handlePageChange}>Go Back to homepage</Button>{' '}

    </div>
  )
}

export default ProfilePageComponent
