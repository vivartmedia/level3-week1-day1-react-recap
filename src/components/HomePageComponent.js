//rafce short hand for react arrow function component export
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { getUserData } from '../DataServices/DataServices';


const HomePageComponent = () => {
    const [userInfo, setUserInfo] = useState({}); //userInfo is a state Vraiable set to an empty object
    const [newPerson, setNewPerson] = useState(true); // newPErson is a state Variable set to a boolean value

    const navigate = useNavigate(); //Reacts-router-dom's method for changing URL locations

        const handlePageChange = () => {
            navigate('/profile');
        }
        // Everytime The componenet is re-rendered or a state is changed the useEffect hook fires.
        useEffect(()=>{

            const getData = async () => {
                const fetchedData = await getUserData();
                console.log(fetchedData);
                setUserInfo(fetchedData);
            }

            getData();

        }, [newPerson])//Dependancy Array, detereminds when the useEffect fires

        const handleNewPerson = () => {
            setNewPerson(!newPerson);
        }

  return (
    <div>
      <h1>Hello this is our Home Page</h1>
        {/* if the left side expression is truthy the the right side is returned */}
        
      <h2>{userInfo.name && userInfo.name.title} {userInfo.name && userInfo.name.first} {userInfo.name && userInfo.name.last}</h2>

      <Button variant="secondary" onClick={handlePageChange}>Change to Profile Page</Button>{' '}
      <Button variant="warning" onClick={handleNewPerson}>Get New Person</Button>{' '}
    </div>
  )
}

export default HomePageComponent
