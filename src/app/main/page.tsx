import dayjs from 'dayjs';
import NavBar from "@/components/main/nav-bar";
import { Button } from "@/components/ui/button";
import { Card } from '@/components/ui/card';
import { LineChart } from '@/components/main/area-chart';
import ChartLine from '@/components/main/area-chart';
import BarChart from '@/components/main/bar.chart';
import { CalendarForm } from '@/components/main/calander';
import NoData from '@/components/main/no-data';
import Footer from '@/components/main/footer';
// import Footer from '@/components/main/footer';

export default function MainPage() {
  const today = dayjs().format("dddd, MMMM D, YYYY");
  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const day = days[dayjs().day()];
  const latestWorkoutLog = {
    exerciseName: 'الضغطات',
    dateTime: '2024-05-20 10:00 صباحًا',
    notes: 'قمت بعمل 3 مجموعات من 10 تكرارات لكل مجموعة بوزن 50 كيلوغرام.',
  };

  const exerciseOfTheDay = {
    name: 'القرفصاء',
    description: 'القرفصاء هو تمرين مركب يستهدف عضلات الجسم السفلية، بما في ذلك الفخذين والساقين والمؤخرة.',
    difficulty: 'متوسط',
  };

  const currentGoal = {
    title: 'الجري لمسافة 5 كيلومترات',
    description: 'الجري لمسافة 5 كيلومترات بدون توقف لتحسين القدرة على التحمل.',
    deadline: '2024-06-30',
    isSet: true,
    isStarted: true,
    isAchieved: false,
  };
  return (
    <div className="w-full  flex relative flex-col justify-start items-center gap-3 overflow-x-hidden"
    >
      <div className="w-full absolute   top-0 mx-auto bg-gradient-to-b from-amber-50/10 via-primary/10 to-transparent  h-[45rem] z-0" />

      <NavBar />
      <div className="w-full z-10 overflow-hidden mt-32 max-w-6xl px-4 flex flex-col gap-3 justify-start items-start">
        <h1
          className='text-xl font-bold  w-full'
        >
          مرحبًا بك في تطبيق FitFusion لتتبع اللياقة البدنية
        </h1>

        <div className="flex gap-2 flex-wrap justify-start items-center ">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p
                className={`text-sm rounded-md border border-border  px-3 py-0.5 ${d === day ? '  bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              >{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card className='w-full p-2 min-h-28'>
            {/* Card 1: Latest Workout Log */}
            <h2
              className='text-lg font-bold'
            >
              أحدث سجل تمرين
            </h2>
            <p
              className='text-sm'
            >
              {latestWorkoutLog.dateTime}
            </p>

            <p
              className='text-sm text-slate-500'
            >
              {latestWorkoutLog.notes}
            </p>
            <p
              className='text-sm text-green-400'
            >
              {latestWorkoutLog.exerciseName}
            </p>
          </Card>

          {/* Card 2: Exercise of the Day */}
          <Card className='w-full p-2 min-h-28'>
            <h2
              className='text-lg font-bold'
            >
              تمرين اليوم
            </h2>
            <p
              className='text-sm'
            >
              {exerciseOfTheDay.name}
            </p>
            <p
              className='text-sm text-slate-500'
            >
              {exerciseOfTheDay.description}
            </p>
            <p
              className='text-sm text-amber-400'
            >
              الصعوبة: {exerciseOfTheDay.difficulty}
            </p>
          </Card>

          {/* Card 3: Current Goal */}
          <Card className='w-full p-2 min-h-28'>
            <h2
              className='text-lg font-bold'
            >
              الهدف الحالي
            </h2>
            <p
              className='text-sm'
            >
              {currentGoal.title}
            </p>
            <p
              className='text-sm text-slate-500'
            >
              {currentGoal.description}
            </p>
            <p
              className='text-sm text-primary'
            >
              الموعد النهائي: {currentGoal.deadline}
            </p>
          </Card>
        </div>
        <div className="mt-5 w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Card
            className='w-full flex justify-start items-start flex-col relative md:col-span-2 p-2 min-h-28 h-auto'
          >
            <CalendarForm />
            <ChartLine />
          </Card>
          <Card
            className='w-full p-2 min-h-28'
          >
            <CalendarForm />
            <BarChart />
          </Card>
        </div>
        <NoData />
        <h1
          className='text-xl font-bold  w-full'
        >
          بيانات التمرين
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card
            className='w-full p-2 min-h-28'
          >
            <div className="w-full group relative flex-col justify-center items-center flex aspect-video ">
              <svg
                className='w-12 h-12 text-slate-500 group-hover:scale-105 group-hover:text-primary duration-500 ease-in-out transition-all dark:text-slate-400'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} fill={"none"}>
                <path d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 20.9999L14.3359 18.384C14.1161 17.5182 13.6615 16.7276 13.0207 16.0965L11.5 14.599M6 11.1526C7 9.18281 8.53767 8.04144 12 8.0005M12 8.0005C12.2186 7.99792 12.5444 7.99714 12.8698 7.9972C13.3747 7.99728 13.6271 7.99732 13.8282 8.09128C14.0293 8.18524 14.2356 8.4317 14.6482 8.92463C14.7664 9.06586 14.8878 9.1924 15 9.27657M12 8.0005L10.7309 9.95871C10.0332 11.0353 9.68429 11.5736 9.67069 12.1388C9.66463 12.3906 9.70617 12.6412 9.79313 12.8775C9.98834 13.4081 10.4922 13.8051 11.5 14.599M15 9.27657C16.1547 10.1425 17.9627 10.4912 20 8.19827M15 9.27657L11.5 14.599" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className=' text-slate-500 font-semibold'>
                {/** runing workout exercise */}
                الجري
              </h2>
            </div>
          </Card>
          <Card
            className='w-full p-2 min-h-28'
          >
            <div className="w-full group relative flex-col justify-center items-center flex aspect-video ">
              <svg
                className='w-12 h-12 text-slate-500 group-hover:scale-105 group-hover:text-primary duration-500 ease-in-out transition-all dark:text-slate-400'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                <path d="M13 4.5C13 5.32843 12.3284 6 11.5 6C10.6716 6 10 5.32843 10 4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329M18 8.34546L16.2639 9.34233C15.3862 9.84631 14.9473 10.0983 14.4623 10.1209C13.9774 10.1434 13.5172 9.93325 12.5969 9.5129L11.8137 9.15516M8.9329 14.9258H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516M8.9329 14.9258C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p
                className='text-slate-500 font-semibold'

              >
                {/** squats workout exercise */}
                القرفصاء
              </p>
            </div>
          </Card>
          <Card
            className='w-full p-2 min-h-28'
          >
            <div className="w-full group relative flex-col justify-center items-center flex aspect-video ">
              <svg
                className='w-12 h-12 text-slate-500 group-hover:scale-105 group-hover:text-primary duration-500 ease-in-out transition-all dark:text-slate-400'
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill={"none"}>
                <path d="M14.5002 4.5C14.5002 5.32843 13.8286 6 13.0002 6C12.1717 6 11.5002 5.32843 11.5002 4.5C11.5002 3.67157 12.1717 3 13.0002 3C13.8286 3 14.5002 3.67157 14.5002 4.5Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M19 8.89062L13.9777 8.29142M19 21L18.5438 17.5301C18.2903 15.6021 18.1636 14.6381 17.4915 14.1298C16.8194 13.6215 15.8722 13.7731 13.9777 14.0765L12.1402 14.3707M13.9777 8.29142L12.2231 8.08208C11.4204 7.98631 11.0191 7.93843 10.7146 8.14419C10.41 8.34995 10.299 8.74397 10.077 9.53203L9.4087 11.904C9.02319 13.2724 8.83044 13.9565 9.19196 14.3707C9.55348 14.7849 10.2465 14.674 11.6326 14.452L12.1402 14.3707M13.9777 8.29142L12.1402 14.3707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 17L9.44721 18.1056C9.15692 18.6862 8.68616 19.1569 8.10557 19.4472L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p
                className='text-slate-500 font-semibold'

              >
                {/** warm-up workout exercise */}
                التمارين التحضيرية
              </p>
            </div>
          </Card>

        </div>
        <Footer />
      </div>

    </div>
  );
}
