import { withStyles } from "@mui/styles"
import React, { Component } from "react"
import styles from "./styles.js"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Fab from "@mui/material/Fab"
import Icon from "@mui/material/Icon"

class TaskItem extends Component {
  render() {
    const { task, classes, status } = this.props
    const { id, title } = task // task o day => const { [ task ] , classes, status }

    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              {/* !!!! */}
              <Typography component="h2">{title}</Typography> {}
            </Grid>
            <Grid item md={4}>
              {/* !!!! */}
              {status.label}
            </Grid>
          </Grid>

          {/* description */}
          <p>{task.description}</p>
        </CardContent>
        {/* CSS in JS | in styles.js */}
        <CardActions className={classes.cardActions}>
          <Fab
            color="primary"
            aria-label="Edit"
            className="classes.fab"
            size="small"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Delete"
            className="classes.fab"
            size="small"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(TaskItem)
