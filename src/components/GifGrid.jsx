import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {isLoading && (<h2>...Cargando</h2>)}
    <div className="card-grid">
      {
        // images.map((image) => (<li key={image.id}><p>{image.title}</p></li>))
        // images.map(({id, title}) => (<li key={id}><p>{title}</p></li>))
        images.map((image) => (
          <GifItem 
            key={image.id} 
            // title={image.title} 
            // url={image.url}
            {...image}
          />
        ))
      }
    </div>
    </>
  )
}

// isLoading && (<h2>...Cargando</h2>) se evalua una sola condicion

// null no se renderiza en react, se puede usar en estado y operador ternario

// se pueden colocar todas las props disponibles de un componente colocando {...props}

// (image) => ( es un return implicito

// tip: nunca colocar ejecuciones de funciones en functional components
// recibida la data solo se debe ejecutar una vez la funcion asi el componente cambie, hay que evitar reenviar la peticion


// useEffect no es mas que un hook que dispara un callback o funcion y depende exclusivamente el array de dependencias
// si el array de dependencias está vacio significa que se ejecutará el callback uncamente cuando se renderice el componente por primera vez