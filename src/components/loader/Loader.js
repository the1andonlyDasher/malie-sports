export default `
body{
display: block;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    background-color: #fff;
    display: flex;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.custom-loader {
    --d:22px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    color: #5B0A0A;
    box-shadow: 
      calc(1*var(--d))      calc(0*var(--d))     0 0,
      calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
      calc(0*var(--d))      calc(1*var(--d))     0 2px,
      calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
      calc(-1*var(--d))     calc(0*var(--d))     0 4px,
      calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
      calc(0*var(--d))      calc(-1*var(--d))    0 6px;
    animation: s7 1s infinite steps(8);
  }
  
  @keyframes s7 {
    100% {transform: rotate(1turn)}
  }
   `;