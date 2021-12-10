const localStorageContent = localStorage.getItem('task')

var task = {

};
if(localStorageContent === null){
    task = [];
}else {
   task = JSON.parse(localStorageContent);
}

let inputTask = document.getElementById("addTask")



function adicionar(){
    
    let inputTask = document.getElementById("addTask")
    let taskValue = inputTask.value;
    var task = [taskValue]


    localStorage.setItem('task',  JSON.stringify(task) );

    console.log(localStorageContent)
    
    let h1 = document.getElementById("ulTask")

}

