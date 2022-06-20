import { sanityClient } from '../sanity.js'
import Head from 'next/head'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import LargeCard from '../components/LargeCard.jsx'
import MediumCard from '../components/MediumCard.jsx'
import SmallCard from '../components/SmallCard.jsx'

export default function Home({exploreData, cardsData}) {
  console.log(exploreData, cardsData)
  
  return (
    <div>

       <Head>
         <title> Airbnb </title>
         </Head>

      <Header />
      <Banner />

  <main className="max-w-7xl mx-auto px-8 sm:px-16">
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {exploreData?.map(({image, distance, location}) => (
        <SmallCard key={image} img={image} location={location} distance={distance} />
      ))}
     </div> 

    </section>

    <section>
      <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>
 
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
      {cardsData.map(({image, title}) => (
        <MediumCard key={image} img={image} title={title}/>
      ))}
      </div> 

    </section>
      <LargeCard 
      img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
      title="The Greatest Outdoors"
      buttonText="Get Inspired"
      />
    <section>


    </section>

  </main>

   <Footer/>

    </div>
  )
}

export const getServerSideProps = async () => {
  const queryOne = '*[ _type == "exploreData" ]'
  const queryTwo = '*[ _type == "cardsData" ]'
  
  const exploreData = await sanityClient.fetch(queryOne)
  const cardsData = await sanityClient.fetch(queryTwo)

  if (!exploreData.length && !cardsData.length) {
    return {
      props: {
        exploreData: [],
        cardsData: [],
      },
    }
  } else {
    return {
      props: {
        exploreData,
        cardsData,
      },
    }
  }
}

