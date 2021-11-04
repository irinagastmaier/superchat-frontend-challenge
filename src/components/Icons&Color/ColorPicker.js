import styled from 'styled-components';

const Container = styled.span`
	display: inline-flex;
	align-items: center;
	width: 8rem;
	height: 4rem;
	padding: 0.5rem;

	input[type='color'] {
		margin-right: 0.3rem;
		-webkit-appearance: none;
		border: none;
		width: auto;
		height: auto;
		cursor: pointer;
		&::-webkit-color-swatch-wrapper,
		&::-moz-color-swatch {
			padding: 0;
			width: 0.875rem;
			height: 0.875rem;
		}
		&::-webkit-color-swatch,
		&::-moz-color-swatch {
			border: none;
			padding: 0;
		}
	}

	input[type='text'] {
		border: none;
		width: 100%;
		font-size: 14px;
		background-color: #fafafa;
		color: #3d3e42;
	}
`;

export default function ColorPicker(props) {
	return (
		<Container>
			<input type="color" {...props} />
			<input type="text" {...props} />
		</Container>
	);
}
