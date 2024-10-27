let vilS = document.querySelector(`#vil`)
let tumanS = document.querySelector(`#tuman`)

let malS = document.querySelector(`#mal`)



fetch(`https://cyberss.uz/api/startdata`)
.then(data => data.json()).then(json => render(json))




function render (vil){
  console.log(vil);
  vil.viloyat.map(item =>{
    let o =document.createElement(`option`)
    o.setAttribute(`value`, item.id)
    o.innerText =item.vil_name
    vilS.append(o)
  })
  vilS.addEventListener(`change`, (e)=>{
    console.log(e.target.value);
    let tumanList = vil.tuman.filter(i => i.viloyat_id == e.target.value)
    tumanRender(tumanList)
    console.log(tumanList);
  })
  
}

function tumanRender(tumanList){
  tumanS.innerHTML = ''
  tumanList.map (item => {
    let o =document.createElement(`option`)
    o.setAttribute(`value`, item.id)
    o.innerText = item.tuman_name
    tumanS.append(o)
  })
}  




