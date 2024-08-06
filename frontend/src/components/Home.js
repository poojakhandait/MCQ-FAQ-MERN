import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const  Home=()=> {
  let obj=useContext(Ct)
  return (
    <div className='home'>
      
      <p className='center'>Center For <strong>Teaching</strong></p><br></br>
      <div className='mcq'> 
      <h2>Multiple Choice Questions: Types, Examples & Sample Questions</h2>
      <div className='pooja'>
        <p className='person'><img src="https://site.surveysparrow.com/wp-content/uploads/2024/06/wp-user-default-avatar.png" width="58" height="58"></img></p>
        <p>Pooja Khandait</p>
        <p>Last Updated:30 May 2024 </p>
        <p>10 min read</p>


      </div><br></br>
      <div >
      <img src="https://site.surveysparrow.com/wp-content/uploads/2022/03/Copy-of-Blog-Banner-Templates-23.png" alt="" width="800" height="400"></img>

      </div>
      </div>
      <div className='A1'>
        <h2>What are Multiple Choice Questions?</h2><br></br>
        <p>Simply put, multiple choice questions are those questions that are posed alongside a selection of possible answers. Typically, three to five options are given alongside for the respondents to choose from.<br>
        </br><br></br>
        Multiple-choice questions enjoy wide applicability and acceptance. This popular survey question type allows for a more intuitive and structured survey response leading to easy-to-analyze data.</p>
      </div>
      <div className='A2'>
      <div><h2>Select Any One Language For Practice</h2></div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPF89GwVGZzxp_UqOQGmT-eEBBxD7MAlCbAg&s" height="100"></img>
      </div>
    
      
    
      
    
    <div className='homeNav'>
       {obj.data.token!=""&& <Link  to='/python' className='link'>PYTHON</Link>}
       {obj.data.token!=""&&  <Link to='/javascript' className='link'>JavaScript</Link>}
       {obj.data.token!=""&&  <Link to='/react' className='link'>ReactJS</Link>}
       {obj.data.token!=""&&  <Link to='/express' className='link'>ExpressJS</Link>}
       
    </div>
    

    </div>
  )
}

export default Home