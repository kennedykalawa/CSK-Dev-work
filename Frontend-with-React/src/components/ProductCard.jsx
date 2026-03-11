import react_image from '../assets/react.svg'

const ProductCard = () => {
    return (
        <div>
          <img src={react_image} alt="react logo" className='product-image' />
          <h2 className='product-title'>React</h2>
          <p className='product-description'>A JavaScript library for building user interfaces.</p> 
          <p className='product-price'>$0.00</p>        
        </div>
    )
}

export default ProductCard