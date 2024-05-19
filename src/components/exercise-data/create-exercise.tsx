'use client';
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from '@/components/ui/textarea'
import { ExerciseSchema } from '@/app/types/app';
import { Input } from '../ui/input';

const CreateExercise = () => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isOpened, setIsOpened] = React.useState(false)
    const [error, setError] = React.useState(null)

    const form = useForm<z.infer<typeof ExerciseSchema>>({
        resolver: zodResolver(ExerciseSchema)
    })

    const onSubmit = (data: z.infer<typeof ExerciseSchema>) => {
        console.log(data)
    }

    const handelIsLoaded = () => {
        setIsLoaded(true)
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>

                <Button
                    className=' mt-3 flex text-white justify-center items-center gap-1'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"}>
                        <path d="M11 15C6.58172 15 3 13.6569 3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.1679 22 11.3346 21.9981 11.5 21.9942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M7 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M17 16.6667V18M17 18V19.3333M17 18H18.3333M17 18H15.6667M21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    إنشاء بيانات
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent
            className=''
            >
                <AlertDialogHeader
                className='flex flex-col justify-start items-start  gap-2 w-full'
                >
                    <AlertDialogTitle>
                        إنشاء بيانات تمرين
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        يرجى تعبئة الحقول التالية لإنشاء بيانات تمرين جديدة.
                    </AlertDialogDescription>

                    <Form
                    
                    {...form} onSubmit={form.handleSubmit(onSubmit)}>
                        <form className="space-y-8 w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="flex justify-start items-start flex-col">
                                        <FormLabel>اسم التمرين</FormLabel>
                                        <Input
                                            {...field}
                                            placeholder='اسم التمرين هنا'
                                            type="text"
                                            className="input"
                                        />
                                        <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="flex justify-start items-start flex-col">
                                        <FormLabel>الوصف</FormLabel>
                                        <Textarea
                                            {...field}
                                            placeholder='الوصف هنا' 
                                            className="input"
                                        />
                                        <FormMessage>{form.formState.errors.description?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="difficulty"
                                render={({ field }) => (
                                    <FormItem className="flex justify-start items-start flex-col">
                                        <FormLabel>الصعوبة</FormLabel>
                                        <Select
                                            {...field}
                                            className="input"
                                        >
                                            <SelectTrigger>
                                                <SelectValue>{field.value}</SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>الصعوبة</SelectLabel>
                                                    <SelectItem value="سهل">سهل</SelectItem>
                                                    <SelectItem value="متوسط">متوسط</SelectItem>
                                                    <SelectItem value="صعب">صعب</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage>{form.formState.errors.difficulty?.message}</FormMessage>
                                    </FormItem>
                                )}
                            />
                            <div
                                className=" w-full flex justify-end items-center gap-2"
                            >
                                <AlertDialogCancel>إلغاء</AlertDialogCancel>
                                <Button
                                    type="submit"
                                >
                                    إنشاء بيانات
                                </Button>
                            </div>
                        </form>
                    </Form>

                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CreateExercise

