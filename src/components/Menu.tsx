import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
	IconImaliPay,
	IconOverview,
	IconCustomers,
	IconDefaults,
	IconFulfilment,
} from './icons';

enum MenuEnum {
	Overview = 'overview',
	Customers = 'customers',
	defaults = 'defaults',
	fulfilment = 'fulfilment',
}
type MenuItemType = 'overview' | 'customers' | 'defaults' | 'fulfilment';
interface IMouseOverMenu {
	name: MenuItemType;
	data: boolean;
}

const Container = styled.div`
	padding: 38px 0 0 48px;
	width: 20%;
	height: 100vh;
	border-right: 1.5px solid #e5e5e5;
`;

const TextQuickMenu = styled.div`
	color: #707070;
	font-weight: 400;
	font-size: 14px;
	margin-top: 51px;
`;

const TextOverview = styled.div<{ menuItemHoverColor?: string }>`
	color: ${(prop: { menuItemHoverColor?: string }) =>
		prop.menuItemHoverColor || ' #707070'};
	font-weight: 400;
	font-size: 16px;
`;

const MenuItemContainer = styled.div`
	margin-top: 40px;
`;

const MenuItem = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	height: 17px;
`;

export const Menu = () => {
	const location = useLocation();
	const [mouseOver, setMouseOver] = useState<IMouseOverMenu | undefined>();

	function getMenuItemColor(menuItem: MenuItemType) {
		if (location.pathname === '/' && menuItem === MenuEnum.Overview) {
			return '#000';
		} else if (location.pathname === `/${menuItem}`) {
			return '#000';
		} else if (mouseOver?.name === menuItem) {
			return mouseOver.data ? '#000' : '#707070';
		}
	}

	return (
		<Container>
			<IconImaliPay />
			<TextQuickMenu>QUICK MENU</TextQuickMenu>
			<MenuItemContainer>
				<MenuItem
					onMouseOver={() =>
						setMouseOver({ name: MenuEnum.Overview, data: true })
					}
					onMouseOut={() =>
						setMouseOver({ name: MenuEnum.Overview, data: false })
					}
				>
					<IconOverview
						style={{ marginRight: 11 }}
						fill={getMenuItemColor(MenuEnum.Overview)}
					/>
					<Link to="/">
						<TextOverview
							menuItemHoverColor={getMenuItemColor(MenuEnum.Overview)}
						>
							Overview
						</TextOverview>
					</Link>
				</MenuItem>
				<MenuItem
					style={{ marginTop: 34 }}
					onMouseOver={() =>
						setMouseOver({ name: MenuEnum.Customers, data: true })
					}
					onMouseOut={() =>
						setMouseOver({ name: MenuEnum.Customers, data: false })
					}
				>
					<IconCustomers
						style={{ marginRight: 11 }}
						fill={getMenuItemColor(MenuEnum.Customers)}
					/>
					<Link to="/customers">
						<TextOverview
							menuItemHoverColor={getMenuItemColor(MenuEnum.Customers)}
						>
							Customers
						</TextOverview>
					</Link>
				</MenuItem>
				<MenuItem
					style={{ marginTop: 34 }}
					onMouseOver={() =>
						setMouseOver({ name: MenuEnum.defaults, data: true })
					}
					onMouseOut={() =>
						setMouseOver({ name: MenuEnum.defaults, data: false })
					}
				>
					<IconDefaults
						style={{ marginRight: 11 }}
						fill={getMenuItemColor(MenuEnum.defaults)}
					/>
					<Link to="/defaults">
						<TextOverview
							menuItemHoverColor={getMenuItemColor(MenuEnum.defaults)}
						>
							Defaults
						</TextOverview>
					</Link>
				</MenuItem>
				<MenuItem
					style={{ marginTop: 34 }}
					onMouseOver={() =>
						setMouseOver({ name: MenuEnum.fulfilment, data: true })
					}
					onMouseOut={() =>
						setMouseOver({ name: MenuEnum.fulfilment, data: false })
					}
				>
					<IconFulfilment
						style={{ marginRight: 11 }}
						fill={getMenuItemColor(MenuEnum.fulfilment)}
					/>
					<Link to="/fulfilments">
						<TextOverview
							menuItemHoverColor={getMenuItemColor(MenuEnum.fulfilment)}
						>
							Fulfilments
						</TextOverview>
					</Link>
				</MenuItem>
			</MenuItemContainer>
		</Container>
	);
};
