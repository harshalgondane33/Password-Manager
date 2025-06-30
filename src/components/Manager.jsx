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
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const ref=useRef(null);
  const [icons, seticons] = useState(eyeOff)
  const [usernamee, setusernamee] = useState("")
  const [sitename, setsitename] = useState("")
  const [Items, setItems] = useState([])
  const [type, settype] = useState('password')
  const [password, setpassword] = useState("")
  const [isInitialLoad, setIsInitialLoad] = useState(true); 
  const [show, setshow] = useState(false)
  //const [itemshow, setitemshow] = useState(false)
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
  const validateInputs = () => {
    const siteRegex = /^[a-zA-Z0-9.-]{3,}$/; // at least 3 characters, letters/numbers/dots/dashes
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/; // at least 3 characters, letters/numbers/underscores
    const passwordMinLength = 6;
  
    if (!siteRegex.test(sitename)) {
      alert("Site name must be at least 3 characters and only include letters, numbers, '.', or '-'.");
      return false;
    }
  
    if (!usernameRegex.test(usernamee)) {
      alert("Username must be at least 3 characters and contain only letters, numbers, or underscores.");
      return false;
    }
  
    if (password.length < passwordMinLength) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    return true;
  };
  
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
    // if(password==="")
    // {

    // }
    if (!show) {
      settype('text');
      setshow(true);
      //seticon(eye);
    } else {
      settype('password');
      //seticon(eyeOff);
      setshow(false); 
    }
  }
  const handlekeydown = (e) => {
    if(e.key==='Enter')
    {
      handleAdd()
    }
  }
  const handleShow2 = (e,itemm) => {
    const updatedItems = Items.map(item =>
      item.id === itemm.id
        ? { ...item, itemshow: !item.itemshow }
        : item
    );
    setItems(updatedItems);
  }
  const handleAdd = () => { 
    if (!validateInputs()) return;
    settype('password');  
    const newItem={id:uuidv4(),username:usernamee,site:sitename,password:password,itemshow:false}
    console.log(newItem)
    setItems([...Items,newItem])
    console.log(Items)  
      //ref.current.textContent="show"
      setshow(false)
      settype('password')
      //handleShow()
      setsitename("")
      setusernamee("")
      setpassword("")
  
  }
  const handleEdit = (e,item) => {  
    // let Itemss=id;
    setsitename(item.site)
    setusernamee(item.username)
    setpassword(item.password)
    setshow(false)
    settype('password')
    handleChange(e)
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
        <div className="inset-0 -z-10 h-full w-full items-center px-5 py-1 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className='mx-auto text-4xl text-center h-22 p-5'><h1 className="logo font-bold text-gray-400"><span className='text-gray-800'>&lt;</span><span> Pass</span><span className='text-gray-800'>Op/</span><span className='text-gray-800'>&gt;</span></h1>
            <h2 className='text-sm text-green-100 m-1'>Your Own Password Manager</h2>
        </div>
        <div className="container mx-auto mb-2 p-2">
            <div className="inputt text-white flex flex-col p-4 gap-2">
                <input placeholder="Enter the site" className="rounded-full bg-white text-black border-violet-800 border-solid border-1 px-4" type="text" name="sitename" value={sitename} onChange={handleChange} onKeyDown={(e)=>{
                  if(e.key==='Enter')
                  {
                    usernameref.current.focus()
                  }
                }}/>
                <div className="flex gap-4 relative">
                    <input placeholder="Username" className='rounded-full bg-white text-black border-solid border-violet-800 border-1 px-4' type="text" name="username" value={usernamee} onChange={handleChange} ref={usernameref} 
                    onKeyDown={(e)=>{
                      if(e.key==='Enter')
                      {
                        passwordref.current.focus()
                      }} }/>
                    <input placeholder="Password" className='rounded-full bg-white text-black border-solid border-violet-800 border-1 px-4' type={type} name='password' ref={passwordref}
                        value={password}
                        onChange={handleChange}
                        onKeyDown={handlekeydown}/>
                      <button className='bg-green-800 rounded-full px-4 cursor-pointer' onClick={handleAdd}>
                       Save Password 
                      </button>                       
                      <span onClick={handleShow} ref={ref} className="cursor-pointer bg-slate-200 text-black rounded-lg p-1">
                         {show ?<FaRegEye /> :<FaRegEyeSlash />}
                      </span>  
                </div>
            </div>
            <div className="passcontainer mx-auto min-h-[60vh] p-2 rounded-md bg-slate-100">
              <div className='flex font-bold text-center'>
                <h3 className='w-[46vw]'> SiteName</h3>
                <h3 className='w-[18vw]' >UserName</h3>
                <h3 className='w-[16vw]'>Password</h3>
              </div>
              {Items.length==0 && <div className='text-md text-bold'>No Passwords To show</div>}
              {
                Items.map(item =>{
                  return <div key={item.id} className='Item flex mx-auto'>
                    <div className="site bg-violet-400 rounded-full w-[60vw] px-2 m-1">{item.site}</div>
                    <div className="username bg-violet-400 rounded-full w-[20vw] px-2 m-1">{item.username}</div>
                    <div className="password bg-violet-400  rounded-full w-[20vw] px-2 m-1">{item.itemshow ? item.password :<div>*********</div>}</div>
                    <button onClick={(e)=>handleShow2(e,item)} className='bg-violet-200 rounded-md w-fit border-2 border-solid border-black p-1 m-1'>{item.itemshow ? <FaRegEye /> :<FaRegEyeSlash />}</button> 
                    <button onClick={(e)=>handleEdit(e,item)} className='bg-violet-200 rounded-md w-fit border-2 border-solid border-black p-1 m-1'><FaEdit /></button>
                    <button onClick={(e)=> handleDelete(e,item.id)} className='bg-violet-200 rounded-md w-fit border-2 border-solid border-black p-1 m-1'><MdDelete /></button>
                  </div>
                })
              }
            </div>
        </div>  
        </div>

    </>
  )
}

export default Manager
