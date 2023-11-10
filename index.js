const Task_Array = [
    {
        ID:1,
        Description:"Organizar tiempo para hacer una lista de tareas",
        Completed: true,
    },
    {
        ID:2,
        Description:"Comenzar a enlistar tareas al listado",
        Completed: true,
    },
    {
        ID:3,
        Description:"Hacer Brainstorming de tareas necesarias para agregar",
        Completed: false,
    }
];

const Add_Task = document.getElementById('New_Task_Description');
const Task_Container = document.getElementById('Task_List_Container');
const Total_Counter = document.getElementById('Total_Qty');
const Completed_Counter = document.getElementById('Completed_Qty');
const New_Task_button= document.getElementById('New_Task_Button');

const display_tasks =()=>{
    let html='';
    Task_Array.forEach((task) =>{
        let task_status=''
        if (task.Completed==true){
            task_status='checked';
            console.log('task completed ', task_status);
        };
        html+=`
                    <div class="Task">
                        <h4>${task.ID}</h4>
                        <p>${task.Description}</p>
                        <input type="checkbox" ${task_status} onclick="Change_Completed(${task.ID})">
                        <i class="fa-solid fa-circle-xmark" onclick="Delete_Task(${task.ID})"></i>
                    </div>
        `;
    });
    let Completed_Tasks=Task_Array.filter(e => e.Completed===true);
    Completed_Counter.textContent=Completed_Tasks.length;
    Total_Counter.textContent=Task_Array.length;
    Task_Container.innerHTML=html;
}

display_tasks();

const Delete_Button=document.getElementsByClassName('Delete_Button');

const Task_Adding =()=>{
    let last_index=Task_Array.length-1;
    let new_ID=Task_Array[last_index].ID+1;
    let new_task={
        ID:new_ID,
        Description:Add_Task.value,
        Completed: false
    }
    Task_Array.push(new_task);
    display_tasks();
}
New_Task_button.addEventListener('click', Task_Adding);

function Delete_Task(ID){
    let index=Task_Array.findIndex((e)=>e.ID==ID);
    Task_Array.splice(index,1);
    display_tasks();
}

Delete_Button.addEventListener('click', Delete_Task)

function Change_Completed(ID){
    let index=Task_Array.findIndex((e)=>e.ID==ID);
    let task_to_change=Task_Array[index];
    let aux_task={...task_to_change};
    if(aux_task.Completed===true){
        aux_task.Completed=false;
    }else{
        aux_task.Completed=true;
    };
    Task_Array.splice(index, 1, aux_task);
    display_tasks();
}
