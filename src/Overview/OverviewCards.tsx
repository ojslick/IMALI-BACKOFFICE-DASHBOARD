import styled from 'styled-components';
import {
	IconRepayment,
	IconTransactions,
	IconWallet,
} from '../components/icons';
import { OverviewCard } from './OverviewCard';

const CardContainer = styled.div`
	margin-top: 36px;
	display: flex;
	justify-content: space-between;
`;

export const OverviewCards = () => (
	<CardContainer>
		<OverviewCard
			icon={<IconWallet />}
			text="Total outstanding balance"
			amount="6,709,288"
		/>
		<OverviewCard
			icon={<IconRepayment />}
			text="Total repayment pending"
			amount="72,864"
		/>
		<OverviewCard
			icon={<IconTransactions />}
			text="Total trasaction counts"
			amount="3,062"
		/>
	</CardContainer>
);
