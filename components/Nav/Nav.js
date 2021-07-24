import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Nav() {

    return (
        <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <a href="/">
                    <img
                      className="block lg:hidden h-12 w-auto"
                      src="/kalani-flower.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/kalani-logo.svg"
                      alt="Workflow"
                    />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <a
                      href="/about"
                      className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      About
                    </a>
                    <a
                      href="/products"
                      className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Products
                    </a>
                    <a
                      href="/contact"
                      className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative">
                    <Link href="https://www.facebook.com/Kalani.Co/">
                      <a className="text-mongoose-600 hover:text-rose-bud-800" title="Facebook">
                        <FaFacebook className="h-6 w-6" />
                      </a>
                    </Link>
                  </div>
                  <div className="ml-3">
                    <Link href="https://www.instagram.com/flowersbykalani.co">
                      <a className="text-mongoose-600 hover:text-rose-bud-800" title="Instagram">
                        <FaInstagram className="h-6 w-6" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <a
                  href="/"
                  className="text-mongoose-600 hover:bg-almond-300 hover:text-rose-bud-700 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-mongoose-600 hover:bg-almond-300 hover:text-rose-bud-700 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  About
                </a>
                <a
                  href="/products"
                  className="text-mongoose-600 hover:bg-almond-300 hover:text-rose-bud-700 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Products
                </a>
                <a
                  href="/contact"
                  className="text-mongoose-600 hover:bg-almond-300 hover:text-rose-bud-700 block pl-3 pr-4 py-2 text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  )
    }