interface ISetHasArr {
	set: Set<number>;
	key: number[];
}

export default function setHasArr({ set, key }: ISetHasArr) {
	let haveItem = false;

	set.forEach((item) => {
		if (JSON.stringify(item) === JSON.stringify(key)) haveItem = true;
	});

	return haveItem;
}
