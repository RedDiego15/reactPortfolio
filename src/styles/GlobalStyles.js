import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background: ${(p) => p.theme.background_color}

}
img{
    width:100%;
    height:100%;
}

a {
    text-decoration: none;
  }
h1 {
    font-size: 3.2rem;
}
h2{
    font-size:2.2rem;
}
.nav-link:focus, .nav-link:hover{
    color:white;
    text-decoration:underline;
}

.nav-link:visited{
    color:gray;
}
.white-text{
    color: white
}
@media (min-width: 576px) {
    .container_landing_info{
        position:absolute;
        bottom: calc(-50% + 142px);
    }
    .container_landing_image{
        height:25rem;
    }

}

`;
