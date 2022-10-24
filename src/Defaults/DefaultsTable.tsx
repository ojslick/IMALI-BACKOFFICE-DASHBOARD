import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserDetails } from '../components/UserDetails';

interface DataType {
	key: string;
	driver: React.ComponentProps<typeof UserDetails>;
	loanAmount: string;
	dateRequested: string;
	loanStatus: string[];
}

const Container = styled.div`
	margin-top: 48px;
`;

const TableActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DefaultsTable = () => {
	const columns: ColumnsType<DataType> = [
		{
			title: 'DRIVER',
			dataIndex: 'driver',
			key: 'driver',
			render: (userDetails) => (
				<UserDetails
					name={userDetails.name}
					phoneNumber={userDetails.phoneNumber}
				/>
			),
		},
		{
			title: 'LOAN AMOUNT',
			dataIndex: 'loanAmount',
			key: 'loanAmount',
		},
		{
			title: 'DATE REQUESTED',
			dataIndex: 'dateRequested',
			key: 'dateRequested',
		},
		{
			title: 'LOAN STATUS',
			dataIndex: 'loanStatus',
			key: 'loanStatus',
			render: (_, { loanStatus }) => (
				<>
					{loanStatus.map((status) => {
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
			key: 'View',
			render: () => <Link to="#">View</Link>,
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			driver: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			loanAmount: 'NGN34,000',
			dateRequested: 'Jan 6, 2022',
			loanStatus: ['Active'],
		},
		{
			key: '2',
			driver: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			loanAmount: 'NGN34,000',
			dateRequested: 'Jan 6, 2022',
			loanStatus: ['Active'],
		},
		{
			key: '3',
			driver: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			loanAmount: 'NGN34,000',
			dateRequested: 'Jan 6, 2022',
			loanStatus: ['Active'],
		},
	];

	return (
		<Container>
			<TableActionsContainer>
				<Input
					size="large"
					placeholder="Search for driver’s name"
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
