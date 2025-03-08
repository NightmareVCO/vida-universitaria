import { navigationData } from '@data/_static/navigation/nav.data';

import type { NavItem } from '@data/_types/types';

export default function AsideNavLink() {
	const getIcon = (title: string) => {
		switch (title) {
			case 'Decanato Estudiantes':
				return 'fa-solid fa-person';
			case 'Arte & Cultura':
				return 'fa-sharp fa-solid fa-music';
			case 'Deportes':
				return 'fa-solid fa-running';
			case 'Grupos Estudiantiles':
				return 'fa-solid fa-users';
			case 'Identidad Católica':
				return 'fa-solid fa-plus';
			case 'Servicios':
				return 'fa-solid fa-cog';
			default:
				return '';
		}
	};

	const renderNavItems = (items: NavItem[]) => {
		return items.map((item, index) => {
			const icon = getIcon(item.title);
			if (index === 0) {
				return <></>;
			}

			if (item.children?.length) {
				return (
					<li key={item.title}>
						<details className="aside-nav-details">
							<summary>
								{icon && <i className={icon} />} {item.title}
							</summary>
							<ul>{renderNavItems(item.children)}</ul>
						</details>
					</li>
				);
			}
			return (
				<li key={item.title}>
					<a href={item.link}>
						{icon && <i className={icon} />} {item.title}
					</a>
				</li>
			);
		});
	};

	return (
		<div className="related-post-area">
			<h3>Navegación</h3>

			<div className="categories bg-transparent p-0 m-0">
				<ul>{renderNavItems(navigationData)}</ul>
			</div>
		</div>
	);
}
