async function addproject() {
   
    try {
        
        let data = {
            pro_date: document.getElementById("fdate").value,
            pro_name: document.getElementById("fnamep").value,
            pro_abstract: document.getElementById("fabs").value,
            pro_biblioweb: document.getElementById("fbiblio").value,
            pro_unitcour_id: document.getElementById("unitcourses").value
        }

        let newProject = await $.ajax({
            url: "/files/insertnewproject",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        //console.log("Inserted new user with id: " + newUser.user_id)
        window.alert("Projeto adicionado")
        window.location.assign("http://localhost:3000/application/views/fileupload.html");

    } catch (err) {
        window.alert("Erro!")
        console.log(err);
        //window.alert('just something wrong');
        window.location.assign("http://localhost:3000/application/views/fileupload.html");
    }
}

async function addassociation() {
   
    try {

        let data = {
            stu_pro_pro_id: document.getElementById("projects").value,
            stu_pro_stu_id: document.getElementById("students").value
        }

        
        let newAssociation = await $.ajax({
            url: "/files/insertnewassociation",
            method: "post",
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json"
        });

        //window.alert(JSON.stringify(data))
        window.alert('Associação efetuada!');
        window.location.assign("http://localhost:3000/application/views/fileupload.html");

    } catch (err) {
        console.log(err);
        //window.alert('just something wrong -> ' + document.getElementById("students").value + document.getElementById("projects").value);
        //window.alert(JSON.stringify(data))
        window.alert('Erro!');
        window.location.assign("http://localhost:3000/application/views/fileupload.html");
    }
}

async function addcontent() {
   
    var user_id = sessionStorage.getItem("user_id");

    try {

        /*let data = {
            con_user_id: user_id,
            con_cat_id: document.getElementById("categories").value,
            con_stu_pro_id: document.getElementById("studentprojects").value,
            con_name: document.getElementById("fname").value
            //con_url: document.getElementById("myfile").value
        }*/

        var data = new FormData();
        data.append("con_user_id", user_id)
        data.append("con_cat_id", document.getElementById("categories").value)
        data.append("con_stu_pro_id", document.getElementById("studentprojects").value)
        data.append("con_name", document.getElementById("fname").value)
        data.append("file", document.getElementById("myfile").files[0])
            

        let newContent = await $.ajax({
            url: "/files/insertnewcontent",
            method: "post",
            processData: false,
            contentType: false,
            cache : false,
            data: data,
            dataType: "json"
        });

        //window.alert(JSON.stringify(data))
        window.alert('Conteúdo adicionado!');
        window.location.assign("http://localhost:3000/application/views/fileupload.html");

    } catch (err) {
        console.log(err);
        //window.alert('just something wrong -> ' + document.getElementById("students").value + document.getElementById("projects").value);
        window.alert("Erro!")
        window.location.assign("http://localhost:3000/application/views/fileupload.html");
        
    }
}
