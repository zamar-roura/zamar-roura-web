import ReactGA from "react-ga4";

export const pageview = function(location){
    return () => {
    console.log(location);
    ReactGA.initialize([
      {
        trackingId: "G-Z2BVY8Y6H2",
      }
    ]);
    ReactGA.send({ hitType: "pageview", page: location });
  }};