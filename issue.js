window.onload = listUsers;

const addIssueButton = document.getElementById("sub");

function listUsers(){
    const xhr = new XMLHttpRequest (); 
    const url = 'index.php?get=list';
    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                document.getElementById("users").innerHTML=response;
                console.log("php connect")
            }else{
                console.log("No file found");
                
        }
    }
    }
    xhr.open('GET',url,true);
    xhr.send(); 
}


