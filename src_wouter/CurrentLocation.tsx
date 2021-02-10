import { h } from 'preact';
import { Link, Route, useLocation, useSearchParam } from "wouter";

export const CurrentLocation = () => {
  const [location, setLocation] = useLocation();
  console.log(location);
  
  
  return (
    <div>
      <p>{`The current page is: ${location}`}</p>
      <a onClick={() => setLocation("/somewhere")}>Click to update</a>
    </div>
  );
};
