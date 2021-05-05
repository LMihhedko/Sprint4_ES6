function filterNames() {
    const searchInput = document.getElementById('myInput');
    let filter = searchInput.value.toLowerCase();
    let li = document.getElementsByTagName('li');
    let match = false;


    for(i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        if (a.innerText.toLowerCase().indexOf(filter) > -1) {
            match = true;
            li[i].style.display = 'block';
        }else {
           li[i].style.display = 'none';
           
    }

    if (match === false) {
        document.querySelector("#no-result").style.display = 'block';
      } else {
        document.querySelector("#no-result").style.display = 'none';
      }
        
}
}