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
		shop: 'likeShop',
		jokbo: 'likeJokbo',
	},
	activity: {
		myjokbo: 'myJokbo',
		mycomment: 'myComment',
	},
};
