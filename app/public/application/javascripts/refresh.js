async function refresh() {

    let word = document.getElementById("searchavb_in").value;

    sessionStorage.setItem('kword', word);

    window.location.assign("http://localhost:3000/application/views/usermanagement.html");

    
}