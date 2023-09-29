import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import ActiveSectionContextProvider from '@/context/active-section-context'
import Loading from '@/components/loading'
import Delay from '@/components/delay'

// bg-red-100 bg-[#f6ddde] bg-[#f8f5f9]
// d04ef2
// 79bbd1 b4d7ef
// animate - bounce

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Faizan Naseer',
  description: 'Faizan is a junior computer science student at the University of Toronto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      {/* have loading screen here */}
      <body className={`${inter.className} bg-gray-50 relative text-gray-950 pt-28 sm:pt-36`}>
        <Loading/>
        {/* <div className='bg-[#b4d7ef] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div> */}
        {/* <div className='bg-[#b4d7ef] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>  */}
        {/* <div className='z-10'>
          <ActiveSectionContextProvider>
            <Header/>
            {children}
          </ActiveSectionContextProvider>
        </div> */}
        <Delay children={children} />
      </body>
    </html>
  )
}
