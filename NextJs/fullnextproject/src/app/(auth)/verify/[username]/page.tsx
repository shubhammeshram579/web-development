"use client"
import React from 'react'
import { toast } from "sonner"
import {useParams,useRouter} from "next/navigation"
import * as z from 'zod'
import { useForm,FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { verifySchema } from '@/schemas/verifySchema'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '../../../../../types/apiResponse'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@react-email/components'


const VerifyPage = () => {
    const router = useRouter()
    const param = useParams<{username:string}>()


    //zod implmnt
      const form = useForm<z.infer<typeof verifySchema>>({
        resolver: zodResolver(verifySchema),

      })


      const onSubmit = async (data: z.infer<typeof verifySchema>) => {

        try {

            const response = await axios.post(`/api/verify-code`,{
                username:param.username,
                code: data.code
            })

            toast(`title successe and ${response.data.message}`)

            router.replace(`sign-in`)
            
        } catch (error) {
            console.log("sonthing went wrong user sign up",error)
                  const axioserror = error as  AxiosError<ApiResponse>
                  toast(`Succes ${axioserror}`)
        }

      }

  return (
    <div className='bg-gray-800 flex items-center justify-center min-h-[100vh]'>

      <div className='bg-gray-300 p-10 py-20 rounded-2xl'>
         <h1 className='text-2xl pb-10'>Verify user verification</h1>
       
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification code</FormLabel>
              <FormControl>
                <Input placeholder="enter your code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button  type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </div>
  )
}

export default VerifyPage
