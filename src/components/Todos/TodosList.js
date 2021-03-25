import React, { useEffect, useState, useCallback } from 'react'

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

// API
import API from '../../api/api'

// components
import TodoItem from './TodoItem';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 40,
  },
}));

const TodosList = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false)

  const sortTodos = (todos) => {
    return todos
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      .sort((a, b) => (!!a.dueDate === !!b.dueDate) ? 0 : !!a.dueDate ? -1 : 1)
      .sort((a, b) => (a.isComplete === b.isComplete) ? 0 : a.isComplete ? 1 : -1)
  }

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const todos = await API.getTodos()

        if (todos && todos.length) {
          const sortedTodos = sortTodos(todos)
          setTodos(sortedTodos)
        }

        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    })()
  }, [])

  const handleUpdate = useCallback(async (id) => {
    setLoading(true)
    try {
      const updatingTodoIndex = todos.findIndex(todo => todo.id === id)
      const updatingTodo = todos[updatingTodoIndex]

      const response = await API.updateTodo(id, { isComplete: !updatingTodo.isComplete })

      if (response.status === "success") {
        const updatedTodos = [...todos]

        updatedTodos[updatingTodoIndex] = {
          ...updatingTodo,
          isComplete: !updatingTodo.isComplete
        }

        const sortedTodos = sortTodos(updatedTodos)

        setTodos(sortedTodos)
      }
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }, [todos])

  return (
    <Grid container justify={'center'} alignItems={'center'}>
      <Grid item xs={11} md={6}>
        <Paper className={classes.root}>
          {isLoading && <LinearProgress />}
          <List>
            {todos.map((todo) => {
              const { id, description, dueDate, isComplete } = todo
              return (
                <TodoItem
                  key={id}
                  id={id}
                  description={description}
                  dueDate={dueDate}
                  isComplete={isComplete}
                  handleUpdate={handleUpdate}
                />
              )
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default TodosList