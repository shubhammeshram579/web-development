import React ,{useState,useEffect} from 'react'
import {Contenier,Postform} from "..//../components"
import appwritServises  from "..//../appwrite/config"
import { useNavigate,useParams } from 'react-router-dom'


function EditPost() {
    const [post , setPost] = useState(null)

    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug){
            appwritServises.getPost(slug).then((post) =>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate("/")
        }
    }, [slug,navigate])


  return post ? (
    <div className='py-8'>
        <Contenier>
            <Postform post={post} />
        </Contenier>
    </div>
  ) : null
}

export default EditPost