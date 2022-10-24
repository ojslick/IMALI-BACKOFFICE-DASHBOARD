import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserDetails } from '../components/UserDetails';

interface DataType {
	key: string;
	customer: React.ComponentProps<typeof UserDetails>;
	price: string;
	date: string;
	vehicleModel: string;
	colStatus: string[];
}

const Container = styled.div`
	margin-top: 48px;
`;

const TableActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const FulfilmentsTable = () => {
	const columns: ColumnsType<DataType> = [
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
			title: 'PRICE',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: 'DATE',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'VEHICLE MODEL',
			dataIndex: 'vehicleModel',
			key: 'vehicleModel',
		},
		{
			title: 'COL. STATUS',
			key: 'colStatus',
			dataIndex: 'colStatus',
			render: (_, { colStatus }) => (
				<>
					{colStatus.map((status) => {
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
			render: () => <Link to="/fulfilment">View</Link>,
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			price: 'NGN34,000',
			date: 'Jan 6, 2022',
			vehicleModel: 'Mazda - Model Q',
			colStatus: ['Successful'],
		},
		{
			key: '2',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			price: 'NGN34,000',
			date: 'Jan 6, 2022',
			vehicleModel: 'Mazda - Model Q',
			colStatus: ['Successful'],
		},
		{
			key: '3',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			price: 'NGN34,000',
			date: 'Jan 6, 2022',
			vehicleModel: 'Mazda - Model Q',
			colStatus: ['Successful'],
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
