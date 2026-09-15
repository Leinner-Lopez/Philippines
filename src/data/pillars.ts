export type PaletteColor = 'primary' | 'secondary' | 'tertiary';

export interface Stat {
	value: string;
	label: string;
}

export interface Insight {
	heading: string;
	points: string[];
}

export interface Pillar {
	id: string;
	number: string;
	color: PaletteColor;
	navLabel: string;
	tag: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	imageCaption: string;
	stats: Stat[];
	good: Insight;
	bad: Insight;
	expected: Insight;
}

export const pillars: Pillar[] = [
	{
		id: 'economy',
		number: '01',
		color: 'primary',
		navLabel: 'Economy',
		tag: 'Pillar 01 · Economic Growth',
		title: 'A resilient economy that keeps expanding',
		description:
			'The Philippines sustains one of the fastest-growing economies in Southeast Asia. Business process outsourcing, overseas remittances, and a young, consumption-driven population power its steady expansion.',
		image: 'https://picsum.photos/seed/ph-economy/900/700',
		imageAlt: 'Modern skyline of a business district in the Philippines',
		imageCaption: 'Metro Manila · Financial District',
		stats: [
			{ value: '+5.5%', label: 'Average annual GDP growth' },
			{ value: '$38B+', label: 'Yearly remittance inflows' },
		],
		good: {
			heading: 'The good',
			points: [
				'GDP grows steadily every year, among the fastest rates in the region.',
				'The BPO industry ranks as one of the largest outsourcing hubs in the world.',
				'Remittances from overseas workers sustain household spending nationwide.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'Income inequality remains wide between urban centers and rural provinces.',
				'The economy leans heavily on services and remittances, which exposes it to external shocks.',
				'Inflation regularly erodes the purchasing power of lower-income households.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'Infrastructure programs expand transport and logistics across the archipelago.',
				'Digital and green industries attract a growing share of new investment.',
				'Poverty rates decline gradually as the middle class continues to grow.',
			],
		},
	},
	{
		id: 'technology',
		number: '02',
		color: 'secondary',
		navLabel: 'Technology',
		tag: 'Pillar 02 · Digital Frontier',
		title: 'A digital economy that moves fast',
		description:
			'Filipinos rank among the world leaders in time spent online and on social media. Fintech apps, e-commerce, and a bilingual IT workforce drive the country toward a mobile-first digital future.',
		image: 'https://picsum.photos/seed/ph-technology/900/700',
		imageAlt: 'People collaborating around laptops in a tech office',
		imageCaption: 'Digital & IT-BPM Sector',
		stats: [
			{ value: 'Top 5', label: 'Global internet usage time' },
			{ value: '1.5M+', label: 'IT-BPM professionals employed' },
		],
		good: {
			heading: 'The good',
			points: [
				'Adoption of e-wallets and digital payments grows quickly across every age group.',
				'A large, English-proficient workforce supports global outsourcing and software teams.',
				'Local startups increasingly build fintech, logistics, and e-commerce solutions.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'Internet speed and reliability still lag behind several regional neighbors.',
				'Connectivity gaps separate urban centers from rural and island communities.',
				'Data-privacy and cybersecurity frameworks continue to mature.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'Fiber and satellite projects extend reliable connectivity to remote islands.',
				'Government services move further into e-governance and digital identity.',
				'AI-assisted tools become common across outsourcing and customer-service work.',
			],
		},
	},
	{
		id: 'culture',
		number: '03',
		color: 'tertiary',
		navLabel: 'Culture',
		tag: 'Pillar 03 · Cultural Identity',
		title: 'A diverse culture built on community',
		description:
			'Filipino culture blends indigenous roots, Spanish heritage, and American influence into an identity centered on family, hospitality, and Bayanihan — the spirit of communal support.',
		image: 'https://picsum.photos/seed/ph-culture/900/700',
		imageAlt: 'Traditional festival celebration with colorful costumes',
		imageCaption: 'Regional Festival Tradition',
		stats: [
			{ value: '180+', label: 'Living native languages' },
			{ value: '300+', label: 'Annual local festivals' },
		],
		good: {
			heading: 'The good',
			points: [
				'Linguistic diversity preserves distinct regional identities across the islands.',
				'Colorful festivals draw growing numbers of local and international visitors.',
				'Filipino music, film, and diaspora communities gain wider global visibility.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'Younger generations use fewer native languages as urban migration grows.',
				'Traditional crafts and rural customs receive limited institutional funding.',
				'Popular media at times overshadows regional and indigenous traditions.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'Mother-tongue education programs renew interest in local languages.',
				'Heritage and festival tourism attract steady public and private investment.',
				'More cultural and natural sites gain UNESCO recognition over time.',
			],
		},
	},
	{
		id: 'health',
		number: '04',
		color: 'primary',
		navLabel: 'Health',
		tag: 'Pillar 04 · Public Health',
		title: 'A healthcare system in transition',
		description:
			'The Philippines expands universal coverage through PhilHealth while its nurses and doctors remain among the most sought-after medical professionals in the world.',
		image: 'https://picsum.photos/seed/ph-health/900/700',
		imageAlt: 'Healthcare professionals attending to a patient',
		imageCaption: 'Universal Health Care Program',
		stats: [
			{ value: '~70y', label: 'Average life expectancy' },
			{ value: '100M+', label: 'Citizens covered by PhilHealth' },
		],
		good: {
			heading: 'The good',
			points: [
				'The Universal Health Care Act extends coverage to every citizen by law.',
				'Filipino nurses and doctors are respected worldwide for their training.',
				'Life expectancy rises and infant mortality continues to decline.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'Rural clinics lack the staff and equipment available in city hospitals.',
				'Migration of medical workers abroad creates local staffing shortages.',
				'Many families still cover a large share of health costs out of pocket.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'Telemedicine expands basic care access to remote and island communities.',
				'Retention incentives aim to keep more medical graduates working locally.',
				'Health-insurance enrollment keeps rising as coverage becomes mandatory.',
			],
		},
	},
	{
		id: 'education',
		number: '05',
		color: 'secondary',
		navLabel: 'Education',
		tag: 'Pillar 05 · Human Capital',
		title: 'A young, bilingual generation ready to compete',
		description:
			'The Philippines maintains a high literacy rate and produces a young, English-proficient workforce that fuels its service-driven economy and global outsourcing industry.',
		image: 'https://picsum.photos/seed/ph-education/900/700',
		imageAlt: 'Students studying together in a classroom',
		imageCaption: 'K to 12 Education System',
		stats: [
			{ value: '96%+', label: 'Adult literacy rate' },
			{ value: '25y', label: 'Median population age' },
		],
		good: {
			heading: 'The good',
			points: [
				'Literacy rates rank among the highest in the Asia-Pacific region.',
				'Widespread English proficiency supports global business and remote work.',
				'A young median age gives the country a large future workforce.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'International assessments reveal learning gaps in reading and math.',
				'Access to quality schools still varies widely between regions.',
				'Poverty pushes many students to leave school before graduating.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'The K-12 curriculum continues to align more closely with industry needs.',
				'Digital and vocational learning programs expand across public schools.',
				'Stronger STEM output feeds the country’s tech and healthcare sectors.',
			],
		},
	},
	{
		id: 'gastronomy',
		number: '06',
		color: 'tertiary',
		navLabel: 'Gastronomy',
		tag: 'Pillar 06 · Culinary Heritage',
		title: 'Flavors shaped by centuries of exchange',
		description:
			'Filipino cuisine mixes native, Malay, Chinese, and Spanish influences into comfort dishes built around rice, vinegar, and communal eating traditions like kamayan feasts.',
		image: 'https://picsum.photos/seed/ph-gastronomy/900/700',
		imageAlt: 'Traditional Filipino dish served on a wooden table',
		imageCaption: 'Heirloom Filipino Adobo',
		stats: [
			{ value: '7,000+', label: 'Islands with local recipes' },
			{ value: '3', label: 'Major culinary influences' },
		],
		good: {
			heading: 'The good',
			points: [
				'Dishes like adobo and sinigang gain growing recognition worldwide.',
				'Communal traditions such as kamayan feasts keep family gatherings strong.',
				'Diaspora restaurants introduce Filipino flavors to new international audiences.',
			],
		},
		bad: {
			heading: 'The bad',
			points: [
				'Filipino restaurants remain less common abroad than other Asian cuisines.',
				'Some traditional dishes carry high sodium and sugar content.',
				'Fast-food habits in cities gradually replace regional home recipes.',
			],
		},
		expected: {
			heading: 'What comes next',
			points: [
				'Food media and diaspora chefs keep raising the cuisine’s global profile.',
				'Interest grows in regional ingredients from beyond the main islands.',
				'Modern kitchens reinterpret classic dishes with healthier techniques.',
			],
		},
	},
];
