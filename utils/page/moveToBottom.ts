export const scrollToBottom = () => {
	// document.getElementById('root').scrollTo(0, 0);

	window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
