import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Person() {

    const params = useParams();

    const {id} = params;

    const personReq = `https://swapi.dev/api/people/${id}/`

    const [person, setPerson] = useState({});

    
useEffect(() => {
    fetch(personReq)
    .then((res) => { 
        console.log(res);
      return res.json();
    })
    .then((data) => {
        console.log(data);
        setPerson(data);
    })
    .catch(err => console.log(err))
  }, [])

    return(
        <>
            Person

            <pre>
                {JSON.stringify(person, '\t', 4)}
            </pre>
        </>
    )
}


export default Person;