import Tema from './Tema';
import CardEvento from './CardEvento';

export default function EventCards({temas, eventos}) {
    return(
        <>
            <section className="event-cards-container">
                {
                    temas.map(tema => {
                        return (
                            <section key={tema.id}>
                                <Tema tema={tema} />
                                <div className="event-cards">
                                    {eventos.map((evento, index) => {
                                        if (evento.tema.nome == tema.nome) {
                                        return <CardEvento evento={evento} key={index}/>
                                        }
                                    })}
                                </div>
                            </section>
                        )
                    })
                }
            </section>
        </>
    )
}