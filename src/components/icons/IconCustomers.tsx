import { ComponentProps } from 'react';
import { IconOverview } from './IconOverview';

export const IconCustomers = ({
	fill,
	style,
}: ComponentProps<typeof IconOverview>) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill={fill || '#707070'}
		style={style}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4.025 15.3C4.875 14.6667 5.8 14.1667 6.8 13.8C7.8 13.4333 8.86667 13.25 10 13.25C11.1333 13.25 12.2 13.4333 13.2 13.8C14.2 14.1667 15.125 14.6667 15.975 15.3C16.5917 14.6167 17.0833 13.825 17.45 12.925C17.8167 12.025 18 11.05 18 10C18 7.78333 17.221 5.89567 15.663 4.337C14.1043 2.779 12.2167 2 10 2C7.78333 2 5.896 2.779 4.338 4.337C2.77933 5.89567 2 7.78333 2 10C2 11.05 2.18333 12.025 2.55 12.925C2.91667 13.825 3.40833 14.6167 4.025 15.3ZM10 10.75C9.08333 10.75 8.31267 10.4373 7.688 9.812C7.06267 9.18733 6.75 8.41667 6.75 7.5C6.75 6.58333 7.06267 5.81267 7.688 5.188C8.31267 4.56267 9.08333 4.25 10 4.25C10.9167 4.25 11.6873 4.56267 12.312 5.188C12.9373 5.81267 13.25 6.58333 13.25 7.5C13.25 8.41667 12.9373 9.18733 12.312 9.812C11.6873 10.4373 10.9167 10.75 10 10.75ZM10 19.5C8.68333 19.5 7.446 19.25 6.288 18.75C5.12933 18.25 4.125 17.575 3.275 16.725C2.425 15.875 1.75 14.8707 1.25 13.712C0.75 12.554 0.5 11.3167 0.5 10C0.5 8.68333 0.75 7.44567 1.25 6.287C1.75 5.129 2.425 4.125 3.275 3.275C4.125 2.425 5.12933 1.75 6.288 1.25C7.446 0.75 8.68333 0.5 10 0.5C11.3167 0.5 12.5543 0.75 13.713 1.25C14.871 1.75 15.875 2.425 16.725 3.275C17.575 4.125 18.25 5.129 18.75 6.287C19.25 7.44567 19.5 8.68333 19.5 10C19.5 11.3167 19.25 12.554 18.75 13.712C18.25 14.8707 17.575 15.875 16.725 16.725C15.875 17.575 14.871 18.25 13.713 18.75C12.5543 19.25 11.3167 19.5 10 19.5ZM10 18C10.9 18 11.771 17.854 12.613 17.562C13.4543 17.2707 14.2 16.8667 14.85 16.35C14.2 15.85 13.4623 15.4583 12.637 15.175C11.8123 14.8917 10.9333 14.75 10 14.75C9.06667 14.75 8.18767 14.8877 7.363 15.163C6.53767 15.4377 5.8 15.8333 5.15 16.35C5.8 16.8667 6.54567 17.2707 7.387 17.562C8.229 17.854 9.1 18 10 18ZM10 9.25C10.5 9.25 10.9167 9.08333 11.25 8.75C11.5833 8.41667 11.75 8 11.75 7.5C11.75 7 11.5833 6.58333 11.25 6.25C10.9167 5.91667 10.5 5.75 10 5.75C9.5 5.75 9.08333 5.91667 8.75 6.25C8.41667 6.58333 8.25 7 8.25 7.5C8.25 8 8.41667 8.41667 8.75 8.75C9.08333 9.08333 9.5 9.25 10 9.25Z"
			fill={fill || '#707070'}
		/>
	</svg>
);
