import styled from "styled-components";

const Rightside = (props) => {
    return <Container>
        <Newscard>
            <ul>
                <Title>
                    <h4>LinkedIn News</h4>
                    <img src="/img/feed-icon.svg" alt="" />
                </Title>

                <Feedlist>
                    <li>
                        - Startups upbeat about hiring
                    </li>
                    <li>
                        - India Inc's pay hike report card
                    </li>
                    <li>
                        - Chief Data Officers in demand
                    </li>
                    <li>
                        - Top newsletters to follow
                    </li>
                    <li>
                        - Fresh IPO funding fails sharply
                    </li>
                </Feedlist>
                <Recomendations>
                    Show more
                    <img src="/img/right-icon.svg" alt="" />
                </Recomendations>
            </ul>
        </Newscard>
    </Container>
};

const Container = styled.div`
    grid-area: rightside;
`;

const Newscard = styled.div`
    text-align: left;
    /* overflow: hidden; */
    margin-bottom: 8px;
    background-color:#fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%),0 0 0 rgb(0 0 0 /20%);
    padding: 12px;
    list-style: none;
    `;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    color: rgba(0,0,0,0.6);
`;

const Feedlist = styled.ul`
    margin-top: 16px;
    li{
        cursor: pointer;
        weight: bold;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 12px;
        border-radius: 5px;
        margin: 12px 0;
        position: relative;
        font-size: 14px;
        &:hover{
        background-color: rgba(0,0,0,0.08);
    }
    }

`;
const Recomendations = styled.div`
    color:#0a66c2;
    display: flex;
    align-items: center;
    font-size: 14px;

`;
export default Rightside;