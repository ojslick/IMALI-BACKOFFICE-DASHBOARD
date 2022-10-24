import { ReactElement } from 'react';
import styled from 'styled-components';

interface IOverviewCard {
	title: string;
	icon: ReactElement;
	percentage: string;
	amount: string;
}

const Container = styled.div`
	height: 192px;
	width: 30%;
	background: #ffffff;
	border: 1px solid #eaecf0;
	box-shadow: 0px 1px 12px rgba(16, 24, 40, 0.1);
	border-radius: 8px;
	padding: 24px;
`;

const CardTitle = styled.div`
	font-weight: 500;
	font-size: 16px;
	color: #101828;
`;

const CardAmount = styled.div`
	color: #101828;
	font-weight: 600;
	font-size: 32px;
`;

const StatContainer = styled.div`
	margin-top: 16px;
`;

export const CustomerCard = ({
	title,
	icon,
	percentage,
	amount,
}: IOverviewCard) => (
	<Container>
		<CardTitle>{title}</CardTitle>
		<div style={{ marginTop: 24 }}>
			<CardAmount>{amount}</CardAmount>
			<StatContainer>
				<span>
					{icon}
					<span style={{ color: '#12B76A', marginRight: 8 }}>{percentage}</span>
					<span>vs last month</span>
				</span>
			</StatContainer>
		</div>
	</Container>
);
