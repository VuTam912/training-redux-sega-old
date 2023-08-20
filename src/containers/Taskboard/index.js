import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles.js";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import PropTypes from "prop-types";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    description: "with my friend",
    status: 2,
  },
  {
    id: 1,
    title: "Play game",
    description: "",
    status: 1,
  },
];

class Taskboard extends Component {
  state = {
    open: false,
  };

  // Display Taskboard
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          // loc du lieu co cung status.value cua STATUSES => SHOW
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          // props de TaskList nhan duoc props
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  // Xu ly close va open a form
  handleClose = () => {
    this.setState({ open: false });
  };

  openForm = () => {
    this.setState({ open: true });
  };

  // Dialog Form
  renderForm() {
    const { open } = this.state; // Xac dinh form dang can open hay close thong qua state
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // XU ly su kien onClick
          onClick={this.openForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: PropTypes.object,
};

// Áp dụng các styles từ tệp styles.js vào component App
// Sử dụng thư viện @material-ui/core/styles và HOC withStyles
export default withStyles(styles)(Taskboard);
