import { RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import { FormEvent } from 'react';
import { roomType, themeType } from '../../../../utils/dropdownTypes';
import BudgetInput from './BudgetInput';

interface Props {
  originalPhoto: string;
  themes: themeType[];
  selectedTheme: themeType;
  setSelectedTheme: (theme: themeType) => void;
  rooms: roomType[];
  selectedRoom: roomType;
  setSelectedRoom: (room: roomType) => void;
  budget: number;
  setBudget: (budget: number) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, originalPhoto: string) => void;
}

const GeneratePhoto = ({
  originalPhoto,
  themes,
  selectedTheme,
  setSelectedTheme,
  rooms,
  selectedRoom,
  setSelectedRoom,
  budget,
  setBudget,
  handleSubmit,
}: Props): JSX.Element => {
  return (
    <>
      <h2 className="text-5xl font-bold my-6">Generate your Dream Room</h2>
      <form onSubmit={(e) => handleSubmit(e, originalPhoto)}>
        <div className="mx-auto w-full px-4 xl:px-0 flex justify-center py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full max-w-[1100px] gap-8">
            <div className="px-4 py-5 col-span-1 w-full  h-full flex flex-col items-start bg-white rounded-xl border border-gray-200 p-2 lg:p-5 lg:py-8">
              <div className="text-black text-lg font-medium leading-7 pb-2.5">
                Room theme
              </div>
              <RadioGroup
                value={selectedTheme}
                onChange={setSelectedTheme}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                {themes.map((theme, index) => (
                  <RadioGroup.Option
                    key={index}
                    value={theme}
                    className="cursor-pointer">
                    {({ checked }) => (
                      <>
                        <div className="h-[120px] md:h-[150px] lg:h-[92px] max-w-full">
                          <Image
                            alt={theme.name}
                            src={theme.img}
                            className={`${
                              checked
                                ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-[#ff4800] '
                                : ''
                            } h-full max-w-full rounded-lg p-1`}
                            width={500}
                            height={500}
                          />
                        </div>
                        <p className="mt-1 text-sm">{theme.name}</p>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
              <div className="w-full my-5 h-px bg-gray-200"></div>
              <div className="text-black text-lg font-medium leading-7 pb-2.5">
                Room Types
              </div>
              <RadioGroup
                value={selectedRoom}
                onChange={setSelectedRoom}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto">
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                {rooms.map((room, index) => (
                  <RadioGroup.Option
                    key={index}
                    value={room}
                    className="cursor-pointer">
                    {({ checked }) => (
                      <>
                        <div className="h-[120px] md:h-[150px] lg:h-[92px] max-w-full">
                          <Image
                            alt={room.name}
                            src={room.img}
                            className={`${
                              checked
                                ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-[#ff4800] '
                                : ''
                            } h-full max-w-full rounded-lg p-1`}
                            width={500}
                            height={500}
                          />
                        </div>
                        <p className="mt-1 text-sm">{room.name}</p>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
              <div className="w-full my-5 h-px bg-gray-200"></div>
              <BudgetInput
                budget={budget}
                setBudget={setBudget}
              />
            </div>
            <div className="col-span-1 lg:col-span-2 w-full h-full flex flex-col items-center justify-start bg-white rounded-xl border border-gray-200 p-4 lg:p-7">
              <div className="relative w-full h-auto">
                <div className=" aspect-w-16 aspect-h-10">
                  <Image
                    alt="original photo"
                    src={originalPhoto}
                    className="w-full h-full"
                    width={2000}
                    height={2000}
                  />
                  <div className="absolute top-[90%] mx-auto left-0 right-0 w-fit h-8 px-5 py-[3px] bg-slate-950 bg-opacity-40 rounded-[40px] backdrop-blur-[3px] justify-center items-center  inline-flex">
                    <div className="text-center text-white text-base whitespace-nowrap font-medium leading-relaxed">
                      Original Image
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#ff4800] rounded-full text-sm lg:text-base font-bold border border-brand-primary bg-brand-primary hover:bg-brand-dark leading-normal shadow-md   active:bg-brand-secondary active:shadow-lg text-white px-20 py-4 transition ease-in-out duration-300 hover:cursor-pointer flex justify-center whitespace-nowrap mt-10 lg:px-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none">
                  <path
                    fill="#fff"
                    d="m7.358 5.814 1.798.984a.474.474 0 0 1 0 .834l-1.798.98a.478.478 0 0 0-.19.19l-.984 1.797a.474.474 0 0 1-.834 0l-.98-1.797a.478.478 0 0 0-.19-.19l-1.797-.98a.474.474 0 0 1 0-.834l1.797-.984a.478.478 0 0 0 .19-.19l.984-1.794a.474.474 0 0 1 .834 0l.984 1.794c.04.08.105.145.186.19Zm15.044-1.518-1.664-1.664a1.583 1.583 0 0 0-2.235-.004l-.003.004L3.666 17.469a1.58 1.58 0 0 0 0 2.235l1.664 1.664a1.58 1.58 0 0 0 2.235 0L22.402 6.53a1.583 1.583 0 0 0 0-2.235Zm-5.785 5.61-1.49-1.489 4.393-4.396 1.49 1.49-4.393 4.396Z"></path>
                  <g
                    fill="#fff"
                    opacity="0.4">
                    <path d="m22.536 16.392-1.798-.983a.404.404 0 0 1-.182-.195l-.984-1.797a.477.477 0 0 0-.838 0l-.984 1.793a.478.478 0 0 1-.19.19l-1.797.984a.478.478 0 0 0 0 .838l1.797.984c.081.045.146.11.19.19l.976 1.802a.478.478 0 0 0 .838 0l.984-1.797a.478.478 0 0 1 .19-.19l1.798-.984a.474.474 0 0 0 0-.834ZM14.135 4.401l-1.178-.643a.311.311 0 0 1-.125-.126l-.644-1.178a.34.34 0 0 0-.125-.126.318.318 0 0 0-.426.126l-.643 1.178a.312.312 0 0 1-.126.126L9.69 4.4a.312.312 0 0 0-.125.126.316.316 0 0 0 .125.425l1.178.643a.312.312 0 0 1 .126.126l.643 1.178a.34.34 0 0 0 .126.126c.15.08.34.024.425-.126l.644-1.178a.311.311 0 0 1 .125-.126l1.178-.643a.339.339 0 0 0 .126-.126.318.318 0 0 0-.126-.425Z"></path>
                  </g>
                </svg>{' '}
                <span className="ml-3">Generate Image</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default GeneratePhoto;
