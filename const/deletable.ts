interface IDeletable {
	likes: {
		shop: string;
		jokbo: string;
	};
	activity: {
		myjokbo: string;
		mycomment: string;
	};
}

export const deletable: IDeletable = {
	likes: {
		shop: 'shop',
		jokbo: 'jokbo',
	},
	activity: {
		myjokbo: 'myjokbo',
		mycomment: 'mycomment',
	},
};
