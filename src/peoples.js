import {Card, Table } from 'vienna-ui'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Peoples() {

  const [people, setPeople] = useState([]);

  const [fox, setFox] = useState({image: '', link: ''});

  const foxreq =  'https://randomfox.ca/floof/'

  const swreq = 'https://swapi.dev/api/people'

  const navigate = useNavigate();

  const ClickHandler = (_e, rowData) => {
      console.log(rowData.url);

      const url = rowData.url;

      const id = url.substring(url.lastIndexOf('people/') + 7, url.length - 1);

      navigate('/person/' + id)


  }

useEffect(() => {
  fetch(foxreq)
  .then((res) => { 
    console.log(res);
    return res.json();
  })
  .then((data) => {
    setFox(data);
    console.log(data);
  })
  .catch(err => console.log(err))
}, [])


useEffect(() => {
  fetch(swreq)
  .then((res) => { 
    console.log(res);
    return res.json();
  })
  .then((data) => {
    setPeople(data.results);
    console.log(data);
  })
  .catch(err => console.log(err))
}, [])



  return (
    <div className="App">

          <Card style={{width: "450px"}}>
            <img src = {fox.image} style={{width: "400px"}} /> 
            <a href={fox.link}> {fox.link} </a>
          </Card>

          <Card>
            <Table data = {people} onRowClick={ClickHandler}>
              <Table.Column id='name' title='Имя'>
                      {(person) => person.name}
              </Table.Column>
              <Table.Column id='height' title='Рост'>
                      {(person) => person.height + ' см'}
              </Table.Column>
              <Table.Column id='weight' title='Вес'>
                      {(person) => person.mass + ' кг'}
              </Table.Column>
              <Table.Column id='hair' title='Цвет волос'>
                      {(person) => person.hair_color}
              </Table.Column>
            </Table>
          </Card>
          
          <pre>
            {JSON.stringify(fox, '\t', 4)}
          </pre>

          <pre>
            {JSON.stringify(people, '\t', 4)}
          </pre>
    </div>
  );
}

export default Peoples;
