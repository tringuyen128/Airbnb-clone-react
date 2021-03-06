import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={require('./assets/image1.png')}
          title="Online Experience"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src={require('./assets/image2.png')}
          title="Unique stays"
          description="Spaces that we are more than just a place to sleep."
        />
        <Card
          src={require('./assets/image3.png')}
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src={require('./assets/image4.png')}
          title="3 Bedroom Flat in Bournermouth"
          description="Superhost with a stunning view of the beachside in the Sunny Bournermouth."
          price="$130/night"
        />
        <Card
          src={require('./assets/image5.png')}
          title="Penhouse in London"
          description="Enjoy the amazing sights of London with this stunning penhouse."
          price="$350/night"
        />
        <Card
          src={require('./assets/image6.png')}
          title="1 Bedroom apartment"
          description="Superhost with great amenties and a fabolous shopping complex nearby."
          price="$70/night"
        />
      </div>
    </div>
  )
}

export default Home
