import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingPizza() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={480}
            viewBox="0 0 280 480"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="143" cy="127" r="126" />
            <rect x="0" y="270" rx="6" ry="6" width="286" height="29" />
            <rect x="0" y="313" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="421" rx="3" ry="3" width="79" height="25" />
            <rect x="154" y="411" rx="20" ry="20" width="125" height="41" />
        </ContentLoader>
    )
}

export default LoadingPizza;