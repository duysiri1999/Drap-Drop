import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import Task from './Task';


const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
width: 220px;

display: flex;
flex-direction: column;
`

const Title = styled.h3`
  padding: 8px;
`

const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
`
function Column({column,tasks}) {
    console.log(column, tasks)
    return ( 
    <Container>
        <Title>{column.title} {column.taskIds.length}</Title>
        <Droppable droppableId={`${column.id}`} type="TASK">
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                          background: snapshot.isDraggingOver
                        //     ? "lightblue"
                        //     : "lightgrey",
                        //   padding: 4,
                        //   width: 250,
                        //   minHeight: 500
                        }}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
     );
}

export default Column;