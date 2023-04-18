const btn_add=document.getElementById("btn_add")
const btn_upd=document.getElementById("btn_upd")
const btn_del=document.getElementById("btn_del")
const added=document.getElementById("added")
const text=document.getElementById("text")

btn_add.addEventListener("click",myfunction=()=>{
    const text1=text.value;
    added.append(text1)
})
btn_upd.addEventListener("click",update=()=>{
    added.contentEditable=true;
})
btn_del.addEventListener("click",del=()=>{
    added.textContent="";
})
