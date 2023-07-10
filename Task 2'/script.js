const list=document.getElementById('list');
const task=document.getElementById('task');
task.addEventListener('keypress',function(e){
        if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById('b1').click();
        }
    });


function add() {
    const taskvalue=task.value;

    if (taskvalue=='') {
        alert("Please write something!");
        return;
    }
    

    const li=document.createElement('p');
    li.innerText=taskvalue;

    const div=document.createElement('div');
    div.classList.add('btns');

    const edit=document.createElement('button');
    edit.innerHTML='Edit';
    edit.classList.add('edit');

    const editval=document.createElement('input');
    editval.type='text';
    editval.value=taskvalue;

    const del=document.createElement('button');
    del.classList.add('del');
    del.innerHTML='Delete';

    div.appendChild(edit);
    div.appendChild(del);

    li.appendChild(div);

    list.appendChild(li);

    edit.addEventListener('click',()=>{
        if(edit.innerText.toLowerCase()=='edit')
        {
            task.value=li.firstChild.nodeValue;
            task.focus();
            task.select();
            edit.innerText="Save";
        }
        else {
            li.firstChild.nodeValue=task.value;
            task.value="";
            edit.innerText="Edit";
        }
    });

    del.addEventListener('click',()=>{
        list.removeChild(li);
    });

    task.value='';
}
