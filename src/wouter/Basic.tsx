import { h } from 'preact';
import { Link, Route } from "wouter";

const InboxPage = () => {
  return (
    <h1>Inbox</h1>
  );
};

export const Basic = () => (
  <div>
    <Link href="/users/1">
      <a className="link">Profile</a>
    </Link>
    <Route path="/about">About Us</Route>
    <Route path="/users/:name">
      {(params: any) => <div>Hello, {params.name}!</div>}
    </Route>
    <Route path="/inbox" component={InboxPage} />
  </div>
);
