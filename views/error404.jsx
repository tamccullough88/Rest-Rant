const React = require('react')
const Def = require('./default')

function error404 () {
    return(
    <Def>
        <main>
            <h1> 404: Page not foud</h1>
            <p>Oops, we have encountered an error and cannot find the page you are looking for. </p>
        </main>
    </Def>
    )
}

module.exports = error404