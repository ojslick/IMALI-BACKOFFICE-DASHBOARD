import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
	IconRepayment,
	IconTransactions,
	IconWallet,
} from '../components/icons';
import { DefaultCard } from './DefaultCard';

const CardContainer = styled.div`
	margin-top: 36px;
	display: flex;
	justify-content: space-between;
`;

export const DefaultCards = () => (
	<CardContainer>
		<DefaultCard
			icon={<IconWallet />}
			text="Total outstanding balance"
			amount="6,709,288"
		/>
		<DefaultCard
			icon={<IconRepayment />}
			text="Total repayment pending"
			amount="72,864"
			statColor="red"
			statIcon={<ArrowDownOutlined />}
			percentage={'10%'}
		/>
		<DefaultCard
			icon={<IconTransactions />}
			text="Total trasaction counts"
			amount="3,062"
			statColor="green"
			statIcon={<ArrowUpOutlined />}
			percentage={'100%'}
		/>
	</CardContainer>
);
