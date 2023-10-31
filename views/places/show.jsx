const React = require('react')
const Def = require('../default')

function Show (data) {
    return (
        <Def title={data.place.name}>
            <main>
            <div>
            <div className="d-md-flex xlex-md-equal w-100 my-md-3 ps-md-3">
            <div><img src={data.place.pic}></img></div>
            <div className="col-sm-6">
            <h1> {data.place.name} </h1>
            <h2 className="text-center">Description</h2>
            <p className="text-center">Located in: {data.place.city}, {data.place.state}</p>
            <p className="text-center">Serves: {data.place.cuisines} </p>
            <h2>Ratings:</h2>
            </div>
        </div>
        <div>
            <h2 className="text-center">Rants</h2>
            <p className="text-center">
                {data.place.rants}
            </p>
            
        </div>
                <a href={`/places/${data.index}/edit`} className="btn btn-warning"> 
                    Edit
                </a>  
                <form action={`/places/${data.index}?_method=DELETE`} method="POST"> 
                   <input type="submit" value="DELETE" className="btn btn-danger" />
                </form>
        </div>
            </main>
        </Def>
    )
}

module.exports = Show
