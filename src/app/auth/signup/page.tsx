'use client';
import SubmitButton from '@/components/admin/submit'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpSchema } from '@/app/types/from';
import { SignUp } from '@/(db)/(auth)/user-actions'
import {  useState } from 'react'
import { z } from 'zod'
import Link from 'next/link';
import { Eye, EyeOff, ShieldAlert } from 'lucide-react';
import AlertMessage from '@/components/auth/alert-message';
import { ResErrType } from '@/app/types/help';
import { GiSuckeredTentacle } from "react-icons/gi";
const SignUpPage = () => {
  const [err, setErr] = useState({
    email: '',
    password: '',
    name : ''
  });
  const [resErr, setResErr] = useState<ResErrType>({
    status: '',
    message: ''
  })
  const [isloading, setIsloading] = useState(false);
  const [isHide, setIsHide] = useState(true)
  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    try {
      event.preventDefault();
      setIsloading(true);
      const form = Object.fromEntries(formData.entries());
      const result = await SignUpSchema.parseAsync(form);
      setErr({
        email: '',
        password: '',
        name : ''
      });
      if (result.password !== formData.get('passwordConfirm') as string) {
        setErr((prev) => ({
          ...prev,
          password: 'كلمة المرور غير متطابقة'
        }));
        return;
      }
      const res = await SignUp(result) as any;
      if (res.status === 'error') {
        setResErr({
          status: res.status,
          message: res.message
        });
      }
      else {
        setResErr({
          status: res.status,
          message: res.message
        });
      }
    } catch (error: any) {
      if (error.errors) {
        error.errors.map((err: z.ZodIssue) => {
          if (err.path[0] === 'email') {
            setErr((prev) => ({
              ...prev,
              email: err.message
            }));
          }
          if (err.path[0] === 'password') {
            setErr((prev) => ({
              ...prev,
              password: err.message
            }));
          }
          if (err.path[0] === 'name') {
            setErr((prev) => ({
              ...prev,
              name: err.message
            }));
          }
          
        });
      }
    }
    finally {
      setIsloading(false);
    }
  }
  const handelHide = () => {
    setIsHide(!isHide)
  }
  return (
    <div className=" h-screen overflow-hidden px-3 lg:p-0 w-full relative flex justify-center lg:justify-start items-center">
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
              فيت فيوجن
            </h2>
            <svg aria-label="Logo"
              class="flex-shrink-0 stroke-slate-700  dark:stroke-slate-50 size-8 sm:size-9"
              width="40" viewBox="0 0 600 500" fill="none"><rect x="379.447" y="43.748" width="172.095" height="418.666" rx="86.0473" strokeWidth="30"></rect><path d="M231.995 351.6L306.965 221.807L381.934 92.0154C404.822 52.3913 458.092 33.3388 500.917 49.4604C543.742 65.5819 559.905 110.773 537.018 150.397L387.079 409.981C364.191 449.605 310.921 468.657 268.096 452.536C225.271 436.414 209.108 391.224 231.995 351.6Z" strokeWidth="30"></path><path d="M278.239 272.481L278.206 272.539L278.173 272.597L201.072 408.622C180.402 445.088 131.538 462.758 92.2557 447.97C53.2008 433.268 38.461 392.055 59.3333 355.92L216.867 83.187C237.575 47.3364 285.772 30.0984 324.519 44.6849C363.283 59.2777 377.899 100.192 357.157 136.049L278.239 272.481Z" strokeWidth="30"></path></svg>
          </Link>
        </div>
      <form
        onSubmit={(event) => handelSubmit(event, new FormData(event.currentTarget))}
        className="w-full lg:max-w-[33rem] flex justify-start items-start flex-col gap-5"
      >
       <div className="flex justify-start items-start  flex-col">
            <span
              className='text-3xl  font-bold flex justify-start items-center  '
            >
             أنشئ حسابًا جديدًا
            </span>
            <p
              className='text-sm font-normal text-slate-400'
            >
              كن عضوًا - ستستمتع بمنتجات جديدة، وعروض حصرية، وصفقات. يرجى تعبئة النموذج لإنشاء حساب
            </p>
            {resErr?.status === 'error' && <AlertMessage
              title='حدث خطأ'
              className=' bg-red-500/10 text-red-500'
              icon={<ShieldAlert className=' text-red-500' size={20} />}
              description={resErr.message??''}
            /> 
            }
            {
              resErr?.status === 'success' && <AlertMessage
              title='تم بنجاح'
              className=' bg-green-500/10 text-green-500'
              icon={<GiSuckeredTentacle className=' text-green-500' size={20} />}
              description={resErr.message??''}/>
            }
          </div>
        <div className="flex mt-7 w-full justify-start items-start flex-col gap-3">
          <Label
            className=' font-semibold'
            htmlFor="name">الاسم</Label>
          <Input
            className=' w-full'
            type="text"
            placeholder="أدخل اسمك"
            autoComplete="name"
            name='name'
          />
          <p
            className=' text-red-600 text-sm font-normal'
          >
            {err.name}
          </p>
        </div>

        <div className="flex  w-full justify-start items-start flex-col gap-3">
          <Label
            className=' font-semibold'
            htmlFor="email">البريد الإلكتروني</Label>
          <Input
            className=' w-full'
            type="email"
            placeholder="أدخل البريد الإلكتروني"
            autoComplete="email"
            name='email'
          />
          <p
            className=' text-red-600 text-sm font-normal'
          >
            {err.email}
          </p>
        </div>
        <div className="flex w-full justify-start items-start flex-col gap-3">
          <Label
            className=' font-semibold'
            htmlFor="password">كلمة المرور</Label>
          <div className="flex relative w-full justify-start items-center">
            <Input
              className=' w-full z-10'
              type={isHide ? 'password' : 'text'}
              placeholder="أدخل كلمة المرور"
              autoComplete="current-password"
              name='password'
            />
            <div
              onClick={handelHide}
              className="flex cursor-pointer z-30 left-3 absolute h-[90%] aspect-square bg-background justify-center items-center">
              {isHide ? <Eye className='  text-slate-300 ' size={18} /> : <EyeOff className=' text-pretty ' size={18} />}
            </div>
          </div>
          <p
            className=' text-red-600 text-sm font-normal'
          >
            {err.password}
          </p>
        </div>
        <div className="flex w-full justify-start items-start flex-col gap-3">
          <Label
            className=' font-semibold'
            htmlFor="passwordConfirm">تأكيد كلمة المرور</Label>
          <Input
            className=' w-full'
            type="password"
            placeholder="تأكيد كلمة المرور"
            autoComplete="current-password"
            name='passwordConfirm'
          />
          <p
            className=' text-red-600 text-sm font-normal'
          >
            {err.password}
          </p>
        </div>

        <div className="flex gap-3 mt-3 justify-between items-center w-full ">
          <div className="flex group justify-start gap-3 items-center">
            <Checkbox
              className=''
              color=''
              name='rememberMe'
            />
            <Label
              className=' font-semibold text-slate-300 group-data-[state=checked]:bg-primary'
            >
              أوافق على <Link
              href='/terms'
              className=' text-primary'>الشروط والأحكام</Link> و<Link
              href='/privacy'
              className=' text-primary'>سياسة الخصوصية</Link>
            </Label>
          </div>
        </div>
        <Button
            type='submit'
            className=' w-full'
            isloading={isloading}>
          إنشاء حساب
          </Button>
        <div className="w-full flex justify-center items-center">
          <p
            className=' text-slate-400'
          >
            ليس لديك حساب؟ <Link
            href={'/auth/signin'}
            className=' ml-1 text-primary'>تسجيل الدخول</Link>
          </p>
        </div>
      </form>
    </div>
    
    </div>
  )
}

export default SignUpPage
