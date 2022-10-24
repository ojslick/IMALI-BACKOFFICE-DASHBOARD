import { Button } from 'antd';
import styled from 'styled-components';
import { FulfilmentsTable } from './FulfilmentsTable';

const Container = styled.div`
	padding-top: 58px;
`;

const TextFulfilments = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 24px;
`;

export const Fulfilments = () => (
	<div>
		<Button
			style={{
				position: 'absolute',
				right: 48,
				marginTop: 48,
				borderRadius: 10,
				background: '#014342',
				color: '#fff',
			}}
			size="large"
		>
			Register
		</Button>
		<Container>
			<TextFulfilments>Fulfilment</TextFulfilments>
			<FulfilmentsTable />
		</Container>
	</div>
);
