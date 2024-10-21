interface Image {
	src: string;
	aspectRatio: 'aspect-[16/9]' | 'aspect-[9/16]';
}

interface Project {
	title: string;
	path: string;
	video?: string;
	images: Array<Image>;
	link?: {
		text: string;
		url: string;
	};
}

const projects: Array<Project> = [
	{
		title: 'Shape Arena',
		path: 'shape-arena',
		video: 'https://www.youtube.com/embed/3cMRg6ToOQc?si=LQanouAp9f2TqD4R',
		images: [
			{ src: 'title.png', aspectRatio: 'aspect-[16/9]' },
			{ src: 'gameplay-1.png', aspectRatio: 'aspect-[16/9]' },
			{ src: 'gameplay-2.png', aspectRatio: 'aspect-[16/9]' }
		],
		link: {
			text: '> Steam store page <',
			url: 'https://store.steampowered.com/app/1222390/Shape_Arena/'
		}
	},
	{
		title: 'Chroma Eagle',
		path: 'chroma-eagle',
		video: 'https://www.youtube.com/embed/1xhNODaTlwI?si=NOOOC12hxW1pZF1T',
		images: [
			{ src: 'title.png', aspectRatio: 'aspect-[16/9]' },
			{ src: 'gameplay-1.png', aspectRatio: 'aspect-[16/9]' },
			{ src: 'gameplay-2.png', aspectRatio: 'aspect-[16/9]' }
		],
		link: {
			text: '> Global game jam page <',
			url: 'https://v3.globalgamejam.org/2020/games/chroma-eagle-1'
		}
	},
	{
		title: 'Tamapote',
		path: 'tamapote',
		video: 'https://www.youtube.com/embed/Ljle7j0BU7Q?si=uBLvKa30_Ldih5sf',
		images: [
			{ src: 'title.png', aspectRatio: 'aspect-[16/9]' },
			{ src: 'gameplay-1.png', aspectRatio: 'aspect-[9/16]' },
			{ src: 'gameplay-2.png', aspectRatio: 'aspect-[9/16]' }
		]
	}
];

export type { Project };
export default projects;
