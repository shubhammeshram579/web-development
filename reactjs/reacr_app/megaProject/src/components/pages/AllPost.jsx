import React, {useState, useEffect} from 'react'
import { Contenier, PostCard } from '..//../components'
import appwriteSevices from "../../appwrite/config"

function Allpost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteSevices.getPosts([]).then((posts) => {
        if (posts){
            setPosts(posts.documents)
        }

    })
  return (
    <div className='py-8 w-full'>
        <Contenier>
           <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard post={post} />
                    </div>
            ))}

           </div>
        </Contenier>
    </div>
  )
}

export default Allpost