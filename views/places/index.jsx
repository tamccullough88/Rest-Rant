const React = require('react')
const Def = require('../default')

function Index (data) {
    let placesFormatted = data.places.map((place, index) => {
      return (
        <div className="col-sm-6" key={index}>
          <h2 >
            <a href={`/places/${index}`}> 
              {place.name} 
            </a>
          </h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p className="text-cener">
            Located in {place.city}, {place.state}
          </p>
        </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Restaurants to Rant or Rave About!</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index