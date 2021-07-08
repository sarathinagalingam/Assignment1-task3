
// const data = {
//   lanes: [
//     {
//       id: 'lane1',
//       title: 'Planned Tasks',
//       label: '2/2',
//       cards: [
//         {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins',editable:true},
//         {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
//       ]
//     },
//     {
//       id: 'lane2',
//       title: 'Completed',
//       label: '0/0',
//       cards: []
//     },
//     {
//       id: 'lane1',
//       title: 'Planned Tasks',
//       label: '2/2',
//       cards: [
//         {id: 'Card11', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
//         {id: 'Card12', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
//       ]
//     },
//   ]
// }



// function App() {
//   return (
//     <div className="App">
//      {/* <Card class="card">
//           <CardContent>
//           <Typography
//             style={{ fontSize: 14 }}
//             color="textSecondary"
//             gutterBottom
//           >
//             Greetings of the day
//           </Typography>
//           <Typography variant="h5" component="h2">
//             How are you ?
//           </Typography>
//           <Typography
//             style={{
//               marginBottom: 12,
//             }}
//             color="textSecondary"
//           >
//             Keep Motivated
//           </Typography>
//           <Typography variant="body2" component="p">
//             Stay Happy
//           </Typography>
//           </CardContent>
//           <CardActions>
//           <Button size="small">Stay Safe.....</Button>
//         </CardActions>  
//      </Card> */}
//  {/* <Board data={data} /> */}

     
//     </div>
//   );
// }


import React, { useState } from 'react'
import styled from 'styled-components'
import dataset from './data/index'
import Column from './component/col'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import './App.css'

const Container = styled.div`
    display : flex;
   
`
//align-items: flex-start;
const App = () => {
  const [data, setData] = useState(dataset)

  const onDragEnd = result => {
          const { destination, source, draggableId, type } = result;
              if (destination.droppableId === source.droppableId && destination.index === source.index) { return }
              if (type === 'column') {
                  const newColumnOrder = Array.from(data.columnOrder);
                       newColumnOrder.splice(source.index, 1);
                       newColumnOrder.splice(destination.index, 0, draggableId);
                  const newState = {
                      ...data,
                      columnOrder: newColumnOrder
                  }
                  setData(newState)
                  return;
               }
        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }
            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn
                }
            }
            setData(newState)
            return;
        }
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }
        
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }

        setData(newState)
  }

  return (
    <div class="App">
      <div class="header"></div>
      <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {(provided) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {data.columnOrder.map((id, index) => {
              const column = data.columns[id]
              const tasks = column.taskIds.map(taskId => data.tasks[taskId])

              return <Column key={column.id} column={column} tasks={tasks} index={index} />
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  )
}

export default App;
