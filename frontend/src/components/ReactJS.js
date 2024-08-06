import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const ReactJS=()=> {
  let data=[
    {'qns':'What is React?','ans':'React is a popular open-source JavaScript library used for building user interfaces, particularly single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies. React is known for its efficiency, flexibility, and the ability to create interactive UIs.'},

  {'qns':'What are the key features of ReactJS?','ans':'1.Component-Based Architecture  2.JSX (JavaScript XML)  3.Virtual DOM  4.State Management  5.Props (Properties  6.Lifecycle Methods  7.React Hooks 8.React Router'},

  {'qns':'What are the applications of React?','ans':'1.Single-Page Applications (SPAs)  2.User Interfaces (UIs)  3.Progressive Web Apps (PWAs)  4. E-Commerce Platforms 5.Social Media Applications  6.Mobile Applications'},

  {'qns':'What is JSX?','ans':'JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.'},

  {'qns':' List some of the major advantages of React.','ans':'1.It increases the application’s performance  2.It can be conveniently used on the client as well as server side 3.Because of JSX, code’s readability increases  4.React is easy to integrate with other frameworks like Meteor, Angular, etc  5.Using React, writing UI test cases become extremely easy'},

  {'qns':'What are the limitations of React?','ans':'1.React is just a library, not a full-blown framework  2.Its library is very large and takes time to understand  3.It can be little difficult for the novice programmers to understand  4.Coding gets complex as it uses inline templating and JSX'}]


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
  let react=()=>{
    navigate('/reactmcq')

  }
  return (
    <div>
      <div className='racr'>

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
      <button className='mcqBTN' onClick={react}>MCQ Questions</button>
    </div>
  )
}

export default ReactJS