export type Tab = 'shop' | 'activity' | 'likes';
export type Section =
	| 'info'
	| 'menu'
	| 'jokbo'
	| 'myjokbo'
	| 'mycomment'
	| 'shop';

export interface IParams {
	tab: Tab;
	section: Section;
}
