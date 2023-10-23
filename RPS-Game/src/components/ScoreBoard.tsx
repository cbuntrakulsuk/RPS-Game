
function ScoreBoard () {
    return (
        <>
        <div className="flex flex-wrap mx-48 mt-20 border border-4 border-headerOutline p-8 rounded-2xl">
            <ul className="text-white text-5xl basis-3/4">
                <li className="-mb-2">Rock</li>
                <li className="-mt-2">Paper</li>
                <li className="-mt-2">Scissors</li>
            </ul>
            <div className="bg-white rounded-2xl text-center grow">
                <h2 className="text-xl text-scoreText mt-3">Score</h2>
                <div className="text-7xl text-darkText">12</div>
            </div>
         </div>
        </>
    )
}

export default ScoreBoard;