import { useEffect, useState } from 'react';

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Add a useEffect to watch for changes in the 'isDark' state
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <>
       <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
      <input
        type='checkbox'
        checked={isDark}
        onChange={handleThemeToggle}
        className='sr-only'
      />
        <span className='label flex items-center text-sm font-medium dark:text-white text-black'>
          Light
        </span>
        <span
          className={`slider flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isDark ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isDark ? 'translate-x-[28px]' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium dark:text-white text-black'>
          Dark
        </span>
      </label>
    </>
  )
}

export default Toggle
