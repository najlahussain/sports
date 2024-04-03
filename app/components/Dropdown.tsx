"use client"

import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { getYear } from '../membership/page'
import { SubmitHandler, useForm } from 'react-hook-form';
function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedYear, setSelectedYear] = useState("");

  const handleMenuItemClick = (year:string) => {
    setSelectedYear(year);
    handleSubmit(handleMenuItemClick);
    //getYear(selectedYear)
  };

  const handleSubmit = (event:any) => {
    //event.preventDefault(); // Prevent default form submission behavior
    getYear(selectedYear); // Call your function with the selected year
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Membership
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* <form method="POST" onSubmit={handleSubmit(onSubmit)}> */}
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          
            <Menu.Item>
              {({ active }) => (
                <a
                  //href="#"
                  onClick={() => handleMenuItemClick("1 year")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )} 
                >
                  1 year
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => handleMenuItemClick("2 year")}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )} 
                >
                  2 years
                </a>
              )}
            </Menu.Item>
              
              <Menu.Item>
                {({ active }) => (
                  <a
                    type="submit"
                    onClick={() => handleMenuItemClick("3 years")}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )} 
                  >
                    3 years
                  </a>
                )}
              </Menu.Item>
            
          </div>
        </Menu.Items>
        {/* </form> */}

      </Transition>
      <form onSubmit={handleSubmit}> 
        <button type="submit" style={{ display: 'none' }} /> 
      </form>
    </Menu>
  )
}
