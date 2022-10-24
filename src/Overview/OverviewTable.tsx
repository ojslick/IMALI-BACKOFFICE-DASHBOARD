import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styled from 'styled-components';
import { UserDetails } from '../components/UserDetails';

interface DataType {
	key: string;
	customer: React.ComponentProps<typeof UserDetails>;
	deposit: string;
	date: string;
	voucherNo: string;
	transStatus: string[];
}

const Container = styled.div`
	margin-top: 48px;
`;

const TableActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const OverviewTable = () => {
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
			title: 'DEPOSIT',
			dataIndex: 'deposit',
			key: 'deposit',
		},
		{
			title: 'DATE',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'VOUCHER NO.',
			dataIndex: 'voucherNo',
			key: 'voucherNo',
		},
		{
			title: 'TRANS. STATUS',
			key: 'transStatus',
			dataIndex: 'transStatus',
			render: (_, { transStatus }) => (
				<>
					{transStatus.map((status) => {
						return (
							<Tag color="green" key={status}>
								{status.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
	];

	const data: DataType[] = [
		{
			key: '1',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			deposit: 'NGN34,000',
			date: 'Jan 6, 2022 • 09:21',
			voucherNo: '00437E',
			transStatus: ['Successful'],
		},
		{
			key: '2',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			deposit: 'NGN34,000',
			date: 'Jan 6, 2022 • 09:21',
			voucherNo: '00437E',
			transStatus: ['Successful'],
		},
		{
			key: '3',
			customer: { name: 'John Brown', phoneNumber: '+234 803 0000' },
			deposit: 'NGN34,000',
			date: 'Jan 6, 2022 • 09:21',
			voucherNo: '00437E',
			transStatus: ['Successful'],
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
