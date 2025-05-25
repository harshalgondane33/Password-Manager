import React from 'react'
import { stringify, v4 as uuidv4 } from 'uuid';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { useState,useEffect,useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Manager = () => { 
  const ref=useRef(null);
  const [icons, seticons] = useState(eyeOff)
  const [usernamee, setusernamee] = useState("")
  const [sitename, setsitename] = useState("")
  const [Items, setItems] = useState([])
  const [type, settype] = useState('password')
  const [password, setpassword] = useState("")
  const [isInitialLoad, setIsInitialLoad] = useState(true); 
  const [show, setshow] = useState(false)
  useEffect(() => {
    let newItem=localStorage.getItem("Items")
    if(newItem)
    {
      let itemm=JSON.parse(newItem)
      setItems(itemm)
      console.log(Items)
    }
    setIsInitialLoad(false)
  }, [])
  useEffect(() => {
    if(!isInitialLoad)
    {
      localStorage.setItem("Items",JSON.stringify(Items))
      console.log(Items)
    }
    
  }, [Items,isInitialLoad])
  
  const handleChange= (e,item) => { 
    if(e.target.name=="sitename")
    {
      setsitename(e.target.value)
      console.log(sitename)
    }
    if(e.target.name=="username")
    {
      setusernamee(e.target.value)
      console.log(usernamee)
    }
    if(e.target.name=="password")
    {
      setpassword(e.target.value)
      console.log(password)
    }
   }
  const handleShow = () => {
    if(password==="")
    {
    }
    else if (!show) {
      settype('text');
      setshow(true);
      //seticon(eye);
    } else {
      settype('password');
      //seticon(eyeOff);
      setshow(false); 
    }
  }
  const handleAdd = () => { 
    settype('password');
    const newItem={id:uuidv4(),username:usernamee,site:sitename,password:password}
    console.log(newItem)
    setItems([...Items,newItem])
    console.log(Items)  
      ref.current.textContent="show"
      setsitename("")
      setusernamee("")
      setpassword("")
  
  }
  const handleEdit = (e,item) => {  
    // let Itemss=id;
    setsitename(item.site)
    setusernamee(item.username)
    setpassword(item.password)
    // handleChange(e)
    let newItems= Items.filter((items)=>{
      return items.id!==item.id;
    })
    setItems(newItems)
   }
  const handleDelete = (e,id) => { 
    let newItems= Items.filter((item)=>{
      return item.id!==id;
    })
    setItems(newItems)
   }
  return (
    <>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className='mx-auto text-4xl text-center h-22 p-5'><h1 className="logo font-bold text-gray-400"><span className='text-gray-800'>&lt;</span><span> Pass</span><span className='text-gray-800'>Op/</span><span className='text-gray-800'>&gt;</span></h1>
            <h2 className='text-sm text-green-100 m-1'>Your Own Password Manager</h2>
        </div>
        <div className="container mx-auto">
            <div className="inputt text-white flex flex-col p-4 gap-2">
                <input placeholder="Enter the site" className="rounded-full bg-white text-black border-violet-800 border-solid border-1 px-4" type="text" name="sitename" value={sitename} onChange={handleChange} />
                <div className="flex gap-4 relative">
                    <input placeholder="Username" className='rounded-full bg-white text-black border-solid border-violet-800 border-1 px-4' type="text" name="username" value={usernamee} onChange={handleChange}/>
                    <input placeholder="Password" className='rounded-full bg-white text-black border-solid border-violet-800 border-1 px-4' type={type} name='password'
                        value={password}
                        onChange={handleChange}/>
                      <button className='bg-green-800 rounded-full px-4 cursor-pointer' onClick={handleAdd}>
                       Save Password 
                      </button>                       
                      <span onClick={handleShow} ref={ref} className="cursor-pointer bg-slate-200 text-black rounded-lg p-1">
                         {show ?<FaRegEye /> :<FaRegEyeSlash />}
                      </span>  
                </div>
            </div>
            <div className="passcontainer mx-auto min-h-[60vh] p-2 rounded-md bg-slate-100">
              {Items.length==0 && <div className='text-md text-bold'>No Passwords To show</div>}
              {
                Items.map(item =>{
                  return <div key={item.id} className='Item flex mx-auto'>
                    <div className="site bg-violet-400 rounded-full w-[60vw] px-2 m-1">{item.site}</div>
                    <div className="username bg-violet-400 rounded-full w-[20vw] px-2 m-1">{item.username}</div>
                    <div className="password bg-violet-400  rounded-full w-[20vw] px-2 m-1">{item.password}</div>
                    <button onClick={(e)=>handleEdit(e,item)} className='bg-violet-200 rounded-md w-fit border-2 border-solid border-black p-1 m-1'><FaEdit /></button>
                    <button onClick={(e)=> handleDelete(e,item.id)} className='bg-violet-200 rounded-md w-fit border-2 border-solid border-black p-1 m-1'><MdDelete /></button>
                  </div>
                })
              }
            </div>
        </div>  

    </>
  )
}

export default Manager
