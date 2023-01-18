search = () => {
    let filter = document.getElementById('searchbar').value.toUpperCase();

    let table = document.getElementById('table');

    let tr = document.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let tdtext = td.textContent || td.innerHTML;

            if (tdtext.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.visibility = "visible";
            }
            else {
                tr[i].style.visibility = "hidden";
            }
        }
    }
}