import '../../styles/compenents/gallery.css'
import data from '../../data/data'
import Card from '../../components/Card'

function Gallery() {
    return (
        <main className='home_gallery'>
            {data.map(data => {
                return (
                    <Card
                       key={data.id}
                       id={data.id}
                       title={data.title}
                       cover={data.cover} 
                    />
                )
            })}
        </main>
    )
}

export default Gallery