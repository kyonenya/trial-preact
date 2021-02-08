import { h, Fragment } from 'preact';
import { Link } from 'react-router-dom';

export const Anchors = () => {
  return (
    <Fragment>
      //@ts-ignore
      <Link to="/works">to Works</Link>
    </Fragment>
  );
}
