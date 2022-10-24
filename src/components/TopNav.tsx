import styled from 'styled-components';
import { IconArrowDown, IconAvatar, IconNotification } from './icons';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 82px;
	padding: 16px 0 16px 48px;
	border-bottom: 1.5px solid #e5e5e5;
`;

const TextGreeting = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 24px;
`;

const TextGreetingMessage = styled.div`
	color: #707070;
	font-weight: 400;
	font-size: 14px;
`;

const FlexRight = styled.div`
	display: flex;
	align-items: center;
	margin-right: 108px;
`;

const VerticalLine = styled.div`
	border: 1px solid #eaeaea;
	height: 39px;
	margin-right: 24px;
`;

const UserContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

const TextUserName = styled.div`
	color: #222222;
	font-weight: 500;
	font-size: 16px;
	margin-right: 13px;
`;

const UserNameContainer = styled.div`
	height: 19px;
	display: flex;
	align-items: center;
`;

const TextVendorId = styled.div`
	color: #707070;
	font-weight: 400;
	font-size: 12px;
`;

export const TopNav = () => (
	<Container>
		<div>
			<TextGreeting>Hello Alex</TextGreeting>
			<TextGreetingMessage>
				Here’s what’s going on with your account.
			</TextGreetingMessage>
		</div>

		<FlexRight>
			<IconNotification style={{ marginRight: 36 }} />
			<VerticalLine />
			<UserContainer>
				<IconAvatar style={{ marginRight: 8 }} />
				<div>
					<UserNameContainer>
						<TextUserName>Alex</TextUserName>
						<IconArrowDown />
					</UserNameContainer>
					<TextVendorId>Vendor ID: 3945823</TextVendorId>
				</div>
			</UserContainer>
		</FlexRight>
	</Container>
);
