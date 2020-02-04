
    var _current = window.location.href.split('.')[2];
    var currentPage = _current.split('/')[1];
	if (!currentPage) {
		currentPage = 'index';
	}
    document.getElementsByClassName(currentPage)[0].classList.add('active');
    document.getElementsByClassName(currentPage)[1].classList.add('active');
