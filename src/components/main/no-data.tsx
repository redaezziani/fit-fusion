import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import CreateExercise from '../exercise-data/create-exercise'

const NoData = () => {
    return (
        <Card
            className=' min-h-[30rem] flex justify-center items-center w-full p-4 flex-col gap-2'
        >
            <svg
                className='w-12 h-12 text-slate-500 dark:text-slate-400'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                <path d="M10.9985 7.99951C15.4168 7.99951 18.9985 6.65637 18.9985 4.99951C18.9985 3.34266 15.4168 1.99951 10.9985 1.99951C6.58026 1.99951 2.99854 3.34266 2.99854 4.99951C2.99854 6.65637 6.58026 7.99951 10.9985 7.99951Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5.99854 10.8413C6.60012 11.0221 7.27288 11.1711 7.99854 11.2812" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10.9985 14.9995C6.58025 14.9995 2.99854 13.6564 2.99854 11.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5.99854 17.8413C6.60012 18.0221 7.27288 18.1711 7.99854 18.2812" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10.9985 21.9995C6.58025 21.9995 2.99854 20.6564 2.99854 18.9995V4.99951M18.9985 4.99951V10.4995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.7424 16.3781C15.7424 16.3181 15.7507 15.553 15.752 15.1186C15.7533 14.7217 15.7184 14.3389 15.908 13.9887C16.6184 12.5757 18.6584 12.7196 19.1624 14.159C19.2498 14.396 19.255 14.7717 19.2524 15.1186C19.2492 15.5619 19.2584 16.3781 19.2584 16.3781M15.7424 16.3781C14.6626 16.3781 14.2186 17.1577 14.0986 17.6375C13.9786 18.1173 13.9786 19.8566 14.0506 20.5763C14.2905 21.4759 14.8904 21.8477 15.4783 21.9677C16.0182 22.0157 18.2978 21.9977 18.9577 21.9977C19.9175 22.0157 20.6374 21.6558 20.9373 20.5763C20.9973 20.2164 21.0573 18.2373 20.9073 17.6375C20.5894 16.6779 19.8583 16.3781 19.2584 16.3781M15.7424 16.3781H19.2584" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h2 className='text-lg font-bold'>لا توجد بيانات</h2>
            <p className='text-sm text-slate-500 text-center'>
                لا توجد بيانات لعرضها في هذا القسم حاليًا. يرجى المحاولة مرة أخرى في وقت لاحق.
            </p>
            <CreateExercise />
        </Card>
    )
}

export default NoData