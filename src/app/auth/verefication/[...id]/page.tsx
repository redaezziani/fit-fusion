'use client';
import { VerificationOTP } from "@/components/auth/verefication";
const VereficationCodePage = () => {
  
  return (
    <div className=" h-screen overflow-hidden w-full relative flex justify-center items-center gap-9">
     
        <div className="flex">
          <VerificationOTP/>
        </div>
    </div>
  )
}

export default VereficationCodePage