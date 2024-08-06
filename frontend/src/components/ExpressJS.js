import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 const ExpressJS=()=> {
  let data=[
    {'qns':'What is ExpressJs?','ans':'Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing; it adds helpful utilities to Node.js’s HTTP objects; it facilitates the rendering of dynamic HTTP objects.'},

  {'qns':'Why use Express.Js?','ans':'Express.js is a lightweight Node.js framework that gives us ability to create server-side web applications faster and smarter. The main reason for choosing Express is its simplicity, minimalism, flexibility, and scalability characteristics. It provides easy setup for middlewares and routing.'},

  {'qns':' Is Express JS a front-end or a back-end framework?','ans':'Express.js is a JavaScript backend framework. It is mainly designed to develop complete web applications and APIs. Express is the backend component of the MERN stack which stands for MongoDB, Express.js, React.js, Node.js.'},

  {'qns':'What are JWT?','ans':'Json Web Tokens are mainly a token which is used for authentication and information exchange. When a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services, and resources the user is allowed to access. Json Web Token includes 3 part namely- Header, Payload and Signature.'},

  {'qns':'What is Bcrypt used for?','ans':'Bcrypt is a password hashing function which is used to securely hash and store user passwords. It is designed to be slow and computationally intensive, making it resistant to brute-force attacks and rainbow table attacks. Bcrypt is a key component in enhancing the security of user authentication systems.'},

  {'qns':'Differentiate between res.send() and res.json().','ans':'Both res.send() and res.json() serves similar purposes with some difference. So it depends on the data type which we are working with. Choose res.json() when you are specifically working with JSON data. Use res.send() when you need versatility and control over the content type or when dealing with various data types in your responses.'}]


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
  let express=()=>{
    navigate('/expressmcq')

  }
  return (
    <div>
      <div className='eacr'>

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
      <button className='mcqBTN' onClick={express}>MCQ Questions</button>
    </div>
  )
}

export default ExpressJS