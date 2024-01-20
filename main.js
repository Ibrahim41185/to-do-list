let input = document.getElementById("input");
let submit = document.getElementById("add");
let tasksDiv = document.getElementById("tasks");


let arrOfTasks = [];


getTaskFromLocal()
submit.onclick = function(){
    if(input.value !==""){
        addToArray(input.value)
        input.value = "";
    }
}
function  addToArray(task){
    const info = {
        id: Date.now(),
        title: task,
        completad: false
    }
    arrOfTasks.push(info);
    addElementsToPage(arrOfTasks);
    addToLocalStorage(arrOfTasks)
    // console.log(arrOfTasks)
    // console.log(JSON.stringify(arrOfTasks))
}

// add elements to page
function addElementsToPage(arrOfTasks){
    tasksDiv.innerHTML = "";
    arrOfTasks.forEach(info => {
        let div = document.createElement("div")
        div.className = "task";
        div.setAttribute("data-id", info.id)
        div.appendChild(document.createTextNode(info.title));
        let span = document.createElement("span")
        span.className = "span"
        span.appendChild(document.createTextNode("delete"))
        div.appendChild(span)
        tasksDiv.appendChild(div);
    });
}
 function addToLocalStorage(arrOfTasks){
    localStorage.setItem("task",JSON.stringify(arrOfTasks))
}


function getTaskFromLocal(){
    let data = localStorage.getItem("task")
    if(data){
            let task = JSON.parse(data)
            console.log(task)
    }
}