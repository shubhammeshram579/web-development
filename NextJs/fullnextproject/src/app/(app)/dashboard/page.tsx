'use client'
import React, { useCallback, useEffect } from 'react'

import { Message } from '@/models/user'
import { useState } from 'react'
import { toast } from 'sonner'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { acceptMessageSchema } from '@/schemas/acceptMessageSchema'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '../../../../types/apiResponse'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Loader2, RefreshCcw } from 'lucide-react'
import MessageBox from '@/components/MessageBox'
import { User } from 'next-auth'


const page = () => {
  const [messages,setMessages] = useState<Message []>([])
  const [isLoading,setIsloading] = useState(false)
  const [isSwitchLoading,setIsSwitchLoading] = useState(false)

  const handelDeleteMessage = (messagesId: string) => {
    setMessages(messages.filter((message) =>  message._id !== messagesId))

  }

  const {data: session} = useSession()

  const from = useForm({
    resolver: zodResolver(acceptMessageSchema)
  })

  const {register,watch,setValue} = from;

  const acceptMessages = watch('acceptMessages')

  const fetchAcceptMessage = useCallback(async () => {
    setIsSwitchLoading(true)
    try {
     const response =  await axios.get<ApiResponse>(`/api/accept-messages`)

    //  setValue("acceptMessages",response.data.isAcceptingMessage) //todo
      
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast(`title: "error`)
    }finally{
      setIsSwitchLoading(false)
    }

  },[setValue])

  // fatch all messages

  const fatchMessage = useCallback(async (refresh: boolean = false) => {
    setIsloading(true)
    setIsSwitchLoading(false)

    try {

      const response = await axios.get<ApiResponse>(`/api/get-messages`)

      setMessages(response.data.messages || [])

      if(refresh){
        toast(`title: refress messages`)
      }

      
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast(`title: "error`)
      
    }finally{
      setIsSwitchLoading(false)
    }


  },[setIsloading,setMessages])



  useEffect(() => {

    if(!session || !session.user) return
    fatchMessage()
    fetchAcceptMessage()
  },[session,setValue,fatchMessage,fetchAcceptMessage])



  const handeSwitchChange = async() => {
    try {
      const response = await axios.post<ApiResponse>(`/api/acept-messages`,{
        acceptMessages: !acceptMessages
      })

      setValue("acceptMessages",!acceptMessages)
      toast(`title: ${response.data.message}`)


    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast(`title:"error" dececription: ${axiosError.response?.data.message || "faild to fatch setting"}`)
    }
  }

  const {username} = session?.user as User;


  const baseUrl = `${window.location.protocol}//${window.location.host}`
  const profileUrl = `${baseUrl}/u/${username}`

  const copyToClicpboard = () => {
    navigator.clipboard.writeText(profileUrl)
    toast(`copy to Url`)
  }


  if(!session || session.user){
    return <div>Please login</div>
  }



  return (
    <div>
      <div>
        <h1>User Dashbord</h1>
        <div>
          <h2>copy your url</h2>
          <div>
            <input type="text" value={profileUrl} disabled/>
            <Button onClick={copyToClicpboard}>copy</Button>
          </div>
        </div>
        <div>
          <Switch

          {...register("acceptMessages")}
          checked={acceptMessages}
          onCheckedChange={handeSwitchChange}
          disabled={isSwitchLoading}
          />
          <div>
            Accpet Message: {acceptMessages ? "ON":"off"}
          </div>
        </div>

        <Button
        onClick={(e) => {e.preventDefault();
          fatchMessage(true);
        }}
        >
          {isLoading ? (
            <Loader2 className='h-4 w-4' />
          ): (
            <RefreshCcw  className='h-4 w-4' />
          )}
        </Button>

        <div>
          {messages.length > 0 ? (
            messages.map((item) => (
              <MessageBox key={item.id} message={item} onMessageDelete={handelDeleteMessage} />
            ))
          ) : (
            <div>No Message to Display</div>
          )}
        </div>

      </div>
    </div>
  )
}

export default page
