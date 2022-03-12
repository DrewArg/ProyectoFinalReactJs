import styles from './Item.css';
import ItemCount from '../ItemCount/ItemCount'

function Item({ prod }) {


    const onAdd = (cant) => {
        console.log(cant);
    }

    return (

        <>
            <div>
                <div className="tarjeta" key={prod.id}>
                    <div className={`tarjeta__contorno--${prod.type}`}>
                        <div className="tarjeta__superior">
                            <div className="tarjeta__superior--tipo" id="tipoTarjeta">
                                {prod.type}
                            </div>
                        </div>
                        <div className="tarjeta__tarjetaReal">
                            <div className="tarjeta__medio">
                                <div className="tarjeta__medio--nombre" id="nombreTarjeta">{prod.name}</div>
                                <div className="tarjeta__medio--imagen" id="imagenTarjeta">
                                    <img src={prod.img} alt={prod.alt} />
                                </div>
                            </div>
                            <div className="tarjeta__inferior">
                                <div className="tarjeta__inferior--descripcion">
                                    {prod.description}
                                </div>
                            </div>
                            <div className="tarjeta__precio">
                                <ItemCount initial={1} stock={10} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Item
