import { Breadcrumb, Input, Tag } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconAvatar, IconDollar } from '../components/icons';

const Container = styled.div`
	padding-top: 64px;
	display: flex;
	flex-direction: column;
	height: calc(100vh - 150px);
	overflow-y: auto;
`;

const CustomerContainer = styled.div`
	display: flex;
	margin-top: 32px;
	flex: 1 0 auto;
	width: 100%;
	background: #ffffff;
	border-radius: 10px;
	padding: 48px;
`;

const TextCustomProfile = styled.div`
	font-weight: 500;
	font-size: 24px;
	color: #222222;
`;

const UserDetailsContainer = styled.div`
	height: 56px;
	display: flex;
	align-items: center;
	margin-top: 24px;
`;

const TextDark = styled.div`
	font-weight: 500;
	font-size: 14px;
	color: #344054;
`;

const TextLight = styled.div`
	font-weight: 400;
	font-size: 12px;
	color: #667085;
`;

const FlexContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 24px;
	width: 100%;
`;

const FlexLeft = styled.div`
	width: 50%;
	padding-right: 37px;
	border-right: 1px solid #e5e5e5;
`;

const FlexRight = styled.div`
	width: 50%;
	padding: 0 48px;
`;

const TextFlexRight = styled.div`
	font-weight: 500;
	font-size: 14px;
	color: #808080;
`;

const AmountCard = styled.div`
	display: flex;
	padding: 16px 24px;
	width: 100%;
	height: 89px;
	border: 1px solid #eaecf0;
	border-radius: 10px;
	margin-top: 16px;
`;

const TextAmount = styled.div`
	font-weight: 600;
	font-size: 24px;
	color: #101828;
`;

const AmountCardLeft = styled.div`
	width: 50%;
	border-right: 1px solid #eaecf0;
`;

const AmountCardRight = styled.div`
	width: 50%;
	padding-left: 49px;
`;

const FlexPendingPayment = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Fulfilment = () => {
	return (
		<Container>
			<Breadcrumb>
				<Breadcrumb.Item>
					<Link to="/fulfilments">Go back</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Oliver Tai</Breadcrumb.Item>
			</Breadcrumb>
			<CustomerContainer>
				<FlexLeft>
					<TextCustomProfile>Customer’s Profile</TextCustomProfile>
					<UserDetailsContainer>
						<IconAvatar style={{ height: 56, width: 56, marginRight: 10 }} />
						<div>
							<TextDark>Oliver Tai</TextDark>
							<TextLight>Customer</TextLight>
						</div>
					</UserDetailsContainer>
					<FlexContainer>
						<div style={{ width: '100%', marginRight: 24 }}>
							<label style={{ color: '#808080' }}>First name</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
						<div style={{ width: '100%' }}>
							<label style={{ color: '#808080' }}>Last name</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
					</FlexContainer>
					<FlexContainer>
						<div style={{ width: '100%', marginRight: 24 }}>
							<label style={{ color: '#808080' }}>Gender</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
						<div style={{ width: '100%' }}>
							<label style={{ color: '#808080' }}>Date of birth</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
					</FlexContainer>
					<FlexContainer>
						<div style={{ width: '100%', marginRight: 24 }}>
							<label style={{ color: '#808080' }}>BVN</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
						<div style={{ width: '100%' }}>
							<label style={{ color: '#808080' }}>Phone Number</label>
							<Input
								style={{
									background: '#FAFAFA',
									height: '52px',
									borderRadius: '10px',
								}}
							/>
						</div>
					</FlexContainer>
					<div style={{ marginTop: 16 }}>
						<label style={{ color: '#808080' }}>Home address</label>
						<Input
							style={{
								background: '#FAFAFA',
								height: '52px',
								borderRadius: '10px',
							}}
						/>
					</div>
					<div style={{ border: '1px solid #EAECF0', marginTop: 24 }}></div>
					<div style={{ marginTop: 16 }}>
						<label style={{ color: '#808080' }}>Location of Purchase</label>
						<Input
							style={{
								background: '#FAFAFA',
								height: '52px',
								borderRadius: '10px',
							}}
						/>
					</div>
					<div style={{ marginTop: 16 }}>
						<label style={{ color: '#808080' }}>Vehicle Model</label>
						<Input
							style={{
								background: '#FAFAFA',
								height: '52px',
								borderRadius: '10px',
							}}
						/>
					</div>
					<div style={{ marginTop: 16 }}>
						<label style={{ color: '#808080' }}>Insurance Provider</label>
						<Input
							style={{
								background: '#FAFAFA',
								height: '52px',
								borderRadius: '10px',
							}}
						/>
					</div>
				</FlexLeft>
				<FlexRight>
					<TextFlexRight style={{ marginTop: 48 }}>
						FULFILMENT DETAILS
					</TextFlexRight>
					<AmountCard>
						<AmountCardLeft>
							<TextFlexRight>Repayment amount</TextFlexRight>
							<TextAmount>₦304,600/Month</TextAmount>
						</AmountCardLeft>
						<AmountCardRight>
							<TextFlexRight>Value of car</TextFlexRight>
							<TextAmount>₦6,300,950</TextAmount>
						</AmountCardRight>
					</AmountCard>
					<AmountCard>
						<AmountCardLeft>
							<TextFlexRight>Repayment duration</TextFlexRight>
							<div style={{ fontWeight: 500, fontSize: 14, color: '#101010' }}>
								6 Months
							</div>
						</AmountCardLeft>
						<AmountCardRight>
							<TextFlexRight>Repayment ends</TextFlexRight>
							<div style={{ fontWeight: 500, fontSize: 14, color: '#101010' }}>
								03 Dec 2022
							</div>
						</AmountCardRight>
					</AmountCard>
					<AmountCard>
						<AmountCardLeft>
							<TextFlexRight>Transaction date</TextFlexRight>
							<div style={{ fontWeight: 500, fontSize: 14, color: '#101010' }}>
								Jan 6, 2022 @ 08:45
							</div>
						</AmountCardLeft>
						<AmountCardRight>
							<TextFlexRight>Status</TextFlexRight>
							<Tag color="green">Active</Tag>
						</AmountCardRight>
					</AmountCard>
					<TextFlexRight style={{ marginTop: 48 }}>
						UPCOMING PAYMENT
					</TextFlexRight>
					<FlexPendingPayment>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<IconDollar style={{ marginRight: 8 }} />
							<div style={{ marginRight: 8 }}>
								<TextDark>1/4 Payment</TextDark>
								<TextLight>21 Jul, 2022</TextLight>
							</div>
							<Tag color="red">Overdue</Tag>
						</div>
						<TextDark>NGN 34,600</TextDark>
					</FlexPendingPayment>
					<FlexPendingPayment>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<IconDollar style={{ marginRight: 8 }} />
							<div style={{ marginRight: 8 }}>
								<TextDark>1/4 Payment</TextDark>
								<TextLight>21 Jul, 2022</TextLight>
							</div>
							<Tag color="red">Overdue</Tag>
						</div>
						<TextDark>NGN 34,600</TextDark>
					</FlexPendingPayment>
					<TextFlexRight style={{ marginTop: 48 }}>
						UPCOMING PAYMENT
					</TextFlexRight>
					<FlexPendingPayment>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<IconDollar style={{ marginRight: 8 }} />
							<div style={{ marginRight: 8 }}>
								<TextDark>1/4 Payment</TextDark>
								<TextLight>21 Jul, 2022</TextLight>
							</div>
							<Tag color="red">Overdue</Tag>
						</div>
						<TextDark>NGN 34,600</TextDark>
					</FlexPendingPayment>
					<FlexPendingPayment>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<IconDollar style={{ marginRight: 8 }} />
							<div style={{ marginRight: 8 }}>
								<TextDark>1/4 Payment</TextDark>
								<TextLight>21 Jul, 2022</TextLight>
							</div>
							<Tag color="red">Overdue</Tag>
						</div>
						<TextDark>NGN 34,600</TextDark>
					</FlexPendingPayment>
				</FlexRight>
			</CustomerContainer>
		</Container>
	);
};
