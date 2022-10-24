import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Menu } from './components/Menu';
import styled from 'styled-components';
import { TopNav } from './components/TopNav';
import { Overview } from './Overview/Overview';
import { Customers } from './Customers/Customers';
import { Customer } from './Customers/Customer';
import { Defaults } from './Defaults/Defaults';
import { Fulfilments } from './Fulfilments/Fulfilments';
import { Fulfilment } from './Fulfilments/Fulfilment';

const Container = styled.div`
	width: 100%;
	display: flex;
`;

const DashBoardContainer = styled.div`
	height: calc(100vh - 82px);
	background-color: #f7f7f7;
	padding: 0 48px;
`;

function App() {
	return (
		<Container>
			<Menu />
			<div style={{ width: '100%' }}>
				<TopNav />
				<DashBoardContainer>
					<Switch>
						<Route path="/" exact component={Overview} />
						<Route path="/customers" component={Customers} />
						<Route path="/customer" component={Customer} />
						<Route path="/defaults" component={Defaults} />
						<Route path="/fulfilments" component={Fulfilments} />
						<Route path="/fulfilment" component={Fulfilment} />
					</Switch>
				</DashBoardContainer>
			</div>
		</Container>
	);
}

export default App;
