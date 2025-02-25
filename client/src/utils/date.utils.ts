export const monthNames = [
	'Ene',
	'Feb',
	'Mar',
	'Abr',
	'May',
	'Jun',
	'Jul',
	'Ago',
	'Sep',
	'Oct',
	'Nov',
	'Dic',
];

export const parseDate = (date: string) => {
	const d = new Date(date);
	return d.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
};
