async function removeuser() {

    try {
        
        let data = {
            user_num: document.getElementById("fnumero2").value,
            user_name: document.getElementById("fname2").value
        }


        let deleteUser = await $.ajax({
            url: "/users/deleteuser",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        //console.log("Inserted new user with id: " + newUser.user_id)
        window.alert("User eliminado")
        window.location.assign("http://localhost:3000/application/views/usermanagement.html");

    } catch (err) {
        window.alert("Dados errados!");
        console.log(JSON.stringify(data));
        //window.alert(err);
        //window.alert('just something wrong');
        window.location.assign("http://localhost:3000/application/views/usermanagement.html");

        
    }
}