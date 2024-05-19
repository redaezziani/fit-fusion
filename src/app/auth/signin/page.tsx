'use client';
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInSchema } from '@/app/types/from';
import { SignIn } from '@/(db)/(auth)/user-actions'
import { useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, ShieldAlert } from 'lucide-react';
import AlertMessage from '@/components/auth/alert-message';
import { ResErrType } from '@/app/types/help';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@/components/auth/auth-buttons';

const SignInPage = () => {
  const [err, setErr] = useState({
    email: '',
    password: ''
  });
  const [isloading, setIsloading] = useState(false);
  const [isHide, setIsHide] = useState(true)
  const router = useRouter();
  const [resErr, setResErr] = useState<ResErrType>({
    status: '',
    message: ''
  })
  const handelSubmit = async (event: React.FormEvent<HTMLFormElement>, formData: FormData) => {
    try {
      event.preventDefault();
      setIsloading(true);
      const form = Object.fromEntries(formData.entries());
      const result = await SignInSchema.parseAsync(form);
      setErr({
        email: '',
        password: ''
      });

      const res = await SignIn(result) as any;
      if (res.status === 'success') {
        router.refresh();
        return null;
      } else if (res.status === 'error') {
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
        });
      }
    } finally {
      setIsloading(false);
    }
  }

  const handelHide = () => {
    setIsHide(!isHide)
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
              مرحبًا مجددًا

            </span>
            <p
              className='text-sm font-normal text-slate-400'
            >
              كن عضوًا - ستستمتع بمنتجات جديدة، وعروض حصرية، وصفقات. يرجى تسجيل الدخول إلى حسابك
            </p>
            {resErr?.status === 'error' && <AlertMessage
              title='حدث خطأ'
              className=' bg-red-500/10 text-red-500'
              icon={<ShieldAlert className=' text-red-500' size={20} />}
              description={resErr.message ?? ''}
            />}
          </div>
          <div className="flex mt-7 w-full justify-start items-start flex-col gap-2">
            <Label
              className=' font-semibold'
              htmlFor="email">البريد الإلكتروني</Label>
            <Input
              className=' w-full'
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              autoComplete="email"
              name='email'
            />
            <p
              className=' text-destructive text-sm font-normal'
            >
              {err.email}
            </p>
          </div>
          <div className="flex w-full justify-start items-start flex-col gap-2">
            <Label
              className=' font-semibold'
              htmlFor="password">كلمة المرور</Label>
            <div className="flex relative w-full justify-start items-center">
              <Input
                className=' w-full z-10'
                type={isHide ? 'password' : 'text'}
                placeholder="أدخل كلمة المرور الخاصة بك"
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
              className=' text-destructive text-sm font-normal'
            >
              {err.password}
            </p>
            <Link
              href='/auth/forgot-password'
              className=' transition-all ease-in-out duration-300 text-slate-400 hover:text-slate-600 text-sm font-normal '
            >
              هل نسيت كلمة المرور؟
            </Link>
          </div>
          <div className="flex gap-2 justify-between items-center w-full ">
            <div className="flex group-checked:text-pretty text-slate-400  justify-start gap-2 items-center">
              <Checkbox
                name='send_emails'
                id='send_emails'
                defaultChecked={true}
              />
              <Label
                className=' text-xs'
              >
                أريد تلقي رسائل بريد إلكتروني حول الفعاليات، وتحديثات المنتجات، وإعلانات الشركة.
              </Label>
            </div>
          </div>
          <Button
            type='submit'
            className=' w-full'
            isloading={isloading}>
            تسجيل الدخول
          </Button>
          <div className="flex flex-col gap-2 justify-center items-center w-full mt-5">
            <SignInButton
              provider='google'
            >
              <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
              <span>تسجيل الدخول باستخدام جوجل</span>
            </SignInButton>
            <SignInButton
              provider='github'
            >
              <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792">
                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
              </svg>
              <span>تسجيل الدخول باستخدام جيثب</span>
            </SignInButton>
          </div>

          <div className="w-full flex justify-center items-center">
            <p
              className=' text-slate-400 flex gap-1'
            >
              ليس لديك حساب؟
              <Link
                href={'/auth/signup'}
                className=' ml-1 text-primary'>سجل الآن</Link>
            </p>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignInPage
