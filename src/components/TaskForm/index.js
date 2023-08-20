import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import styles from './styles.js';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

class TaskForm extends Component {
	render() {
		const { open, classes, onClose } = this.props;

		return (
			// neu open = true : open va false : close
			<Dialog open={open} onClose={onClose}>
				<DialogTitle>Thêm mới công việc</DialogTitle>
				<DialogContent>
					<TextField
						id='standard-name'
						label='Name'
						className={classes.textField}
						margin='normal'
						variant='standard'
					/>
					<TextField
						id='standard-multiline-flexible'
						label='Multiline'
						multiline
						maxRows={4}
						className={classes.textField}
						margin='normal'
						variant='standard'
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={onClose}>OK</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

// lien voi css in JS (<link href="styles.css")
export default withStyles(styles)(TaskForm);
