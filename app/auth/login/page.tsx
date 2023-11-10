export default function page() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
      <form
        className="space-y-6"
        action="#"
        method="POST">
        <div className="flex border rounded-full mb-1 justify-center items-center p-2 min-h-[63.1px] border-gray-200">
          <div className="px-4 border-r-2 mr-2  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.49984 2.5H17.4998C17.7209 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V16.6667C18.3332 16.8877 18.2454 17.0996 18.0891 17.2559C17.9328 17.4122 17.7209 17.5 17.4998 17.5H2.49984C2.27882 17.5 2.06686 17.4122 1.91058 17.2559C1.7543 17.0996 1.6665 16.8877 1.6665 16.6667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5ZM16.6665 6.03167L10.0598 11.9483L3.33317 6.01333V15.8333H16.6665V6.03167ZM3.759 4.16667L10.0507 9.71833L16.2515 4.16667H3.759Z"
                fill="#6A6A6A"></path>
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center w-full  relative">
            <label className="text-neutral-400 text-sm pl-3 opacity-100">
              Email address
            </label>
            <input
              type="email"
              className=" block h-6 rounded-lg w-full border-none transform transition-transform ease-out duration-500
             translate-y-0
              bg-white px-3 py-2 placeholder-stone-900 text-stone-900 text-base font-medium
           focus:outline-none focus:ring-0 focus:ring-offset-0
            disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed disabled:bg-gray-200"
              placeholder="Enter email address"
              required
              value=""
            />
          </div>
        </div>
        <div className="flex border rounded-full mb-1 justify-center items-center p-2 min-h-[63.1px] border-gray-200">
          <div className="px-4 border-r-2 mr-2  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_269_3689)">
                <path
                  d="M15.8333 8.33329H16.6667C16.8877 8.33329 17.0996 8.42109 17.2559 8.57737C17.4122 8.73365 17.5 8.94561 17.5 9.16663V17.5C17.5 17.721 17.4122 17.9329 17.2559 18.0892C17.0996 18.2455 16.8877 18.3333 16.6667 18.3333H3.33333C3.11232 18.3333 2.90036 18.2455 2.74408 18.0892C2.5878 17.9329 2.5 17.721 2.5 17.5V9.16663C2.5 8.94561 2.5878 8.73365 2.74408 8.57737C2.90036 8.42109 3.11232 8.33329 3.33333 8.33329H4.16667V7.49996C4.16667 6.73392 4.31755 5.97537 4.6107 5.26764C4.90386 4.55991 5.33354 3.91684 5.87521 3.37517C6.41689 2.83349 7.05995 2.40381 7.76768 2.11066C8.47541 1.81751 9.23396 1.66663 10 1.66663C10.766 1.66663 11.5246 1.81751 12.2323 2.11066C12.9401 2.40381 13.5831 2.83349 14.1248 3.37517C14.6665 3.91684 15.0961 4.55991 15.3893 5.26764C15.6825 5.97537 15.8333 6.73392 15.8333 7.49996V8.33329ZM4.16667 9.99996V16.6666H15.8333V9.99996H4.16667ZM9.16667 11.6666H10.8333V15H9.16667V11.6666ZM14.1667 8.33329V7.49996C14.1667 6.39489 13.7277 5.33508 12.9463 4.55368C12.1649 3.77228 11.1051 3.33329 10 3.33329C8.89493 3.33329 7.83512 3.77228 7.05372 4.55368C6.27232 5.33508 5.83333 6.39489 5.83333 7.49996V8.33329H14.1667Z"
                  fill="#6A6A6A"></path>
              </g>
              <defs>
                <clipPath id="clip0_269_3689">
                  <rect
                    width="20"
                    height="20"
                    fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center w-full  relative">
            <label className="text-neutral-400 text-sm pl-3 opacity-100">
              Your password
            </label>
            <input
              type="password"
              name="password"
              className=" block h-6 rounded-lg w-full border-none transform transition-transform ease-out duration-500
             translate-y-0
              bg-white px-3 py-2 placeholder-stone-900 text-stone-900 text-base font-medium
           focus:outline-none focus:ring-0 focus:ring-offset-0
            disabled:text-slate-500 disabled:shadow-none disabled:cursor-not-allowed disabled:bg-gray-200"
              placeholder="Enter Password"
              value=""
            />
            <div className="absolute top-[10px] right-[16px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                className="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full my-6 h-6 relative">
          <div className="w-full h-px left-0 top-[11px] absolute bg-zinc-100"></div>
          <div className="w-[25px] h-6 px-1  right-0 left-0 mx-auto top-0 absolute bg-white justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-600 text-sm font-medium leading-normal">
              Or
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center max-w-[670px]">
          <button className="rounded-full text-sm lg:text-base font-bold border border-brand-textColor bg-brand-white  leading-normal shadow-md   active:shadow-lg text-brand-textColor px-20 py-4 transition ease-in-out duration-300 hover:cursor-pointer flex justify-center whitespace-nowrap relative w-full text-black">
            <span className="absolute top-4 left-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_185_2948)">
                  <path
                    d="M23.094 9.91355L13.3046 9.91309C12.8724 9.91309 12.522 10.2634 12.522 10.6957V13.823C12.522 14.2552 12.8724 14.6056 13.3046 14.6056H18.8174C18.2137 16.1722 17.087 17.4842 15.6496 18.3178L18.0002 22.387C21.7709 20.2062 24.0002 16.3799 24.0002 12.0965C24.0002 11.4866 23.9553 11.0506 23.8653 10.5597C23.797 10.1867 23.4732 9.91355 23.094 9.91355Z"
                    fill="#167EE6"></path>
                  <path
                    d="M11.9998 19.3047C9.30193 19.3047 6.94675 17.8306 5.68182 15.6494L1.61279 17.9948C3.6835 21.5836 7.56259 24.0003 11.9998 24.0003C14.1765 24.0003 16.2304 23.4143 17.9998 22.3929V22.3873L15.6491 18.3181C14.5739 18.9417 13.3297 19.3047 11.9998 19.3047Z"
                    fill="#12B347"></path>
                  <path
                    d="M18 22.3922V22.3866L15.6494 18.3174C14.5741 18.941 13.33 19.304 12 19.304V23.9996C14.1767 23.9996 16.2308 23.4135 18 22.3922Z"
                    fill="#0F993E"></path>
                  <path
                    d="M4.69566 12.0003C4.69566 10.6705 5.05856 9.42637 5.68205 8.3512L1.61302 6.00586C0.586031 7.76962 0 9.81797 0 12.0003C0 14.1826 0.586031 16.2309 1.61302 17.9947L5.68205 15.6494C5.05856 14.5742 4.69566 13.3301 4.69566 12.0003Z"
                    fill="#FFD500"></path>
                  <path
                    d="M11.9998 4.69566C13.759 4.69566 15.375 5.32078 16.6372 6.36061C16.9486 6.61711 17.4012 6.59859 17.6864 6.31336L19.9022 4.09758C20.2258 3.77395 20.2028 3.24422 19.8571 2.94431C17.7423 1.10967 14.9907 0 11.9998 0C7.56259 0 3.6835 2.41673 1.61279 6.00558L5.68182 8.35092C6.94675 6.16969 9.30193 4.69566 11.9998 4.69566Z"
                    fill="#FF4B26"></path>
                  <path
                    d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6866 6.31336L19.9024 4.09758C20.226 3.77395 20.2029 3.24422 19.8573 2.94431C17.7425 1.10963 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z"
                    fill="#D93F21"></path>
                </g>
                <defs>
                  <clipPath id="clip0_185_2948">
                    <rect
                      width="24"
                      height="24"
                      fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            Continue with Google
          </button>
        </div>
        <div>
          <button
            className=" bg-[#ff4800] hover:bg-[#CD7355] rounded-full text-sm lg:text-base font-bold border border-brand-primary bg-brand-primary hover:bg-brand-dark leading-normal shadow-md active:bg-brand-secondary active:shadow-lg text-white px-20 py-4 transition ease-in-out duration-300 hover:cursor-pointer flex justify-center whitespace-nowrap mt-6 w-full"
            type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
