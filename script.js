function scrollToContent() {
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: 'smooth'
	});
	document.getElementById('image-fish').classList.add('animate');
	document.getElementById('image-bird').classList.add('animate');
}
