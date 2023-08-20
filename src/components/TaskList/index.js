import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import styles from "./styles.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TaskItem from "./../TaskItem";

class TaskList extends Component {
  render() {
    // nham props tu Taskboard
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        {/* Hiển thị các trạng thái như: READY, IN PROGRSS, COMPLETED */}
        {/*  mt = margin top, mb = margin bottom */}
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {/* hiển thị các task và được hiện thị dựa săp xếp dựa vào status của trạng thái */}
          {tasks.map((task) => {
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
          {/* end taskFiltered */}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
