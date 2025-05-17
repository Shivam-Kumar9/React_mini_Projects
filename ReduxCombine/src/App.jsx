import { useState } from 'react'
import * as Redux from 'redux';
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store'; // Assuming your Redux store is exported from a file named store.js
import './App.css'

const SET_THEME_LIGHT = 'SET_THEME_LIGHT';
const SET_THEME_DARK  = 'SET_THEME_DARK'


const UPDATE_USER = 'UPDATE_USER';
const RESET_USER = 'RESET_USER'

const userUpdate = (name , age , email)=>({type : UPDATE_USER, payload: {name,age, email}})
const resetUser = ()=>({type : RESET_USER})


const initialstate ={
  name : 'jon doe',
  age : 30,
  email : 'jony@email.com'
}

const userReducer = (state=initialstate ,action )=>{
  switch(action.type){
    case UPDATE_USER :
      return {...state,...action.payload}
    case RESET_USER : 
      return {...initialstate}  
    default :
      return state  
  }
}

const store = Redux.createStore(userReducer)


 

const UserContent = ()=>{
  const user = ReactRedux.useSelector(state=> state)
  const dispatch =ReactRedux.useDispatch()

  const  [formdata, setFormData] = useState({
    name : user.name,
    age  : user.age,
    email: user.email
  })
 
  const  handleChange = (e)=>{
     setFormData({
      ...formdata, [e.target.name] : e.target.value
     })
  }

  const handleSubmit = (e)=>{
     e.preventDefault()
     dispatch(formdata.name,Number(formdata.age),formdata.email)
  }

  return(<div className='section'>
    <h1>User Profile</h1>

    <div className='sub_part'>
      <h3>Current User Info: </h3>
      <p>Name : {formdata.name}</p>
      <p>Age :  {formdata.age}</p>
      <p>Email: {formdata.email}</p>
    </div>
    
   <form onSubmit={handleSubmit}>
   <label htmlFor="name" className='inp_label'>
      Name :<br />
       <input type="text" name="name" value={formdata.name} onChange={handleChange} />
    </label><br />
    <label htmlFor="age" className='inp_label'>
      Age :<br />
      <input type="number" name="age" value={formdata.age} onChange={handleChange} />
    </label><br />
    <label htmlFor="email" className='inp_label'>
      email :<br />
      <input type="text" name="email" value={formdata.email} onChange={handleChange} />
    </label> 
  
     <div className='userBtn'>
      <button> Update </button>
      <button type='button' onClick={()=>console.log('object')}>Reset</button>
     </div>
   </form>

  </div>)
}


const  MainContent = ()=>{     
  return(<div>
   <UserContent/>
  </div>)
}

function App() {
  return (
    <div>
      <ReactRedux.Provider store={store}>
      <MainContent/> 
      </ReactRedux.Provider>
    </div>
  )
}

export default App
