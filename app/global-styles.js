import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  header {
    padding: 0 15px;
    background-color: #7952b3;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  }

  a.nav-link {
    padding: 20px;
    color: #fff;
  }

  a.nav-link.active {
      background: #fff;
      color: red;
  }

  .card-title {
    min-height: 48px;
  }

  .card {
    margin-bottom: 15px;
  }

  .product-detail {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
  }

  .product-detail .image img{
    width:100%;
  }
`;

export default GlobalStyle;
