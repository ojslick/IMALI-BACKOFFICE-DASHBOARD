import styled from 'styled-components';
import { OverviewCards } from './OverviewCards';
import { OverviewTable } from './OverviewTable';

const Container = styled.div`
	padding-top: 58px;
`;

const TextOverview = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 24px;
`;

export const Overview = () => (
	<Container>
		<TextOverview>Overview</TextOverview>
		<OverviewCards />
		<OverviewTable />
	</Container>
);
