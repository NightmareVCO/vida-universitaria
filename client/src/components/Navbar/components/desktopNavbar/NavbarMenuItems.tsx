import type { NavItem } from '@data/_types/types';

type NavbarMenuItemsProps = {
	items: NavItem[];
};

export default function NavbarMenuItems(props: NavbarMenuItemsProps) {
	const { items } = props;

	return (
		<>
			{items.map((item) => (
				<li className="nav-item" key={item.title}>
					{item.children ? (
						<>
							<a href="#/" className={`nav-link dropdown-toggle ${item.isActive ? 'active' : ''}`}>
								{item.title}
							</a>
							<ul className="dropdown-menu">{NavbarMenuItems({ items: item.children })}</ul>
						</>
					) : (
						<a href={item.link} className="nav-link">
							{item.title}
						</a>
					)}
				</li>
			))}
		</>
	);
}
