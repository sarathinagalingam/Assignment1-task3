import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import './task.css'

const Container = styled.div`
    border: 1px solid lightgrey;
    padding:8px;
    margin-bottom:8px;
    border-radius:5px;
    background-color:white;
    
    
`
// background-color:${props => (props.isDragging ? 'lightgreen' : 'white')};

function Task(props) {
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                   {/* <header id="boxid">
                   <img id="image" src={props.task.image} alt="Girl in a jacket" width="30" height="30"></img>
                    <span id="name">{props.task.content}</span>
                   </header> */}
                    
                    <p>{props.task.cont}</p>
                </Container>
            )}
            
        </Draggable>
    )
}

export default Task;