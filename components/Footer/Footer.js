import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="https://www.facebook.com/Kalani.Co/" className="text-gray-400 hover:text-apricot-peach-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>

              <a href="https://www.instagram.com/flowersbykalani.co" className="text-gray-400 hover:text-apricot-peach-500">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
      <p className="text-center text-base text-gray-400">
        &copy; 2021 Jordyn Goodwin trading as Kalani Collective. ABN 23 933 996 430. All rights reserved. 
        <Link href="/termsconditions">
          <a className="pl-2 underline font-medium text-rose-bud-500 hover:text-apricot-peach-500">Terms &amp; Conditions</a>
        </Link>  
        <Link href="/returns">
          <a className="pl-2 underline font-medium text-rose-bud-500 hover:text-apricot-peach-500">Returns &amp; Refunds</a>
        </Link>
      </p>
    </div>
        </div>
      </footer>
    )
}

export default Footer;