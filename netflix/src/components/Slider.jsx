import React from 'react'
import CradSlider from './CradSlider'

export default React.memo( function Slider({movies}) {
    const getMoviesFromRange=(from,to) => {
        return movies.slice(from,to)
    }
  return (
    <div>
         <CradSlider title="Trendig Now" data= {getMoviesFromRange(0, 10)} />
         <CradSlider title="New Releases" data= {getMoviesFromRange(10, 20)} />
         <CradSlider title="Blockbuster Movies" data= {getMoviesFromRange(20, 30)} />
         <CradSlider title="Ppoupar On Netflix" data= {getMoviesFromRange(30, 40)} />
         <CradSlider title="Action Movies" data= {getMoviesFromRange(40, 50)} />
         <CradSlider title="Epics" data= {getMoviesFromRange(50, 60)} />

    </div>
  );
});
