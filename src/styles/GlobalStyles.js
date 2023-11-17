import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}s
body{s
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
table {
    caption-side: top;
    border-collapse: inherit;
}
@media (min-width: 576px) {
    .container_landing_info{
        position:absolute;
        bottom: calc(-80% + 300px);
    }
    .container_landing_image{
        height:25rem;
    }
    .about-me__figure_container{
        width:22rem;
        height:22rem;
    }
    .portfolio__item-image{
        border-radius:15px;
    }
    .portfolio__item_container{
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

}

`;
