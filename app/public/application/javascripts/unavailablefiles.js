window.onload = async function getInfos(){

    let organize = document.getElementById("row row-sm");
    var user_id = sessionStorage.getItem("user_id");
    var user_cat_id = sessionStorage.getItem("usercat");

    try{
 

  
        let contents = await $.ajax({
  
          url: "/contents/",
          method: "get",
          dataType: "json",
   
        });
   
        console.log("Contents: = " + JSON.stringify(contents));
        
        html = "";
        i = 1;

          for(let content of contents){
            //console.log("Unit " + unitcourse.unit_name + " Course " + unitcourse.cour_name);
            html += "" + "<div class= col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xxl-2> " +
            "<div class= card overflow-hidden > " +
                "<a href=filemanager-details.html><img src=../assets/images/media/files/03.jpg alt=img class=file-manager-list w-100></a> " +
                "<div class=card-footer> " +
                    "<div class=d-flex> " +
                        "<div class=><h5 class=mb-0 fw-semibold text-break>" + content.con_name + "</h5> " + 
            "</div><div class=ms-auto my-auto><span class=text-muted mb-0> ID: " + content.con_id + "</span> " +
            " </div></div></div></div></div>";
            i = i+1;
          }
   
        organize.innerHTML = html;

    } catch(err){
        console.log(err);
    }

}