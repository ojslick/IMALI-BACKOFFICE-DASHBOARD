import styled from 'styled-components';
import { IconAvatar } from './icons';

interface IUserDetails {
	name: string;
	phoneNumber: string;
}

const Container = styled.div`
	display: flex;
	align-items: center;
`;

const TextUserName = styled.div`
	color: #101828;
	font-weight: 400;
	font-size: 14px;
`;

const TextPhoneNumber = styled.div`
	color: #667085;
	font-weight: 400;
	font-size: 14px;
`;

export const UserDetails = ({ name, phoneNumber }: IUserDetails) => (
	<Container>
		<IconAvatar style={{ height: 32, width: 32, marginRight: 12 }} />

		<div>
			<TextUserName>{name}</TextUserName>
			<TextPhoneNumber>{phoneNumber}</TextPhoneNumber>
		</div>
	</Container>
);
