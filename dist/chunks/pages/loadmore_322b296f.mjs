const projectboxes = document.querySelectorAll('.projectbox');

projectboxes.forEach(el => {
    if(el.style.display == 'none'){
        document.getElementById('loadmore').style.display = 'inline';
    }
});
