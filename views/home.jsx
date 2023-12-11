const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div >
                    <img src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg" className="img-fluid" alt="image of panasian food" />
                    <div>
                       Photo by <a href="https://unsplash.com/@lvnatikk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lily Banse</a> on <a href="https://unsplash.com/photos/cooked-dish-on-gray-bowl--YHSwy6uqvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
  

                <a href="/places">
  <button type="button" className="btn btn-secondary">Places Page</button>
</a>

            </main>
        </Def>
    )

}

module.exports = home
