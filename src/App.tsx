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
        <h1 className="text-7xl bg-[linear-gradient(90deg,var(--pastel-pink),var(--pastel-red),var(--pastel-yellow),var(--pastel-green),var(--pastel-blue))] bg-[length:400%_400%] animate-[gradientShift_12s_ease_infinite,pulseGlow_6s_ease-in-out_infinite] bg-clip-text text-transparent mb-16">Friday Wheel</h1>
        <Wheel entries={entries}>
        </Wheel>
      </main>
    </>
  )
}

export default App
