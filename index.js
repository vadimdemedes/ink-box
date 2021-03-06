import {h, renderToString} from 'ink';
import PropTypes from 'prop-types';
import boxen from 'boxen';

const Box = props => {
	const text = renderToString(<span>{props.children}</span>);
	return <span>{boxen(text, props)}</span>;
};

Box.propTypes = {
	children: PropTypes.any.isRequired,
	borderColor: PropTypes.string,
	borderStyle: PropTypes.oneOfType([
		PropTypes.oneOf([
			'single',
			'double',
			'round',
			'single-double',
			'double-single',
			'classic'
		]),
		PropTypes.shape({
			topLeft: PropTypes.string,
			topRight: PropTypes.string,
			bottomLeft: PropTypes.string,
			bottomRight: PropTypes.string,
			horizontal: PropTypes.string,
			vertical: PropTypes.string
		})
	]),
	dimBorder: PropTypes.bool,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			top: PropTypes.number,
			right: PropTypes.number,
			bottom: PropTypes.number,
			left: PropTypes.number
		})
	]),
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			top: PropTypes.number,
			right: PropTypes.number,
			bottom: PropTypes.number,
			left: PropTypes.number
		})
	]),
	float: PropTypes.oneOf([
		'right',
		'center',
		'left'
	]),
	backgroundColor: PropTypes.string,
	align: PropTypes.oneOf([
		'left',
		'center',
		'right'
	])
};

module.exports = Box;
