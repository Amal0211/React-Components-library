import { useCallback, useState } from "react"

export default function Accordian({datas}){
    const [selected,setSelected]=useState(null)
    function handleSingleSelection(id){
        setSelected(id===selected? null: id ) ;

    }
return (
    <>
    <div className="item">
        {datas && datas.length>0 ? (datas.map((dataitem)=>(<div key={dataitem.id} className="title" onClick={()=>handleSingleSelection(dataitem.id)}>
            <div><h3>{dataitem.question}</h3> <span>+</span> 
            </div>
        {selected === dataitem.id ? <div className="content"> {dataitem.answer}</div> : null} </div>
    )))
        : <div><h1>No data</h1></div>} 
    </div>
    </>
)
}