import { FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import styled from 'styled-components';
import { DefaultCards } from './DefaultCards';
import { DefaultsTable } from './DefaultsTable';

const Container = styled.div`
	padding-top: 58px;
`;

const TextDefualters = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 24px;
`;

export const Defaults = () => (
	<div>
		<Button
			icon={<FilterOutlined />}
			style={{
				position: 'absolute',
				right: 48,
				marginTop: 48,
				borderRadius: 10,
			}}
			size="large"
		>
			Filter
		</Button>
		<Container>
			<TextDefualters>Defualters</TextDefualters>
			<DefaultCards />
			<DefaultsTable />
		</Container>
	</div>
);
