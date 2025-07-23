"use client"
import React ,{useEffect, useState} from 'react'
import {useForm,FormProvider } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@react-email/components'
import { Input } from '@/components/ui/input'
import { signInSchema } from '@/schemas/signinSchema'
import { signIn } from 'next-auth/react'





const page = () => {

  const router = useRouter()

  //zod implmnt
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues:{
      identifier: "",
      password: ""
    }

  })


  // submit form todo
  const onSubmit = async (data:z.infer<typeof signInSchema>) => {
    const result = await signIn('credentials',{
      redirect:false,
      identifier: data.identifier,
      password:data.password

    })

    if(result?.error){
      toast(`title: login faild`)
    }

    if(result?.url){
      router.replace(`/dashbord`)
    }

    

  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex items-center justify-center flex-col bg-gray-100 p-10 rounded-2xl'>
        <h1 className='text-2xl font-bold pb-10'>user sign in</h1>
        <Form  {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          <FormField
            control={form.control}
            name="identifier"
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
    </Form>
      </div>
    </div>
  )
}

export default page
