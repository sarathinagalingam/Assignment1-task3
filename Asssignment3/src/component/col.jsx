import React from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    width:220px;
    height:auto;
    display:flex;
    flex-direction: column;
    background-color:#E0E0E0;
`;
const Title = styled.h3`
    padding: 8px
    height:auto;
`;
const TaskList = styled.div`
    padding: 8px;
  
    min-height:100px;
`;
//background-color: ${props => (props.isDraggingOver ? 'white' : 'inherit')};
function Column(props) {
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}></Task>)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>

            )}
        </Draggable>
    )
}

export default Column;