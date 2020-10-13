import React from 'react'

function Star(): JSX.Element {
  return (
    <svg className="star" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
        fill="#FADE60"
      />
    </svg>
  )
}

function Reviews(): JSX.Element {
  return (
    <div className="reviews">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      9494 Reviews
    </div>
  )
}

export default function AddToCart({ onAddToCart }: { onAddToCart: () => void }): JSX.Element {
  return (
    <div className="demo-content add-to-cart">
      <div className="demo-content-inner">
        <div className="text">
          <h1>The GoalCo 10× superpower suit</h1>
          <div className="price">
            <h2>$365</h2>
            <button className="add-to-cart umami--click--demo-add-to-cart" onClick={() => onAddToCart()}>
              Add to Cart
            </button>
          </div>
          <Reviews />
          <p>Take your goal achieving capabilities to the next level with our state of the art superpower suit.</p>
          <p>Made from the finest bio materials known to man and ethically sourced from planet Goalgon.</p>
        </div>
        <div className="img-container">
          <img className="suit" src="/goalco-hero.png" alt="goalco superpower suit" />
        </div>
      </div>
    </div>
  )
}
