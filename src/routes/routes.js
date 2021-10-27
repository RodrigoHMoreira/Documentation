    import React from "react";
    import { Route, BrowserRouter } from "react-router-dom";
    import routesList from '../index/indexList.json';

    const Routes = () => {
        return(
                routesList.map((item)=>{return(
                    <BrowserRouter>
                        <Route component={item.title}  path={item.link} />
                    </BrowserRouter>
                )})
            )
    }

    export default Routes;