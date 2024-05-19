import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  import React from "react"
  import { verifyTokenUser } from "@/(db)/(auth)/user-actions"
import { useRouter } from "next/navigation"
import { useParams } from 'next/navigation'
  export function VerificationOTP() {
    const [value, setValue] = React.useState("")
    const router = useRouter()
    const { id } = useParams()
    const [status, setStatus] = React.useState({
      message: '',
      status: ''
    })
    const [isloading, setIsloading] = React.useState(false)
    const handelSubmit = async () => {
      try {
        setIsloading(true)
        if (!id) {
          router.push('/auth/signin')
        }
        const response = await verifyTokenUser({id:id[0] as string,token:value})
        if (response.status === 'success') {
          setStatus({
            message: response.message,
            status: response.status
          })
          router.push('/auth/signin')
        }
        else {
          setStatus({
            message: response.message,
            status: response.status
          })
        }
      } catch (error: any) {
        setStatus({
          message: error.message,
          status: 'error'
        })
      }
      finally {
        setIsloading(false)
      }
    }
    return (
        <div className="flex flex-col gap-3">
      <InputOTP
      value={value}
      disabled={isloading}
      onChange={(value) => setValue(value)}
      onComplete={handelSubmit}
      maxLength={6}>
        <InputOTPGroup
        className=" gap-3"
        >
          <InputOTPSlot
          className=" rounded"
          index={0} />
          <InputOTPSlot
          className=" rounded"
          index={1} />
          <InputOTPSlot
          className=" rounded"
          index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      {status.message && 
       <div
       className={`text-center w-full p-3 rounded   mt-3 text-sm ${status.status === 'error' ? 'text-red-500 bg-red-500/10' : 'text-green-500 bg-green-500/10'}`}>
      {status.status === 'error' ? (
         <p className="text-red-500">{status.message}</p>
      ) : (
         <p className="text-green-500">{status.message}</p>
      )}
    </div>
      }
     </div>
    )
  }
  