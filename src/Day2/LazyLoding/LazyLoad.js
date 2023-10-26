
import React, { Suspense, lazy } from "react";
const LazyHome = lazy(() => import("./Home"))
const Data = lazy(() => import("./Data"))



function LazyLoad(){

    return(
        <>
        <h1>This is Lazy Loading Compo</h1>
        <Suspense fallback={ <p>L..o..a..d..i..n..g.........</p>}>

      <LazyHome/>
      <Data/>
        </Suspense>
        

        </>
    )
}
export default LazyLoad;