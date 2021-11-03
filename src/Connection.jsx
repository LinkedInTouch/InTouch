import React from "react";
import { useDrag } from 'react-dnd'; 

export default function Connection ({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "connectionImage",
        item: {id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
return (
    <img 
    className='connectionImage' 
    ref = {drag} 
    src = {url}
    style = {{ border: isDragging ? '3px solid white' : '0px'}}
    />
)
}