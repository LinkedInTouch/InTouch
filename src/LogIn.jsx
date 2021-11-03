import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";

// `${window.location.origin}/linkedin`
function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77l2yl9ia652i4",
    redirectUri: "http://localhost:3000/linkedin",
    // redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
      setCode(code);
      setErrorMessage("");
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
      setCode("");
      setErrorMessage(error.errorMessage);
    },
  });
  const linkedin = "https://i.stack.imgur.com/mKpeu.png"
  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  console.log(code);
     
  return !code ? (
    <div>
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
     />
    </div>
    
  )
  :
  (
    <div>
        {code}
    </div>
  )
}
export default LinkedInPage;

// {/* <div>
//   This is the login page.
//   <a href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=77l2yl9ia652i4&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi">
//     To signup through LinkedIn Click Here
//   </a>
// </div>; */}