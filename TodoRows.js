import React from "react";
import TodoForm from "../ToDoList/TodoForm";
import Todo from "../ToDoList/Todo";
import {Container} from '../Styled/ButtonSty'
import {Button} from '../Styled/ButtonSty'
import {Paper,Grid,Avatar} from '@mui/material'
import FactCheckIcon from '@mui/icons-material/FactCheck';;
export default class TodoList1 extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };

  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
            
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };

  render() {
    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}><FactCheckIcon/></Avatar>
                    <h2>Todo List</h2>
                    </Grid>
        <Container>
      <div style={{justifyContent: "center"}}>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <Button secondary onClick={() => this.updateTodoToShow("all")}>All</Button>
          <Button secondary onClick={() => this.updateTodoToShow("active")}>
            Active
          </Button>
          <Button secondary onClick={() => this.updateTodoToShow("complete")}>
            Complete
          </Button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <Button secondary onClick={this.removeAllTodosThatAreComplete}>
              Remove all complete todos
            </Button>
          </div>
        ) : null}
        <div>
          <Button secondary onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            Toggle all complete: {`${this.state.toggleAllComplete}`}
          </Button>
        </div>
      </div>
      </Container>
      </Paper>
        </Grid>
    );
  }
}
