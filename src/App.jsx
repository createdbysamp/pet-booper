import { useState } from "react";
import PetCard from "./components/PetCard";

function App() {
  const [whiskersCount, setWhiskersCount] = useState(9);
  const [bubblesCount, setBubblesCount] = useState(3);

  const handleWhiskersClick = (boopIncrement) => {
    setWhiskersCount((prev) => prev + boopIncrement);
  };
  const handleBubblesClick = (boopIncrement) => {
    setBubblesCount((prev) => prev + boopIncrement);
  };

  return (
    <>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "1rem" }}>
        Pet Booper
      </h1>
      <div className="d-flex align-items-center">
        <PetCard
          name="Bubbles"
          type="dog"
          description="Loves long walks and peanut butter."
          count={bubblesCount}
          boopIncrement={2}
          image="/bubbles.jpeg"
          onClick={handleBubblesClick}
        />

        <PetCard
          name="Whiskers"
          type="cat"
          description="Always up for a nap. And pickleball."
          count={whiskersCount}
          boopIncrement={1}
          image="/whiskers.jpeg"
          onClick={handleWhiskersClick}
        />
      </div>
    </>
  );
}

export default App;
