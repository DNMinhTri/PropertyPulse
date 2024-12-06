
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental',
  description: 'Find your dream properties',
  keywords: 'Rental, Find Rental, Find Homes, Find Properties, No cap'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}

export default MainLayout