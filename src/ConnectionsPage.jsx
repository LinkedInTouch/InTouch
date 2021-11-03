import React from "react";
import Connection from "./Connection";
// import axios from 'axios';

const group = [
  {
    id: 4,
    url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG6IUJLyqXFjg/profile-displayphoto-shrink_800_800/0/1635467283387?e=1641427200&v=beta&t=EJn5xcVZ8qI9qFWSg4GiMkZ8IOeNaHJuArJOIrefwiQ',
}
];

let ConnectionList = [
    {
        id: 1,
        url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGVhVOrOykpVg/profile-displayphoto-shrink_800_800/0/1620960712854?e=1641427200&v=beta&t=0DjyYOExOB02i0Hp7FKVXKD_XIetFlcM1KQBG94pvAE',
    },
    {
        id: 2,
        url: 'https://media-exp1.licdn.com/dms/image/C4E03AQE9g3iBziidTg/profile-displayphoto-shrink_800_800/0/1610317078397?e=1641427200&v=beta&t=Jn5CWuyUrYC49rEtNWid3QAvgcnc2dPu_XWmC8mlUXc',
    },
    {
        id: 3,
        url: 'https://media-exp1.licdn.com/dms/image/C4D03AQHSEiRMOsTa3A/profile-displayphoto-shrink_800_800/0/1525393074164?e=1641427200&v=beta&t=tzyrl1oErsEB2TzjGcQo1HLFUvLNrsPtYgVsKpi1jWc',
    },
    {
        id: 4,
        url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG6IUJLyqXFjg/profile-displayphoto-shrink_800_800/0/1635467283387?e=1641427200&v=beta&t=EJn5xcVZ8qI9qFWSg4GiMkZ8IOeNaHJuArJOIrefwiQ',
    },

];

const getConnections = (userId) => {
// takes some user id
  fetch(`/api/database/${userId}`)
      .then(data => data.json())
      .then(data => {
        // console.log(data.connections);
        ConnectionList = data.connections; 
      });
} 

getConnections(1002);
console.log(ConnectionList);




// line 44
export default function ConnectionsPage() {
  
  
  return ( //we need to generate an array of objects before the return statement where each object represents a connection
    <body className = 'connectionsPage'>
      <p> This is the Connections page. </p>
        <div id="group">
          <h1> Groups</h1>
          <div className="groupsContainer" >
          {group.map((connection) =>{
            return <Connection url={connection.url} id={connection.id} />
          })
          
          }
          </div>
        </div>
        <div id="connections">
          <h1> Connections </h1>
          <div className="connectionsContainer">
            {ConnectionList.map((connection) => {
              return <Connection url={connection.url} id={connection.id} />
          })}
          </div>
        </div>
    </body>
  );
}
