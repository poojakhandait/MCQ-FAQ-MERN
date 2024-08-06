import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const JavaScript=()=> {
  let data=[
    {'qns':'What is JavaScript?','ans':'JavaScript is a high-level, dynamic, interpreted programming language that is primarily used to create interactive effects within web browsers. It is an essential technology of the World Wide Web, alongside HTML and CSS. JavaScript enables the creation of dynamically updating content, controlling multimedia, animating images, and much more.'},

  {'qns':'What are the key features of JavaScript?','ans':'1.Dynamic Typing  2.Interpreted Language  3.Event-Driven  4.Asynchronous Programming  5.DOM Manipulation'},

  {'qns':'What are the applications of JavaScript?','ans':'1.Web Development  2.Mobile App Development  3.Desktop Applications 4.Game Development 5.Internet of Things (IoT)  6. Web Server and API Development  7.Automation and Scripting'},

  {'qns':'Difference between var and let keyword in javascript','ans':'1.From the very beginning, the var keyword was used in JavaScript programming whereas the keyword let was just added in 2015.'},

  {'qns':'Explain Implicit Type Coercion in javascript.','ans':'Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.'},

  {'qns':'Is javascript a statically typed or a dynamically typed language','ans':'JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.'}]


  let [a,setA]=useState([false,false,false,false,false,false])
  let navigate=useNavigate()
  let fun=(i)=>{
    if(a[i])
    {
      a[i]=false
    }
    else{
      a=[false,false,false,false,false,false]
      a[i]=true
    }
    setA([...a])

  }
  let javascript=()=>{
    navigate('/javascriptmcq')

  }
  return (
    <div>
      <div className='jacr'>

      </div>
      <div className='faq'>"Learn FAQ Questions Here"</div>
      {
        data.map((item,i)=>{
          return(
            <div className='acrelm'>
              <div className='acrhead'>
                <h3>{item.qns}</h3>
              <i class={a[i]?"fa-solid fa-caret-up":'fa-solid fa-caret-down'} onClick={()=>fun(i)}></i>
              </div>
              {a[i]&&<p>{item.ans}</p>}
              <hr></hr>
            </div>
          )
        })
      }
      <button className='mcqBTN' onClick={javascript}>MCQ Questions</button>
    </div>
  )
}

export default JavaScript