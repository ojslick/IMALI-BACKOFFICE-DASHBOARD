import styled from 'styled-components';
import { CustomerCards } from './CustomerCards';
import { CustomersTable } from './CustomersTable';

const Container = styled.div`
	padding-top: 58px;
`;

const TextOverview = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 24px;
`;

export const Customers = () => (
	<Container>
		<TextOverview>Customers</TextOverview>
		<CustomerCards />
		<CustomersTable />
	</Container>
);
