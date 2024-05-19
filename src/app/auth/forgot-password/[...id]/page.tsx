'use client';

import AlertMessage from "@/components/for-all/alert-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import z from 'zod';
import { useState } from "react";
import { useParams } from "next/navigation";
import { resetPassword } from "@/(db)/(auth)/user-actions";

type ResErrType = {
  status: string;
  message: string;
}

const passwordSchema = z.object({
  password: z.string().min(8, {
    message: 'حاول استخدام كلمة مرور أكثر أمانًا تحتوي على ما لا يقل عن 8 أحرف'
  }),
  confirmPassword: z.string().min(8, {
    message: 'حاول استخدام كلمة مرور أكثر أمانًا تحتوي على ما لا يقل عن 8 أحرف'
  })
});

const ResetPasswordPage = () => {
  const [err, setErr] = useState({
    password: '',
    confermPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [confermPassword, setConfermPassword] = useState('');
  const [resErr, setResErr] = useState<ResErrType>({
    status: '',
    message: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    try {
      event.preventDefault();
      setLoading(true);
      const form = Object.fromEntries(formData.entries());
      const result = passwordSchema.parse(form);
      const res = await resetPassword({ ...result, secret: id[0] as string });

      if (res.status === 'error') {
        setResErr({
          status: 'error',
          message: res.message
        });
        return;
      }

      setResErr({
        status: 'success',
        message: res.message
      });

      setErr({
        password: '',
        confermPassword: ''
      });
    } catch (error: any) {
      if (error.errors) {
        error.errors.map((err: any) => {
          if (err.path[0] === 'password') {
            setErr((prev) => ({
              ...prev,
              password: err.message
            }));
          }
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen py-6 relative overflow-hidden px-3 lg:p-0 w-full flex justify-center lg:justify-start items-center">

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
        <form onSubmit={(event) => handleSubmit(event, new FormData(event.currentTarget))} className="w-full lg:max-w-[33rem] flex justify-start items-start flex-col gap-5">
          <Button type="submit" disabled={loading} variant={'outline'} className='size-16 flex justify-center items-center '>
            <svg className="text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
              <path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <div className="flex w-full justify-start items-start flex-col">
            <span className='text-3xl font-bold flex justify-start items-center  '>
              إعادة تعيين كلمة المرور
            </span>
            <p className='text-sm font-normal text-slate-400'>
              الرجاء إدخال كلمة المرور الجديدة لإعادة تعيين حسابك
            </p>
            {resErr?.status === 'error' &&
              <AlertMessage
                title='حدث خطأ'
                className='bg-red-500/10 text-red-500'
                icon={
                  <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M15.001 9.98933C15.001 11.6436 13.6592 12.9845 12.0039 12.9845C10.3486 12.9845 9.00684 11.6436 9.00684 9.98933C9.00684 8.33514 10.3486 6.99414 12.0039 6.99414C13.6592 6.99414 15.001 8.33514 15.001 9.98933Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M11.9941 16.9775H12.0031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.4951 2.00195C20.3286 2.90051 19.4961 4.75753 17.498 4.99715" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3.51172 2.00195C3.67823 2.90051 4.51074 4.75753 6.5088 4.99715" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8.83984 3.69401C5.58597 5.14247 4.44377 8.62453 4.52056 10.4663C3.39754 10.3895 2.02233 10.5153 2.0012 11.9514C1.98007 13.3875 3.46473 13.6414 4.52056 13.4687V19.8764C4.53825 20.4068 4.58587 21.1007 5.13486 21.3441C6.41145 21.91 7.48648 20.193 8.65453 20.2717C9.5626 20.333 10.877 22.0912 12.0328 21.995C13.3715 21.8835 14.4018 20.2772 15.4255 20.2772C16.6393 20.2772 16.852 21.2779 18.3136 21.4372C19.4038 21.5561 19.5147 20.5165 19.5147 19.957V13.4808C21.404 13.715 22.1527 12.878 21.9722 11.6991C21.7591 10.3079 20.1255 10.4073 19.4754 10.4961C19.5764 9.46164 19.11 8.15601 18.9086 7.64425C18.6118 6.73319 17.3921 4.57959 14.7717 3.51174C12.1513 2.4439 9.7133 3.23358 8.83984 3.69401Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                description={resErr.message ?? ''}
              />
            }
            {resErr?.status === 'success' &&
              <AlertMessage
                title='نجاح'
                className='bg-green-500/10 text-green-500'
                icon={
                  <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M9.03658 10.8665L10.0925 12.9957C10.2364 13.2921 10.6204 13.5764 10.9444 13.6309L12.8582 13.9515C14.082 14.1571 14.37 15.0524 13.4881 15.9355L12.0003 17.4356C11.7483 17.6897 11.6103 18.1796 11.6883 18.5305L12.1142 20.3875C12.4502 21.8574 11.6763 22.426 10.3864 21.6578L8.59263 20.5871C8.26867 20.3935 7.73473 20.3935 7.40476 20.5871L5.61096 21.6578C4.3271 22.426 3.54719 21.8513 3.88315 20.3875L4.3091 18.5305C4.3871 18.1796 4.24911 17.6897 3.99714 17.4356L2.5093 15.9355C1.6334 15.0524 1.91537 14.1571 3.13923 13.9515L5.05302 13.6309C5.37099 13.5764 5.75494 13.2921 5.89893 12.9957L6.95481 10.8665C7.53075 9.71116 8.46665 9.71116 9.03658 10.8665Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L14 10M16 2L11 7M20 10L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
                description={resErr.message ?? ''}
              />
            }
          </div>
          <div className="flex mt-7 w-full justify-start items-start flex-col gap-3">
            <Label className='font-semibold' htmlFor="password">
              كلمة المرور
            </Label>
            <Input
              className='w-full'
              type="password"
              placeholder="أدخل كلمة المرور الجديدة"
              autoComplete="password"
              name='password'
            />
            <p className='text-destructive text-sm font-normal'>
              {err.password}
            </p>
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-3">
            <Label className='font-semibold' htmlFor="confirmPassword">
              تأكيد كلمة المرور
            </Label>
            <Input
              className='w-full'
              type="password"
              placeholder="أدخل كلمة المرور الجديدة"
              autoComplete="password"
              name='confirmPassword'
            />
            <p className='text-destructive text-sm font-normal'>
              {err.confermPassword}
            </p>
          </div>
          <Button
            type='submit'
            isloading={loading}
            disabled={loading}
            variant={'default'}
            className='flex gap-4 w-full justify-center items-center '
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="M12 16.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className='text-sm font-semibold'>
              تغيير كلمة المرور
            </span>
          </Button>
          <Link href={'/'} className="w-full duration-500 transition-all ease-in-out gap-2 text-slate-400 hover:text-slate-500 flex justify-center items-center">
            <span className='text-base font-semibold'>
              تسجيل الدخول
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
              <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

          </Link>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage;
