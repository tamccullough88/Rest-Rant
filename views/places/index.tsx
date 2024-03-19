
function Index(data: { places: any[] }) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6" key={place.id}>
        <h2 >
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} className="img-fluid" />
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