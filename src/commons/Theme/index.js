import { createTheme } from '@mui/material';

// Dinh nghia cac color va tham so cho css
const theme = createTheme({
	color: {
		primary: '#1976D2',
		secondary: '#4CAF50',
		error: '#E64A19',
	},
	typoraphy: {
		fontFamily: 'Roboto',
	},
	shape: {
		borderRadius: 4,
		background: '#7C4DFF',
		textColor: '#ffffff',
		border: '#CCCCCC',
	},
});

export default theme;
