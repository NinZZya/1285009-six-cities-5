import React from 'react';
import Header from '../../components/header';
import FavoritesList from '../../components/favorites-list';

const Favorites = () => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33">
          </img>
        </a>
      </footer>
    </div>
  );
};

export default Favorites;