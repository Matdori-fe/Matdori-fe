function formatDate(inputDate: string) {
	const date = new Date(inputDate);

	const year = date.getUTCFullYear().toString().slice(2);
	const month = String(date.getUTCMonth() + 1).padStart(2, '0');
	const day = String(date.getUTCDate()).padStart(2, '0');
	const hours = String(date.getUTCHours()).padStart(2, '0');
	const minutes = String(date.getUTCMinutes()).padStart(2, '0');

	return `${year}/${month}/${day} ${hours}:${minutes}`;
}
