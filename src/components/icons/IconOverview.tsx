import { CSSProperties } from 'react';

interface IIconOverview {
	fill?: string;
	style?: CSSProperties;
}

export const IconOverview = ({ fill, style }: IIconOverview) => (
	<svg
		style={style}
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill={fill || '#707070'}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2.3 17.5C1.8 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.2 0.5 15.7V2.3C0.5 1.8 0.675 1.375 1.025 1.025C1.375 0.675 1.8 0.5 2.3 0.5H15.7C16.2 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.8 17.5 2.3V15.7C17.5 16.2 17.325 16.625 16.975 16.975C16.625 17.325 16.2 17.5 15.7 17.5H2.3ZM7.25 16V9.75H2V15.7C2 15.7833 2.02933 15.8543 2.088 15.913C2.146 15.971 2.21667 16 2.3 16H7.25ZM8.75 16H15.7C15.7833 16 15.8543 15.971 15.913 15.913C15.971 15.8543 16 15.7833 16 15.7V9.75H8.75V16ZM2 8.25H16V2.3C16 2.21667 15.971 2.146 15.913 2.088C15.8543 2.02933 15.7833 2 15.7 2H2.3C2.21667 2 2.146 2.02933 2.088 2.088C2.02933 2.146 2 2.21667 2 2.3V8.25Z"
			fill={fill || '#707070'}
		/>
	</svg>
);