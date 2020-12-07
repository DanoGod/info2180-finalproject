
window.onload = Allissues;
function listopen(){
    const xhr = new XMLHttpRequest (); 
    const url = 'index.php?get=open'; 
    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                document.getElementById("active").innerHTML=response;
                console.log("php connect")
            }else{
                console.log("File not found");
                console.log("list user")
        }
    }
    }
    xhr.open('GET',url,true);
    xhr.send(); 
}




function Allissues(){
    const xhr = new XMLHttpRequest (); 
    const url = 'index.php?get=all'; 
    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                document.getElementById("active").innerHTML=response;
                console.log("php connect")
            }else{
                console.log("File not found");
                console.log("list user")
        }
    }
    }
    xhr.open('GET',url,true);
    xhr.send(); 
}



function listmyticket(){
    const xhr = new XMLHttpRequest (); 
    const url = 'index.php?get=listmyticket';
    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                document.getElementById("active").innerHTML=response;
                console.log("php connect")
            }else{
                console.log("File not found");
                console.log("list user")
        }
    }
    }
    xhr.open('GET',url,true);
    xhr.send(); 
}



