import React, {useEffect,useState} from 'react'
import appwiteServises from "..//../appwrite/config"
import {Contenier,PostCard} from "..//../components"

function Home() {
    const [posts ,SetPosts] = useState([])

    useEffect(() => {
        appwiteServises.getPosts().then((posts) =>{
            if (posts){
                SetPosts(posts.documents)
            }
        })

    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Contenier>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Contenier>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Contenier>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Contenier>
        </div>
    )
}

export default Home