import React from 'react'

export const Dashboard = (props) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <p>{props.user.email}</p>
        <p>{props.user.created_at}</p>
      </section>
    </div>
  );
}
