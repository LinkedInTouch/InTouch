import React from "react";
import { useDrag } from 'react-dnd'; 
import { prependOnceListener } from "superagent";
import Modal from "./Modal";
import useModal from "./useModal";

export default function Connection (props) {
    const {isVisible, toggleModal} = useModal();
    console.log(props.firstName);
    const [{isDragging}, drag] = useDrag(() => ({
        type: "connectionImage",
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return (
        <span>
            <img onClick={toggleModal} className='connectionImage' ref = {drag} src = {props.url}/>
            <Modal firstName={props.firstName} isVisible={isVisible} hideModal={toggleModal}/>
        </span>
    )

}