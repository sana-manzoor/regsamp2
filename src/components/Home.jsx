import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { editApi } from '../services/allApis'
import { BASE_URL } from '../services/baseUrl'
// import { format } from 'date-fns'

function Home() {
    const [user,setUser]=useState("")

    const [editData,setEditData]=useState("")

    // const [dob,setDob]=useState("") 
    // const [district,setDistrict]=useState("") 
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")
    // const [image,setImage]=useState("")
    // const [id,setId]=useState("")

    useEffect(()=>{
      const dataaa=JSON.parse(sessionStorage.getItem('currentUser'))
      setUser(dataaa)
      setEditData(dataaa)

       // setUser(JSON.parse(sessionStorage.getItem("currentUser")).name)
       // setDob(JSON.parse(sessionStorage.getItem("currentUser")).dob)
       // setDistrict(JSON.parse(sessionStorage.getItem("currentUser")).district)
       // setEmail(JSON.parse(sessionStorage.getItem("currentUser")).email)
       // setPassword(JSON.parse(sessionStorage.getItem("currentUser")).password)
       // setImage(JSON.parse(sessionStorage.getItem("currentUser")).u_image)
       // setId(JSON.parse(sessionStorage.getItem("currentUser"))._id)
       if (editData.u_image !=user.u_image) {
           setPreview(URL.createObjectURL(editData.u_image))
         }
     },[editData.image])

// console.log(user)


    // const [editData,setEditData]=useState({
    //      name: "",dob:"",district:"",image:"",email:"",password:""
    // })

    

    console.log(editData)

    const [preview, setPreview] = useState("")

 

    
   



  const navigate=useNavigate()

 

  const handleUpdate = async () => {
    // if (!editData.name || !editData.dob || !editData.district || !editData.email || !editData.password || !editData.image) {
    //   alert("Enter Valid Values")

    // }
    // else {

      console.log("Valid")
      const data = new FormData()
      data.append("name", editData.name ? editData.name :user.name)
      data.append("dob", editData.dob ? editData.dob :user.dob)
      data.append("district", editData.district ? editData.district :user.district)
      data.append("email", editData.email ? editData.email :user.email)
      data.append("password", editData.password ? editData.password :user.password)
      data.append("u_image", editData.u_image ? editData.u_image :user.u_image)
    //   if(editData.image == project.u_image){
    //     const reqHeader={
    //       "Content-Type": "application/json", "Authorization": `Bearer ${token} `
    //     }
       console.log(data)
     
        const res=await editApi(editData,editData._id)
        if(res.status==200){
        console.log(res)
          alert("user Updated Successfully!!")
        
        }
        else{
         alert(res.response.data)
        }
      }

      // console.log(projectData)

     
    // }
  

  const handlelogout=async()=>{
    sessionStorage.removeItem("currentUser")
    
     navigate('/')
  }

  // console.log(user)

  return(
    <>
    <h2 className='display-4 mt-2 d-flex justify-content-between'>Welcome  {user.name}  <button className='btn btn-outline-dark btn-lg me-3 ' onClick={handlelogout}>Log Out</button></h2>
<div className='d-flex justify-content-center'>
    <div className='card shadow p-3 me-3 mb-5' style={{marginTop:'60px',width:'500px'}}>
        <div className='mt-3'>
            <h3 className='d-flex justify-content-center'>
                My Profile
                <span className=' btn'>
                {/* <i className="fa-solid fa-check fa-2x"  style={{color:'#45888A'}}></i> */}
               
                </span>
                </h3>
        </div>
        <div className='mt-3 row justify-content-center'>
            <label htmlFor="profile" className='text-center'>
                <input type="file" className='form-control' id="profile"  style={{display:'none'}} onChange={(e) => setEditData({ ...editData, image: e.target.files[0] })}/>
                <img src={preview ? preview : `${BASE_URL}/upload/${editData.u_image}`} width={'220px'} height={'180px'} alt="" className='mb-3' />
            </label>
            <div className='mt-3'>
                <input type="text" className='form-control' defaultValue={user.name}  placeholder='Enter your Name'  onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
            </div>
            <div className='mt-3'>
                <input type="date" className='form-control' defaultValue={user.dob}   placeholder='DOB'  onChange={(e) => setEditData({ ...editData, dob: e.target.value })} />
            </div>
          
             <div className='mt-3'>
             <select name="place"  className='form-control' id="district1"   onChange={(e) => setEditData({ ...editData, district: e.target.value })}>
                                            {/* <option value="select" disabled>select</option> */}
                                            <option value="alappuzha">Alappuzha</option>
                                            <option value="ernakulam">Ernakulam</option>
                                            <option value="idukki">Idukki</option>
                                            <option value="Kannur">Kannur</option>
                                            <option value="	Kasaragod">	Kasaragod</option>
                                            <option value="Kottayam">Kottayam</option>
                                            <option value="	Kozhikode">	Kozhikode</option>
                                            <option value="Malappuram">Malappuram</option>
                                            <option value="Palakkad">Palakkad</option>
                                            <option value="	Pathanamthitta">	Pathanamthitta</option>
                                            <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                                            <option value="Thrissur">Thrissur</option>
                                            <option value="Wayanad">Wayanad</option>
                                        </select>
            </div>
            <div className='mt-3'>
                <input type="email" className='form-control' defaultValue={user.email}  placeholder='email'  onChange={(e) => setEditData({ ...editData, email: e.target.value })}/>
            </div>
            <div className='mt-3'>
                <input type="password" className='form-control' defaultValue={user.password}  placeholder='Password'  onChange={(e) => setEditData({ ...editData, password: e.target.value })}/>
            </div>
            

        </div>
        <button className='btn btn-outline-dark mt-1' onClick={handleUpdate}>Update</button>
    </div>
    </div>
    </>
  )
}

export default Home