const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            <div>
                <img src="/images/cute-kitten-surprised.jpg" alt="Cute Surprised Kitten"/>
            <div>
                Photo by <a href="https://unsplash.com/@tranmautritam">Tran Mau Tri Tam </a> on <a href="https://www.unsplash.com">Unsplash </a>
            </div>
            </div>
            </main>
        </Def>
    )
}

module.exports = error404

