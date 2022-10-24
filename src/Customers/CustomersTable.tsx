import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserDetails } from '../components/UserDetails';

interface DataType {
	key: string;
	id: string;
	customer: React.ComponentProps<typeof UserDetails>;
	date: string;
	kycStatus: string[];
}

const Container = styled.div`
	margin-top: 48px;
`;

const TableActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CustomersTable = () => {
	const columns: ColumnsType<DataType> = [
		{ title: 'ID', dataIndex: 'id', key: 'id' },
		{
			title: 'CUSTOMER',
			dataIndex: 'customer',
			key: 'customer',
			render: (userDetails) => (
				<UserDetails
					name={userDetails.name}
					phoneNumber={userDetails.phoneNumber}
				/>
			),
		},
		{
			title: 'DATE REGISTERED',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'KYC STATUS',
			dataIndex: 'kycStatus',
			key: 'kycStatus',
			render: (_, { kycStatus }) => (
				<>
					{kycStatus.map((status) => {
						return (
							<Tag color="green" key={status}>
								{status.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			dataIndex: 'action',
			key: 'action',
			render: (_, { kycStatus }) => <Link to="/customer">View</Link>,
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			id: '#3066',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			date: 'Jan 6, 2022',
			kycStatus: ['Verified'],
		},
		{
			key: '2',
			id: '#3066',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			date: 'Jan 6, 2022',
			kycStatus: ['Verified'],
		},
		{
			key: '3',
			id: '#3066',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			date: 'Jan 6, 2022',
			kycStatus: ['Verified'],
		},
	];

	return (
		<Container>
			<TableActionsContainer>
				<Input
					size="large"
					placeholder="Search for customer’s name"
					prefix={<SearchOutlined />}
					style={{ borderRadius: 10, width: 447 }}
				/>
				<Button size="large" style={{ borderRadius: 10 }}>
					Export
				</Button>
			</TableActionsContainer>
			<Table
				rowSelection={{
					type: 'checkbox',
				}}
				columns={columns}
				dataSource={data}
				style={{ marginTop: 16 }}
			/>
		</Container>
	);
};
