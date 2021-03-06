import styled from 'styled-components';

export const StyledTitle = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    -webkit-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    -moz-box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    box-shadow: 1px 1px 16px -4px rgba(0,0,0,0.25);
    margin-bottom: 40px;
    margin: 40px;
    border-radius: 5px;
`; 

export const TitleDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(34, 34, 34);
`; 
export const TitleText = styled.p`
    width: 90%;
`; 