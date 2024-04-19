import './intel.css'
import { useRef, useState } from "react"

const Calculator = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const WEIGHT_OF_POST = 90,
    COST_PER_POST = 1500;
    // COST_PER_METER_OF_BARBED_WIRE = 164,
    // COST_PER_KG_OF_U_NAILS = 300,
    // COST_PER_KG_OF_STRAIGHT_NAILS = 250;

  const acresRef = useRef(null);
  const intervalRef = useRef(null);
  const cornersRef = useRef(null);
  const barbedWireRef = useRef(null);
  const transportDistanceRef = useRef(null);
  const peopleOffloadRef = useRef(null);
  const postWeightRef = useRef(null);
  const postCostRef = useRef(null);
  // const barbedWireCostRef = useRef(null);
  // const uNailsCostRef = useRef(null);
  // const straightNailsCostRef = useRef(null);

  const totalAreaRef = useRef(null);
  const sideLengthRef = useRef(null);
  const perimeterRef = useRef(null);
  const uprightPostsRef = useRef(null);
  const intermediateBraceRef = useRef(null);
  const cornerBraceRef = useRef(null);
  const totalPostsRef = useRef(null);
  const totalCostRef = useRef(null);
  // const barbedWireEstimateRef = useRef(null);
  // const uNailsRef = useRef(null);
  // const straightNailsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    runCalculations();
    
    
  }

  const runCalculations = () => {
    if (
      !acresRef.current.value ||
      !intervalRef.current.value ||
      !cornersRef.current.value ||
      !barbedWireRef.current.value
    ) {
      setErrorMessage("Please fill in all the input fields.");
      return;
    } else setErrorMessage("");

    const acres = parseFloat(acresRef.current?.value) || 0;
    const interval = parseFloat(intervalRef.current?.value) || 0;
    const corners = parseInt(cornersRef.current.value) || 0;
    const barbedWire = parseFloat(barbedWireRef.current.value) || 0;

    const totalArea = acres * 4046.86;
    const sideLength = Math.sqrt(totalArea);
    const perimeter = sideLength * 4;
    const cornerBrace = corners;
    const intermediateBrace = perimeter / interval - 1;
    const uprightPosts = cornerBrace;
    const totalPosts = uprightPosts + cornerBrace + intermediateBrace;
    // const barbedWireEstimate = perimeter * barbedWire;
    // const uNails = Math.ceil(cornerBrace * 1.5);
    // const straightNails = cornerBrace * 2;

    const totalCostPosts = totalPosts * COST_PER_POST;
    // const totalCostBarbedWire = barbedWireEstimate * COST_PER_METER_OF_BARBED_WIRE;
    // const totalCostUNails = uNails * COST_PER_KG_OF_U_NAILS;
    // const totalCostStraightNails = straightNails * COST_PER_KG_OF_STRAIGHT_NAILS;

    totalAreaRef.current.textContent = totalArea.toFixed(2);
    sideLengthRef.current.textContent = sideLength.toFixed(2);
    perimeterRef.current.textContent = perimeter.toFixed(2);
    uprightPostsRef.current.textContent = uprightPosts;
    intermediateBraceRef.current.textContent = intermediateBrace.toFixed(2);
    cornerBraceRef.current.textContent = cornerBrace;
    totalPostsRef.current.textContent = totalPosts;
    totalCostRef.current.textContent = totalCostPosts.toFixed(2);
    // barbedWireEstimateRef.current.textContent = barbedWireEstimate.toFixed(2);
    // uNailsRef.current.textContent = uNails;
    // straightNailsRef.current.textContent = straightNails.toFixed(2);
  }

  return (
    <>
      <div className="header">
        <h1>Concrete Hub Estimate Calculator</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="acres">Number of Acres:</label>
          <input type="number" id="acres" ref={acresRef} required />

          <label htmlFor="interval">Interval between posts in Meters:</label>
          <input type="number" id="interval" ref={intervalRef} required />

          <label htmlFor="corners">Number of corners on your land:</label>
          <input type="number" id="corners" ref={cornersRef} required />

          <label htmlFor="barbedWire">Lines of barbed wire:</label>
          <input type="number" id="barbedWire" ref={barbedWireRef} required />

          <label htmlFor="transportDistance">Transport - Distance from Nbi to destination in Kilometer:</label>
          <input type="number" id="transportDistance" ref={transportDistanceRef} required />

          <label htmlFor="postWeight">Weight of the posts:</label>
          <input type="number" id="postWeight" readOnly value={WEIGHT_OF_POST} ref={postWeightRef} required />

          <label htmlFor="peopleOffload">Number of people to off-load posts:</label>
          <input type="number" id="peopleOffload" ref={peopleOffloadRef} required />

          <label htmlFor="postCost">Cost per post:</label>
          <input type="number" id="postCost" readOnly value={COST_PER_POST} ref={postCostRef} required />

          {/* <label htmlFor="barbedWireCost">Cost per 100 Meters of barbed wire:</label>
          <input type="number" id="barbedWireCost" readOnly value={COST_PER_METER_OF_BARBED_WIRE} ref={barbedWireCostRef} required />

          <label htmlFor="uNailsCost">Cost per KG of U-nails:</label>
          <input type="number" id="uNailsCost" readOnly value={COST_PER_KG_OF_U_NAILS} ref={uNailsCostRef} required />

          <label htmlFor="straightNailsCost">Cost per KG of Straight nails:</label>
          <input type="number" id="straightNailsCost" readOnly value={COST_PER_KG_OF_STRAIGHT_NAILS} ref={straightNailsCostRef} required />

         */}
        <button
          style={{
            backgroundColor: "yellow",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            border: "1px solid #ccc",
            padding: "8px",
            width: "100%",
            marginBottom: "10px"
          }}
          type="button"
          onClick={runCalculations}
        >
          Calculate
        </button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
        <h2>The answer is:</h2>
      <p>Total area of your land in m2: <span id="totalArea" ref={totalAreaRef}>0</span></p>
      <p>Length of one side of your land: <span id="sideLength" ref={sideLengthRef}>0</span></p>
      <p>Perimeter of your land: <span id="perimeter" ref={perimeterRef}>0</span></p>
      <p>No of upright posts: <span id="uprightPosts" ref={uprightPostsRef}>0</span></p>
      <p>Intermediate brace posts: <span id="intermediateBrace" ref={intermediateBraceRef}>0</span></p>
      <p>Corner Brace posts: <span id="cornerBrace" ref={cornerBraceRef}>0</span></p>
      <p>Total number of posts: <span id="totalPosts" ref={totalPostsRef}>0</span></p>
      <p>Total cost of posts: <span id="totalCost" ref={totalCostRef}></span></p>
      {/* <p>Barbed wire: <span id="barbedWireEstimate" ref={barbedWireEstimateRef}>0</span></p>
      <p>U-nails in KG: <span id="uNails" ref={uNailsRef}>0</span></p>
      <p>Straight nails for corner & braced posts in KG: <span id="straightNails" ref={straightNailsRef}>0</span></p> */}
<input type="submit" value="Order now" onClick={handleSubmit} />
</form>
</div>

</>

  )
}

export default Calculator