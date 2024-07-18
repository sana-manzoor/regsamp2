import React,{useState} from 'react'
import { Table } from 'react-bootstrap'
import { addUserApi } from '../services/allApis'
import { loginApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'

function Reg() {

    const [reg,setReg]=useState({
        name:"",dob:"",district:"",image:"",gender:"",email:"",password:""
    })
    const [log,setLog]=useState({
        email:"",password:""
    })

    const navigate=useNavigate()

    const handleAdd=async(e)=>{
        e.preventDefault()
        console.log("handle",reg.image)
        if(!reg.name ||!reg.dob || !reg.district || !reg.image || !reg.gender ||!reg.email || !reg.password){
          alert("enter Valid Values")
  
        }
        else{
        //   const {name,dob,district,u_image,gender,email,password}=reg
        //   console.log(reg)
          const newData=new FormData()
          
          newData.append("name",reg.name)       
          newData.append("dob",reg.dob)
          newData.append("district",reg.district)
          newData.append("gender",reg.gender)
          newData.append("email",reg.email)
          newData.append("password",reg.password)
          newData.append("u_image",reg.image)
           console.log(newData)
  
           const res=await addUserApi(newData)
           console.log(res);
           if(res.status===200){
           
            alert("user added successfully..!!")
           
           }
           else{
            alert("user adding failed..!!")
           }
  
  
        }

        
      }

      const handleLog = async (e) => {
        e.preventDefault()
        console.log(log)
        const { email, password } = log
        if (!email || !password) {
          alert("Enter Email and Password!!")
        }
        else {
          const res = await loginApi(log)
          console.log(res)
          if (res.status === 200) {
            sessionStorage.setItem("currentUser", JSON.stringify(res.data.excistingUser))
            // sessionStorage.setItem("role", res.data.role)
            sessionStorage.setItem("token", res.data.token)
            alert("Login Successfull!!")
            setLog({email:"",password:""})
            navigate('/home')
           
          }
          else {
            alert("Login Failed!!")
          }
        }
      }

      console.log(reg)
    return (
        <>
            <div className='row'>
                <div className="col-lg-6 ">
                    <div>
                        <h1 className='display-6 mt-4 mb-5 text-center'>Registration Form</h1>
                        <form action="" onSubmit={handleAdd} encType='multipart/form-data' >
                            <Table >
                                <tbody>

                                    
                                    <tr>
                                        <th>Name:</th>
                                        <td><input type="text" id='name' required className='form-control' onChange={(e)=>setReg({...reg,name:e.target.value})}/></td>
                                    </tr>
                                    <tr>
                                        <th>DOB:</th>
                                        <td><input type="date" id='date' required className='form-control' onChange={(e)=>setReg({...reg,dob:e.target.value})}/></td>
                                    </tr>
                                    <tr>
                                        <th>District:</th>
                                        <td><select name="district" required className='form-control' onChange={(e)=>setReg({...reg,district:e.target.value})} id="district" >
                                            <option value="select" disabled>select</option>
                                            <option value="alappuzha">Alappuzha</option>
                                            <option value="ernakulam">Ernakulam</option>
                                            <option value="idukki">Idukki</option>
                                            <option value="Kannur">Kannur</option>
                                            <option value="	Kasaragod">	Kasaragod</option>
                                            <option value="Kottayam">Kottayam</option>
                                            <option value="	Kozhikode">	Kozhikode</option>
                                            <option value="Malappuram">Malappuram</option>
                                            <option value="Palakkad">Palakkad</option>
                                            <option value="Pathanamthitta">Pathanamthitta</option>
                                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                            <option value="Thrissur">Thrissur</option>
                                            <option value="Wayanad">Wayanad</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <th>Profile:</th>
                                        <td><input type="file"  name="image" className='form-control'  id='image'   onChange={(e)=>setReg({...reg,image:e.target.files[0]})}  /></td>
                                    </tr>
                                    <tr>
                                        <th>Gender:</th>
                                        <td><input type="radio" id='male'  name="gender" value="male" onChange={(e)=>setReg({...reg,gender:e.target.value})} />Male <input type="radio" id='female' name="gender" onChange={(e)=>setReg({...reg,gender:e.target.value})} value="female" />Female</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td><input type="email" id='email1' required className='form-control' onChange={(e)=>setReg({...reg,email:e.target.value})} /></td>
                                    </tr>
                                    <tr>
                                        <th>Password:</th>
                                        <td><input type="password" id='password1' required className='form-control' onChange={(e)=>setReg({...reg,password:e.target.value})} /></td>
                                    </tr>
                                   

                                </tbody>

                            </Table>

                            
                            <div className='text-center'>
                                <button className='btn btn-outline-dark' type='submit' >Register</button>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                    <h1 className='display-6 mt-4 mb-5 text-center'>Login Form</h1>
                        <form action="" onSubmit={handleLog}>
                            <Table >
                                <tbody>

                                    <tr>
                                        <th>Email:</th>
                                        <td><input type="email" id='email' className='form-control' required onChange={(e)=>setLog({...log,email:e.target.value})}/></td>
                                    </tr>
                                    <tr>
                                        <th>Password:</th>
                                        <td><input type="password" id='password' className='form-control' required onChange={(e)=>setLog({...log,password:e.target.value})}/></td>
                                    </tr>
                                    {/* <tr>
                                        <td colSpan={5}><span><button className='btn btn-outline-dark' type='submit'>Submit</button></span></td>
                                    </tr>
                                     */}

                                </tbody>

                                

                            </Table>

                            <div className='text-center'>
                                <button className='btn btn-outline-dark' type='submit'>Login</button>
                                </div>
                        </form>
                    </div>
                </div>



          

        </div >
    </>
  )
}

export default Reg