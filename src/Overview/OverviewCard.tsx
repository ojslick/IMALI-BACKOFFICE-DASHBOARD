import { ReactElement } from 'react';
import styled from 'styled-components';

interface IOverviewCard {
	icon: ReactElement;
	text: string;
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

const CardText = styled.div`
	color: #667085;
	font-weight: 500;
	font-size: 14px;
`;

const CardAmount = styled.div`
	color: #101828;
	font-weight: 600;
	font-size: 32px;
`;

export const OverviewCard = ({ icon, text, amount }: IOverviewCard) => (
	<Container>
		{icon}
		<div style={{ marginTop: 24 }}>
			<CardText>{text}</CardText>
			<CardAmount>{amount}</CardAmount>
		</div>
	</Container>
);
