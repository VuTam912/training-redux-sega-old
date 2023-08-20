import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/styles';
import Taskboard from '../Taskboard/index.js';
import theme from './../../commons/Theme';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Taskboard />
			</ThemeProvider>
		);
	}
}

// Áp dụng các styles từ tệp styles.js vào component App
// Sử dụng thư viện @material-ui/core/styles và HOC withStyles
export default withStyles(styles)(App);
