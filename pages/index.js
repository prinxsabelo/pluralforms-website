
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <div className='flex flex-col flex-1 h-full'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}
