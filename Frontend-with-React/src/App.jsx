import './index.css'
import Hero from "./components/Hero"
import ProductCard from'./components/ProductCard'
import reactLogo from './assets/react.svg'

const PRODUCTS = [
      {
        id: 1,
         title: "React",
         description: "A JavaScript library forbuilding user interfaces.",
         price: 10.00,
         image: reactLogo
       },
      {
         id: 2,
         title: "Vite",
         description: "Next generation frontendtooling.",
          price: 0.00,
          image: reactLogo
       }
    ]
   
  function App() {
    return (
      <main>
        <Hero title="Dev Store" />
        <section className="product-list">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id}
              {...product} />
                ))}
              </section>
      </main>
     )
    }
export default App
