import { ArrowDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { CustomerCard } from './CustomerCard';

const CardContainer = styled.div`
	margin-top: 36px;
	display: flex;
	justify-content: space-between;
`;

export const CustomerCards = () => (
	<CardContainer>
		<CustomerCard
			title="Total customers"
			icon={
				<ArrowDownOutlined
					style={{
						color: '#12B76A',
						width: 11.67,
						height: 11.67,
						marginRight: 8,
					}}
				/>
			}
			percentage="40%"
			amount="2,420"
		/>
		<CustomerCard
			title="Total active customers"
			icon={
				<ArrowDownOutlined
					style={{
						color: '#12B76A',
						width: 11.67,
						height: 11.67,
						marginRight: 8,
					}}
				/>
			}
			percentage="10%"
			amount="1,210"
		/>
		<CustomerCard
			title="Total defaulters"
			icon={
				<ArrowDownOutlined
					style={{
						color: '#12B76A',
						width: 11.67,
						height: 11.67,
						marginRight: 8,
					}}
				/>
			}
			percentage="20%"
			amount="316"
		/>
	</CardContainer>
);
