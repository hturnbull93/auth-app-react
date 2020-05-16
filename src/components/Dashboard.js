import React from 'react'

export const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <p>Email: {props.user.email}</p>
        <p>Account Created At: {props.user.created_at}</p>
      </section>
    </div>
  );
}
