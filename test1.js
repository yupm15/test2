function alerttest(){
    alert('success')
}
let focusinput;
let inputField;
let bottomframe;
setInterval(function(e){
    // const bottomframe=parent.document.getElementById('bottom').contentDocument;
    bottomframe=parent.document.getElementById('bottom').contentWindow.document;
    inputField=bottomframe.querySelectorAll('input[type="text"]');
    inputField.forEach(x=>{
            x.addEventListener('focus',function(field){
            focusinput=this
        })
    })
    
},1)

function inputcontent(obj){
    if(focusinput&&!focusinput.readOnly)
        focusinput.value+=obj.innerText
}

function callcharmap(){
    let c=bottomframe.getElementById('symbolTable');
    if(!c) creatCharMap();
    else{
        if(c.style.display==='none') c.style.display='';
        else  c.style.display='none'
    }
}

function creatCharMap(){
    let symbolTableDiv=document.createElement('table');
    symbolTableDiv.id='symbolTable';
    symbolTableDiv.innerHTML=`
        <tr>
            <td>
                <a href='#' onclick="inputcontent(this)">@</a>
                <a href='#' onclick="inputcontent(this)">#</a>
                <a href='#' onclick="inputcontent(this)">$</a>
                <a href='#' onclick="inputcontent(this)">%</a>
                <a href='#' onclick="inputcontent(this)">^</a>
                <a href='#' onclick="inputcontent(this)">&</a>
            </td>
        </tr>
    `;
    bottomframe.body.insertBefore(symbolTableDiv,bottomframe.body.firstChild);
}