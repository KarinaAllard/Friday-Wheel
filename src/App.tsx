import { Wheel } from "./Wheel";

function App() {
  const entries = [
    "Pizza Place", "Sushi Bar", "Burgers", "Taco Truck", "Salad Corner",
    "Ramen House", "BBQ Spot", "Sandwiches", "Indian Curry", "Pasta",
    "Thai Food", "Bagels", "Smoothies", "Mexican Grill", "Coffee & Snacks"
  ];

  return (
    <>
      <main className='flex max-w-full items-center m-10 flex-col'>
        <h1 className="text-8xl text-(--pastel-green)">Friday Wheel</h1>
        <Wheel entries={entries}>

        </Wheel>
      </main>
    </>
  )
}

export default App
