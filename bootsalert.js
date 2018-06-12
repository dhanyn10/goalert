var bootsalert = function(val){
    if(!val.type)
    {
        console.error("type must be filled");
    }
    else if(!val.message)
    {
        console.error("message must be filled");
    }
    else if(!val.container)
    {
        console.error("container must be filled");
    }
    else
    {
        type        = val.type;
        message     = val.message;
        container   = val.container;
        closebtn    = val.closebtn;
        closeclass  = "";
        closealert  = "";

        if(val.closebtn == true)
        {
            closeclass = " alert-dismissible";
            closealert = "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
        }

        if(type === "success" || "info" || "warning" || "danger")
        {
            createHTML = "<div class='alert alert-"+ type +" "+ closeclass +"'>"+
                            closealert +
                            message +
                        "</div>";
            document.getElementById(container).innerHTML = createHTML;
        }
        else
        {
            console.error("alert class name doesnt exist in bootstrap framework");
        }
    }
};