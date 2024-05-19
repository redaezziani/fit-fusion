import React from 'react';

const Footer = () => {
  return (
    <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <div className="flex items-center justify-start gap-1">
              <a className="flex-none text-xl font-semibold dark:text-white" href="#" ariaLabel="Brand">
                  <svg ariaLabel="Logo"
                  className="flex-shrink-0 stroke-slate-700 dark:stroke-slate-50 size-8 sm:size-9"
                  width="40" viewBox="0 0 600 500"  fill="none"><rect x="379.447" y="43.748" width="172.095" height="418.666" rx="86.0473" strokeWidth="30"></rect><path d="M231.995 351.6L306.965 221.807L381.934 92.0154C404.822 52.3913 458.092 33.3388 500.917 49.4604C543.742 65.5819 559.905 110.773 537.018 150.397L387.079 409.981C364.191 449.605 310.921 468.657 268.096 452.536C225.271 436.414 209.108 391.224 231.995 351.6Z" strokeWidth="30"></path><path d="M278.239 272.481L278.206 272.539L278.173 272.597L201.072 408.622C180.402 445.088 131.538 462.758 92.2557 447.97C53.2008 433.268 38.461 392.055 59.3333 355.92L216.867 83.187C237.575 47.3364 285.772 30.0984 324.519 44.6849C363.283 59.2777 377.899 100.192 357.157 136.049L278.239 272.481Z" strokeWidth="30"></path></svg>
              </a>
              <p
              className="hidden sm:block  font-semibold dark:text-white ml-2"
              >
                  فيتفيوسن
              </p>
            </div>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">© 2024 فيتفيوسن. </p>
        </div>

        <div>
        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">المنتج</h4>

        <div className="mt-3 grid space-y-3 text-sm">
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">التسعير</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">سجل التغييرات</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الوثائق</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">تنزيل</a></p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">الشركة</h4>

        <div className="mt-3 grid space-y-3 text-sm">
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">من نحن</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">المدونة</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">وظائف</a> <span className="inline text-primary dark:text-primary">— نحن نوظف</span></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">العملاء</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">غرفة الأخبار</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">خريطة الموقع</a></p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">الموارد</h4>

        <div className="mt-3 grid space-y-3 text-sm">
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">المجتمع</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">المساعدة والدعم</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الكتاب الإلكتروني</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الجديد</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الحالة</a></p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">المطورين</h4>

        <div className="mt-3 grid space-y-3 text-sm">
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">واجهة برمجة التطبيقات</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الحالة</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">GitHub</a> <span className="inline text-primary dark:text-primary">— جديد</span></p>
        </div>

        <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">الصناعات</h4>

        <div className="mt-3 grid space-y-3 text-sm">
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">الخدمات المالية</a></p>
          <p><a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">التعليم</a></p>
        </div>
      </div>
    </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex items-center gap-x-3">
            {/* Language Dropdown */}
            <div className="hs-dropdown [--placement:top-left] relative inline-flex">
              <button id="footer-language-dropdown" type="button" className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                <svg className="size-3 rounded-full"  id="flag-icon-css-us1" viewBox="0 0 512 512">
                  {/* Flag SVG */}
                </svg>
                الإنجليزية (الولايات المتحدة)
                <svg className="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>

              {/* Language Dropdown Menu */}
              <div className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700">
                <button className="hs-dropdown-item hover:bg-gray-50 dark:hover:bg-neutral-700">
                  {/* Language Option */}
                </button>
                {/* More language options */}
              </div>
            </div>
          </div>
          <div className="sm:ml-4 sm:flex sm:gap-x-4 mt-3 sm:mt-0">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
