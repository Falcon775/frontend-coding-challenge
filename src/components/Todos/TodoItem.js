import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';

// Material UI
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Tooltip from '@material-ui/core/Tooltip'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ErrorIcon from '@material-ui/icons/Error'

const TodoItem = ({ id, description, dueDate, isComplete, handleUpdate }) => {
    const formatedDueDate = dueDate ? moment(dueDate).format('MMMM Do YYYY') : ''
    const labelId = `checkbox-list-label-${id}`;
    const dateNow = moment()
    const isOverdue = moment(dueDate).isBefore(dateNow) && !isComplete

    return (
        <ListItem key={id} role={undefined} dense button onClick={() => handleUpdate(id)}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={isComplete}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </ListItemIcon>
            <ListItemText primary={description} secondary={formatedDueDate} />
            {isOverdue &&
                <ListItemSecondaryAction>
                    <Tooltip title="Overdue item" placement="top">
                        <IconButton edge="end" aria-label="comments">
                            <ErrorIcon />
                        </IconButton>
                    </Tooltip>
                </ListItemSecondaryAction>
            }
        </ListItem>
    );
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    handleUpdate: PropTypes.func.isRequired,
  };

export default React.memo(TodoItem)