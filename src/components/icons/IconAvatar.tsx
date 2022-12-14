import { IconOverview } from './IconOverview';

export const IconAvatar = ({
	style,
}: React.ComponentProps<typeof IconOverview>) => (
	<svg
		style={style}
		width="42"
		height="42"
		viewBox="0 0 42 42"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="21" cy="21" r="21" fill="#014342" />
		<mask
			id="mask0_0_8271"
			style={{ maskType: 'alpha' }}
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="42"
			height="42"
		>
			<circle cx="21" cy="21" r="21" fill="#014342" />
		</mask>
		<g mask="url(#mask0_0_8271)">
			<ellipse
				cx="32.0676"
				cy="2.83781"
				rx="16.7432"
				ry="14.7568"
				fill="#80B539"
			/>
		</g>
		<path
			d="M22.1351 26.6758H34.0541V27.5271C34.0541 30.8185 31.3859 33.4866 28.0946 33.4866C24.8033 33.4866 22.1351 30.8185 22.1351 27.5271V26.6758Z"
			fill="#FEAA00"
		/>
	</svg>
);
