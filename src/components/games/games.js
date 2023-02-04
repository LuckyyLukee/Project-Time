import './games.scss'

function GamesList() {
    return (
        <>
            <p className="games-title">Our Games</p>
            <div className="games-list">
                <ul className="games">
                    <li id="scp">
                        <div className="game-name">SCP: Site Roleplay</div>
                        <div className="game-desc">
                            Welcome to our facility, Mr/Ms [REDACTED].
                            Here you will find our most dangerous anomalies.
                            Choose your own fate, getting tested as a Class-D, making tests on the anomalies, or perhaps guard them?
                        </div>
                        <button>Play!</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default GamesList