import styled from 'styled-components';



export const ButtonContainer = styled.button`
text-transform:capitalize;
border: solid var(--lightPurple);
border-color: ${props => props.cartBtn? "var(--mainGreen)":"var(--lightPurple)"};
background: transparent;
color: ${prop=> prop.cartBtn? "var(--mainGreen)" : "var(--lightPurple)"};
font-size:1.3rem;
border-radius: 30px;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.3s ease-in-out;
&:hover{
    background:${prop => prop.cartBtn? "var(--lightGreen)" : "var(--lightPurple)"};
    color:${prop => prop.cartBtn? "var(--mainGreen)" :  "var(--mainPurple)"};
}
&:focus {
    outline: none;
}
`;