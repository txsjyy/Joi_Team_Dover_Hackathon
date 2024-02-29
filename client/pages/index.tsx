// pages/index.tsx
import FuelOption from '../components/FuelOption';
import WebcamDisplay from '../components/WebcamDisplay';
import VideoWidget from '../components/VideoWidget';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DFS Fuel Dispenser Screen</title>
      </Head>
      <div className="fuel-dispenser-screen">
        <WebcamDisplay />
        <VideoWidget />
        <div className="fuel-prices">
          <FuelOption
            title="REGULAR UNLEADED"
            price="2.999"
            details="$ PRICE PER GALLON ALL TAXES INCLUDED"
            octaneRating={87}
          />
          <FuelOption
            title="MID-GRADE UNLEADED"
            price="3.299"
            details="$ PRICE PER GALLON ALL TAXES INCLUDED"
            octaneRating={89}
          />
          <FuelOption
            title="REGULAR UNLEADED"
            price="3.699"
            details="$ PRICE PER GALLON ALL TAXES INCLUDED"
            octaneRating={92}
          />
        </div>
      </div>
    </>
  );
}
