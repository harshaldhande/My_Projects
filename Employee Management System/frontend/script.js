function addEmployee(){

    let id=document.getElementById("empId").value;
    let name=document.getElementById("empName").value;

    localStorage.setItem(id,name);

    alert("Employee Added");
}

function updateEmployee(){

    let id=document.getElementById("updateId").value;
    let name=document.getElementById("updateName").value;

    localStorage.setItem(id,name);

    alert("Employee Updated");
}

function deleteEmployee(){

    let id=document.getElementById("deleteId").value;

    localStorage.removeItem(id);

    alert("Employee Deleted");
}

function searchEmployee(){

    let id=document.getElementById("searchId").value;

    let name=localStorage.getItem(id);

    document.getElementById("result").innerHTML=
        name ? name : "Not Found";
}