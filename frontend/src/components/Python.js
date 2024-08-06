import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const Python=()=> {
  let data=[
    {'qns':'What is Python?','ans':'Python is a widely-used general-purpose, high-level programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.'},

  {'qns':'What are the key features of Python?','ans':'1.Easy to Learn and Use  2.Interpreted Language  3.Extensive Standard Library  4.Dynamic Typing  5.High-Level Language'},

  {'qns':'What are the applications of Python?','ans':'1.Web Development  2.Data Science and Analytics 3.Machine Learning and Artificial Intelligence  4.Automation and Scripting  5.Software Development'},

  {'qns':'What is a dynamically typed language?','ans':'A dynamically typed language is a programming language in which the type of a variable is determined at runtime rather than at compile time. This means that you do not need to explicitly declare the data type of a variable when you write your code; instead, the interpreter assigns a type to the variable based on the value it is given.'},

  {'qns':'What is PEP 8?','ans':'PEP 8 is the Python Enhancement Proposal that provides guidelines and best practices on how to write Python code. Adhering to PEP 8 helps improve the readability and consistency of Python code across different projects and teams'},

  {'qns':'What do you mean by Python literals?','ans':'Python literals are fixed values assigned to variables or constants within a program. They represent constant values directly written in the code.'}]

  
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
  let python=()=>{
    navigate('/pythonmcq')

  }
  return (
    <div>
      <div className='pacr'>

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
      <button className='mcqBTN' onClick={python}>MCQ Questions</button>
    </div>
  )
}

export default Python