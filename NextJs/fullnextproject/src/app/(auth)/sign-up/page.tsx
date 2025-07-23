"use client"
import React ,{useEffect, useState} from 'react'
import {Form, useForm,FormProvider } from "react-hook-form"
import * as z from "zod"
import Link from 'next/link'
import { useDebounceValue,useDebounceCallback } from 'usehooks-ts'// for reload sold 
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { signUpShema } from '@/schemas/signUpSchema'
import axios ,{AxiosError} from "axios"
import { ApiResponse } from '../../../../types/apiResponse'
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@react-email/components'
import { Input } from '@/components/ui/input'
import {Loader2} from "lucide-react"





const page = () => {
  const [username,setUsername] = useState("")
  const [usernameMessage,setUsernameMessage] = useState("")
  const [isCheckingUsername,setIsCheckingUsername] = useState(false)
  const [isSubmitting ,setIsSubmitting] = useState(false)

  const debounced = useDebounceCallback(setUsername ,300)
  const router = useRouter()

  //zod implmnt
  const form = useForm<z.infer<typeof signUpShema>>({
    resolver: zodResolver(signUpShema),
    defaultValues:{
      username: "",
      email: "",
      password: ""
    }

  })

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if(username){
        setIsCheckingUsername(true)
        setUsernameMessage("")
        try {
          const response = await axios.get(`/api/check-userame-unique?username=${username}`)
          setUsernameMessage(response.data.message)
        } catch (error) {
          const axioserror = error as  AxiosError<ApiResponse>
          setUsernameMessage(
            axioserror.response?.data.message ?? "error checking username"
          )

          
        }finally{
          setIsCheckingUsername(false)
        }
      }

    }
    checkUsernameUnique()

  },[username])

  // submit form todo
  const onSubmit = async (data:z.infer<typeof signUpShema>) => {
    try {

      const response = await axios.post<ApiResponse>("/api/sign-up",data)

      // toast({
      //   title:"Success",
      //   description: response.data.message
        
      // })
      toast(`Succes ${response.data.message}`)
      router.replace(`/verify/${username}`)
      setIsSubmitting(false)
    } catch (error) {
      console.log("sonthing went wrong user sign up",error)
      const axioserror = error as  AxiosError<ApiResponse>
          setUsernameMessage(
          axioserror.response?.data.message ?? "error checking username"
      )
      toast(`Succes ${axioserror}`)
      setIsSubmitting(false)
    }

  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center justify-center bg-gray-200 p-10 rounded-2xl'>
        <FormProvider  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} 
                  onChange={(e) => {
                    field.onChange(e)
                    debounced(e.target.value)

                  }}/>
                </FormControl>
                {isCheckingUsername && <Loader2 className="animate-spin" />}
                <p className={`text-sm ${usernameMessage === "error checking username" ? "text-green-500": "text-red-500"}`}>
                  test {usernameMessage}
                </p>
                <FormMessage />
              </FormItem>

              
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              
            )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
      </div>
    </div>
  )
}

export default page
