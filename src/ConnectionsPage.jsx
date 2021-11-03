import React, { useState } from "react";
import Connection from "./Connection";


// console.log(ConnectionList);

// line 44
export default function ConnectionsPage(props) {  
  const group = [
    {
      id: 4,
      url: 'https://media-exp1.licdn.com/dms/image/C4E03AQGVhVOrOykpVg/profile-displayphoto-shrink_800_800/0/1620960712854?e=1641427200&v=beta&t=0DjyYOExOB02i0Hp7FKVXKD_XIetFlcM1KQBG94pvAE',
  }
  ];
  
  let ConnectionList = [
      {
          id: 1,
          url: 'https://media-exp1.licdn.com/dms/image/C4E03AQG6IUJLyqXFjg/profile-displayphoto-shrink_800_800/0/1635467283387?e=1641427200&v=beta&t=EJn5xcVZ8qI9qFWSg4GiMkZ8IOeNaHJuArJOIrefwiQ',
      },
  ];
  
  const [connectionsArr, setConnectionsArr] = useState([]);



















  
  const getConnections = async (userId) => {
  // takes some user id
    await fetch(`/api/database/${userId}`)
      .then(data => data.json())
      .then(data => {
        // console.log(data.connections);
        ConnectionList = data.connections; 
        // console.log('after fetch', ConnectionList);
      });
    // console.log('outside of fetch', ConnectionList);
    setConnectionsArr(ConnectionList);
  } 
  
  console.log(getConnections(1002));
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
            {connectionsArr.map((connection) => {
              return <Connection url='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' id={connection.id} company={connection.company} dateConnected={connection.date_connected} firstName={connection.first_name} lastName={connection.last_name} groupId={connection.group_id} notes={connection.notes} position={connection.position} quality={connection.quality} profilePic={connection.profile_picture}/>
          })}
          </div>
        </div>
    </body>
  );
}
