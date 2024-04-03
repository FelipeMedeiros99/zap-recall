const Iteracao = () => {
    const repeticoes = [0, 1, 2, 3]

    return (
        <>
            {repeticoes.map((key) => {
                return (
                    <div key={key} className="pergunta">
                        <p>Pergunta {key}</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                )
            })}
        </>
    )
}

export default Iteracao