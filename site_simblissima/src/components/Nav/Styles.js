import styled from 'styled-components';

const Container = styled.div`
     nav {
       display: flex;
       align-items: center;
       background-color: #333;
       padding: 1em;
       justify-content: space-between;
       top: 0;
       left: 0;
     }

     nav img {
       height: 40px;
     }

     .dropdown {
       position: relative;
       display: inline-block;
     }

     .dropbtn {
       background-color: transparent;
       border: none;
       cursor: pointer;
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 0;
       height: 20px;
       width: 20px;

     }

     .dropbtn img {
       height: auto;
       width: 100%;
       height: 20px;
       width: 20px;
     }

     .dropdown-content {
       display: none;
       position: absolute;
       background-color: #333;
       min-width: 160px;
       box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
       right: 0;
     }

     .dropdown-content a {
       color: #fff;
       padding: 12px 16px;
       text-decoration: none;
       display: block;
     }

     .dropdown-content a:hover {
       background-color: #444;
     }

     .dropdown:hover .dropdown-content {
       display: block;
     }
`;

export { Container }
