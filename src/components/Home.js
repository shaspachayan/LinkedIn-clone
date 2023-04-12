import styled from "styled-components";
import Main from "./Main";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import { Navigate } from "react-router-dom";
import { Connect, connect } from "react-redux";
const Home = (props) => {
    return <Container>
        {!props.user && <Navigate to="/" />}
        <Layout>
            <Leftside />
            <Main />
            <Rightside />
        </Layout>

    </Container>
}
const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
`;
const Layout = styled.div`
    display:grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
    column-gap: 25px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin: 25px 0;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding:0 5px;
        /* grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(300px,7fr); */
    }
`;
const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(Home);