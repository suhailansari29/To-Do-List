// alert("Js is linked")
let c = 0;
function ch(){
    // alert("Hello")
    let txtId = "txt"+c;
    // console.log(txtId)
    let hrId = "hr"+c;
    let text = document.getElementById("textb").value;
    // alert(text)
    let task = document.getElementById("task")
    // console.log(task)
    let newEle = document.createElement("li");
    let line = document.createElement("hr");

    newEle.id = txtId;
    line.id = hrId;

    let ddd = new Date();
    let dy = ddd.getDate()
    let mn = ddd.getMonth()
    let hh = ddd.getHours()
    let mnt = ddd.getMinutes()

    let spn = document.createElement("span")
    
    spn.innerHTML=`${dy}/${mn}  ${hh}:${mnt}`


    if(text==""){
        alert("Enter the Task")
    }
    else if(text.length>=15){
        alert("Enter smaller task")
    }
    else{
    newEle.innerHTML = `${text}
        <i class="fa-solid fa-check" onclick="comp('${txtId}', '${hrId}')"></i>
        <i class="fa-solid fa-trash fa-lg" onclick="del('${txtId}', '${hrId}')"></i><span>(${spn.innerHTML})</span>`;
    // console.log(newEle);
    // console.log(line)
    task.appendChild(newEle)
    task.appendChild(line)
    }

    task.value = ""
    document.getElementById("textb").value=""
    c++;
}
function del(txtId,hrId){
    let txt = document.getElementById(txtId)
    // console.log(txtId)
    // console.log(txt)
    let line = document.getElementById(hrId)

    txt.remove()
    line.remove()
    
}
function comp(txtId,hrId){
    let txt = document.getElementById(txtId)
    txt.style.textDecoration = "line-through"
}