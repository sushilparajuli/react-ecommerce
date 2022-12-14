import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    max-width: 990px;
    justify-content: space-between;
    margin: 1.5rem auto;
    padding: 0 1rem;
    gap: 2rem;
    
    > div {
        flex : 1 1 auto;
    }
    
    @media only screen and (max-width :40rem) {
       &    {
            flex-direction: column;
        }
    }
`;