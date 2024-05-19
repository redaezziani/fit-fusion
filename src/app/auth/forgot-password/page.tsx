'use client';

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { forgetPassword } from '@/(db)/(auth)/user-actions'
import { useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AlertMessage from '@/components/auth/alert-message';
import { ResErrType } from '@/app/types/help';
import { Button } from '@/components/ui/button';

const emailSchema = z.object({
  email: z.string().email({ message: 'الرجاء إدخال بريد إلكتروني صالح لإرسال رابط إعادة تعيين كلمة المرور.' })
})

const ForgetPage = () => {
  const [err, setErr] = useState('')
  const [isloading, setIsloading] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [resErr, setResErr] = useState<ResErrType>({
    status: '',
    message: ''
  })

  const handelSubmit = async () => {
    try {
      setIsloading(true);
      const result = await emailSchema.parseAsync({ email });
      const userEmail = result.email;
      const res = await forgetPassword(userEmail) as any;
      console.log(res)
      setResErr({
        status: res.status,
        message: res.message
      });

    } catch (error: any) {
      console.log(error)
      if (error.errors) {
        error.errors.map((err: any) => {
          if (err.path[0] === 'email') {
            setErr(err.message);
          }
        });
      }
    } finally {
      setIsloading(false);
      setEmail('');
      setErr('');
    }
  }

  return (
    <div className=" h-screen py-6 relative  overflow-hidden px-3 lg:p-0 w-full  flex justify-center lg:justify-start items-center">
      <div className="w-1/2 h-full py-2 hidden lg:block">
      <img
        className=' w-full rounded-l-lg object-cover  aspect-auto'
        src="/login.jpg" alt="login" />
      </div>
      <div className="flex relative h-full w-full lg:w-1/2  justify-center items-center flex-col">
        <div className="  z-50 w-full fixed lg:absolute  top-0 right-0  px-4 py-3 text-white">
        <Link
          href='/'
        className=" w-full flex justify-end px-10 gap-2 items-center">
            
            <h2
              className=" text-slate-900 mr-3 dark:text-slate-50 font-bold"
            >
              زاندر أيو
            </h2>
             <svg 
              className="text-slate-900 ml-3 dark:text-slate-50"
            width="30" height="30" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.32961 43.2093C0 56.0745 0 72.3843 0 105.004C0 137.623 0 153.933 5.32961 166.798C12.4341 183.948 26.0596 197.574 43.2093 204.678C56.0745 210.008 72.3843 210.008 105.004 210.008C137.623 210.008 153.933 210.008 166.798 204.678C183.948 197.574 197.574 183.948 204.678 166.798C209.454 155.269 209.95 140.974 210.002 114.653H131.113L89.679 172.547L97.6252 114.653H59.0292L114.653 37.4608L107.274 94.2197H209.999C209.935 68.6209 209.385 54.5717 204.678 43.2093C197.574 26.0596 183.948 12.4341 166.798 5.32961C153.933 0 137.623 0 105.004 0C72.3843 0 56.0745 0 43.2093 5.32961C26.0596 12.4341 12.4341 26.0596 5.32961 43.2093Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      
        <div
          className="w-full lg:max-w-[33rem] flex justify-start items-start flex-col gap-5"
        >
          <Button
            onClick={handelSubmit}
            disabled={isloading}
            variant={'outline'}
            className=' size-16 flex justify-center items-center '
          >
            <svg
              className=' text-slate-400'
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M7.42857 3.36201C11.3996 0.664089 17.136 2.12432 19.2301 6.41803M10.8571 21.9236C15.5839 22.5822 20 18.8952 20 14.2103V10.3333M7.42857 20.6058C5.35602 19.1977 4 16.8583 4 14.2103V9.75757C4 8.57285 4.27144 7.44988 4.75704 6.44444" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 13.8C16 16.1196 14.2091 18 12 18C9.79086 18 8 16.1196 8 13.8V10.2C8 9.55584 8.13811 8.94555 8.38493 8.4M12 6C14.2091 6 16 7.8804 16 10.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 10.5L12 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Button>
          <div className="flex w-full justify-start items-start flex-col">
            <span
              className='text-2xl gap-3  font-bold flex justify-start items-center  '
            >
              هل نسيت كلمة المرور؟
            </span>
            <p
              className='text-sm font-normal text-slate-400'
            >
              أدخل عنوان بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك.
            </p>
            {resErr?.status === 'error' &&
              <AlertMessage
                title='حدث خطأ'
                className=' bg-red-500/10 text-red-500'
                icon={
                  <svg
                    className=' text-red-500'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M15.001 9.98933C15.001 11.6436 13.6592 12.9845 12.0039 12.9845C10.3486 12.9845 9.00684 11.6436 9.00684 9.98933C9.00684 8.33514 10.3486 6.99414 12.0039 6.99414C13.6592 6.99414 15.001 8.33514 15.001 9.98933Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M11.9941 16.9775H12.0031" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.4951 2.00195C20.3286 2.90051 19.4961 4.75753 17.498 4.99715" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M3.51172 2.00195C3.67823 2.90051 4.51074 4.75753 6.5088 4.99715" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M8.83984 3.69401C5.58597 5.14247 4.44377 8.62453 4.52056 10.4663C3.39754 10.3895 2.02233 10.5153 2.0012 11.9514C1.98007 13.3875 3.46473 13.6414 4.52056 13.4687V19.8764C4.53825 20.4068 4.58587 21.1007 5.13486 21.3441C6.41145 21.91 7.48648 20.193 8.65453 20.2717C9.5626 20.333 10.877 22.0912 12.0328 21.995C13.3715 21.8835 14.4018 20.2772 15.4255 20.2772C16.6393 20.2772 16.852 21.2779 18.3136 21.4372C19.4038 21.5561 19.5147 20.5165 19.5147 19.957V13.4808C21.404 13.715 22.1527 12.878 21.9722 11.6991C21.7591 10.3079 20.1255 10.4073 19.4754 10.4961C19.5764 9.46164 19.11 8.15601 18.9086 7.64425C18.6118 6.73319 17.3921 4.57959 14.7717 3.51174C12.1513 2.4439 9.7133 3.23358 8.83984 3.69401Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                }
                description={resErr.message ?? ''} />
            }
            {
              resErr?.status === 'success' &&
              <AlertMessage
                title='نجاح'
                className=' bg-green-500/10 text-green-500'
                icon={
                  <svg
                    className=' text-green-500'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M9.03658 10.8665L10.0925 12.9957C10.2364 13.2921 10.6204 13.5764 10.9444 13.6309L12.8582 13.9515C14.082 14.1571 14.37 15.0524 13.4881 15.9355L12.0003 17.4356C11.7483 17.6897 11.6103 18.1796 11.6883 18.5305L12.1142 20.3875C12.4502 21.8574 11.6763 22.426 10.3864 21.6578L8.59263 20.5871C8.26867 20.3935 7.73473 20.3935 7.40476 20.5871L5.61096 21.6578C4.3271 22.426 3.54719 21.8513 3.88315 20.3875L4.3091 18.5305C4.3871 18.1796 4.24911 17.6897 3.99714 17.4356L2.5093 15.9355C1.6334 15.0524 1.91537 14.1571 3.13923 13.9515L5.05302 13.6309C5.37099 13.5764 5.75494 13.2921 5.89893 12.9957L6.95481 10.8665C7.53075 9.71116 8.46665 9.71116 9.03658 10.8665Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 2L14 10M16 2L11 7M20 10L17 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                }
                description={resErr.message ?? ''} />
            }
          </div>
          <div className="flex mt-7 w-full justify-start items-start flex-col gap-4">
            <Label
              className=' font-semibold'
              htmlFor="email">البريد الإلكتروني</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=' w-full'
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              autoComplete="email"
              name='email'
            />
            <p
              className=' text-destructive text-sm font-normal'
            >
              {err}
            </p>
          </div>
          <Button
            onClick={handelSubmit}
            isloading={isloading}
            disabled={isloading}
            variant={'default'}
            className='   flex gap-4 w-full justify-center items-center '
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path d="M11.922 4.79004C16.6963 3.16245 19.0834 2.34866 20.3674 3.63261C21.6513 4.91656 20.8375 7.30371 19.21 12.078L18.1016 15.3292C16.8517 18.9958 16.2267 20.8291 15.1964 20.9808C14.9195 21.0216 14.6328 20.9971 14.3587 20.9091C13.3395 20.5819 12.8007 18.6489 11.7231 14.783C11.4841 13.9255 11.3646 13.4967 11.0924 13.1692C11.0134 13.0742 10.9258 12.9866 10.8308 12.9076C10.5033 12.6354 10.0745 12.5159 9.21705 12.2769C5.35111 11.1993 3.41814 10.6605 3.0909 9.64127C3.00292 9.36724 2.97837 9.08053 3.01916 8.80355C3.17088 7.77332 5.00419 7.14834 8.6708 5.89838L11.922 4.79004Z" stroke="currentColor" stroke-width="1.5" />
            </svg>
            <span
              className=' text-sm font-semibold'
            >
              إرسال رابط إعادة التعيين
            </span>
          </Button>
          <Link
            href={'/'}
            className="w-full duration-500 transition-all ease-in-out gap-2 text-slate-400 hover:text-slate-500  flex justify-center items-center">
            
            <p
            > الرئيسية</p>
            <svg
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
     
    </div>
  )
}

export default ForgetPage
