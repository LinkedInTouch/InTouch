import React from 'react'
const profilePic = "https://i.ibb.co/qkxcnFf/profilepic.jpg";
const firstName = "Joel";
const lastName = "Park";
const email = "joelpark97@gmail.com";

export default function WelcomeHeader() {
  return (

      <div className="welcomeHeader">
        <h1>{`${firstName} ${lastName}`}</h1>
        <img id="profilePic" src={profilePic} height="5%" width="5%"></img>
      </div>

  )
}
