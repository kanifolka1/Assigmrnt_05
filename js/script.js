
window.addEventListener ('load', onload);
function onload () { 
    document.getElementById("empForm").addEventListener("submit", function(event)
    {  
        event.preventDefault();
        var iden = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var text = document.getElementById("text").value;
        var email = document.getElementById("email").value;
        var department = document.getElementById("department").value;
        console.log('ID:'+ iden);
        console.log('Name:'+ name);
        console.log('Extension:'+ text);
        console.log('Email:'+ email);
        console.log('Department:'+ department);
        return false;
    });
}
