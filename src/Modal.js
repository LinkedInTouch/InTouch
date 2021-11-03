import * as React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const SModalOverlay = styled.div`
  background-color: antiquewhite;
  height: 100vh;
  left: 0;
  opacity: 0.5;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 500;
`;

const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  width: 50%;
  z-index: 1000;
`;

const SModal = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  margin: 1.875rem;
  max-width: 500px;
  position: relative;
  z-index: 100;
`;

const SHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1.875rem 0.9375rem 1.875rem 0.9375rem;
`;

const STitle = styled.h5`
  margin-bottom: 0.3125rem;
`;

const SButton = styled.button`
  border-top: 1px solid #F0F0F0;
  color: #6D087C;
  cursor: pointer;
  font-weight: bold;
  padding: 0.9375rem;
  width: 100%;
`;

const SDescription = styled.span`
  color: #6D087C;
  text-align: left-align;
`;

const Stextarea = styled.textarea`
  color: #6D087C;
  text-align: left-align;
`;

const Modal = ({ isVisible, hideModal }) => {

  return isVisible
    ? createPortal(
        <React.Fragment>
          <SModalOverlay />
          <SModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal>
              <div className="modalContainer">
                <img id="icon" className="icon" src="https://cdn5.vectorstock.com/i/1000x1000/42/09/connection-vector-28634209.jpg" height="200" width="200"></img>
                <h1 id="name" className="connectionName">Will Sentance</h1>
                <p className="leftText left" id="groups">Groups</p>
                <form id="dropdown" action="/action_page.php">
                  <label for="groups"></label>
                  <select name="groups" id="groupsdd">
                    <option value="zebras">Zebras</option>
                    <option value="alligators">Alligators</option>
                    <option value="giraffes">Giraffes</option>
                    <option value="none">None</option>
                  </select>
                  <input type="submit" value="Update"></input>
                </form>
                <p className="leftText left" id="notes">Notes</p>
                <textarea id="notesta" className="right">notes from connections props will go here</textarea>
                <p className="leftText left" id="company">Company</p>
                <p id="companyp" className="right">Google</p>
                <p className="leftText left" id="positiont">Position</p>
                <p id="positionp" className="right">Sr Software Enginner</p>
                <SButton onClick={hideModal}>
                  Update
                </SButton>
                <SButton onClick={hideModal}>
                  Close
                </SButton>
              </div>
              
              
            </SModal>
          </SModalWrapper>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;