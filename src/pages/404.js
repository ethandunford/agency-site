import React from 'react';

const errorPage = () => {
  return (
    <section className="hero is-danger is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="is-size-1">Page not found</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default errorPage;
