import React from 'react'

function Logo({width = "100px"}) {
  return (
    <svg width={width} height={width} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 155.555C0 126.464 23.5833 102.881 52.6749 102.881H97.1193V200H0V155.555Z" fill="white"/>
<path d="M102.881 0H200V44.4445C200 73.536 176.417 97.1193 147.325 97.1193H102.881V0Z" fill="white"/>
<path d="M82.8652 10.4775L56.4175 91H40.3018L13.9663 10.4775H32.272L48.3315 64.2153L64.4473 10.4775H82.8652Z" fill="white"/>
<path d="M137.646 192H121.531V111.478H137.646V151.739L167.632 111.478H185.938L160.5 145.45L185.938 192H167.632L149.944 159.432L137.646 175.884V192Z" fill="white"/>
</svg>
  )
}

export default Logo
