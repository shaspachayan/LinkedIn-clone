import styled from "styled-components";
import { Connect, connect } from "react-redux";

const Leftside = (props) => {
    return <Container>
        <Artcard>
            <UserInfo>
                <CardBackground />
                <a>
                    <Photo />
                    <Link> {props.user ? props.user.displayName : "Hello there !!"}</Link>
                </a>

                <a>
                    <AddPhotoText>
                        Add a new photo
                    </AddPhotoText>
                </a>
            </UserInfo>

            <Widget>
                <a>
                    <div>
                        <span>
                            Who's viewed your profile
                            {/* <p> 23 </p> */}
                        </span>

                        <span>
                            Impressions of your post
                            {/* <p> 23 </p> */}
                        </span>

                    </div>
                    {/* <img src="/img/widget-icon.svg" alt="" /> */}
                </a>
            </Widget>
            <Item>
                <span>
                    <img src="/img/item-icon.svg" alt="" />
                    My Items
                </span>
            </Item>
        </Artcard>


        <Communitycard>
            <a>
                <span>
                    Groups
                </span>
            </a>
            <a>
                <span>
                    Events
                    <img src="/img/plus-icon.svg" alt="" />
                </span>
            </a>
            <a>
                <span>Followed Hashtags</span>
            </a>
            <a>
                <span>
                    Discover more
                </span>
            </a>
        </Communitycard>
    </Container>
};

const Container = styled.div`
    grid-area: leftside;
    /* position: absolute; */
`;

const Artcard = styled.div`
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 rgba(0 0 0 / 20%);

`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    cursor: pointer;

`;
const CardBackground = styled.div`
    background: url('/img/card-bg.svg');
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
    cursor: pointer;


`;
const Photo = styled.div`
    box-shadow: none;
    background: url('/img/photo.svg');
    width: 72px;
    height: 72px;
    border-radius: 50%;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: white;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    cursor: pointer;



`;
const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.9);
    font-weight: 600;
    cursor: pointer;

`;
const AddPhotoText = styled.div`
    color: #0a66c2;
    margin-top:4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
    cursor: pointer;

`;
const Widget = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer;


    &> a{
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:4px 12px;
        
        &:hover{
            background-color: rgba(0,0,0,0.08);
        }
        div{
            display: flex;
            flex-direction: column;
            text-align: left;
         
            span{
                cursor: pointer;
                font-size: 12px;
                line-height:1.333;
                &:first-child{
                    color: rgba(0,0,0,0.6);
                    padding-bottom: 10px;
                }
                &:last-child{
                    color: rgba(0,0,0,0.6);
                    cursor: pointer;

                }
            }                
            }
        }
    }
    svg{
        color: rgba(0,0,0,1);
        
    }
`;
const Item = styled.a`
    border-color: rgba(0,0,0,0.8);
    text-align: left;
    padding: 12px;
    font-size: 12px;
    display: block;
    span{
        display: flex;
        align-items: center;
        color: rgba(0,0,0,1);
        svg{
            color: rgba(0,0,0,0.6);
        }
    }
    &:hover{
        background-color: rgba(0,0,0,0.08);
    }

`;

const Communitycard = styled(Artcard)`
    padding: 8px 0 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    a{
        color: black;
        padding: 4px 12px 4px 12px;
        font-size: 12px;
        
        &:hover{
            color: #0a66c2;
            /* background-color: rgba(0,0,0,0.08); */
        }

        span{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &:last-child{
            color: (0,0,0,0.6);
            text-decoration: none;
            border-top : 1px solid #d6cec2;
            padding: 12px;
            &:hover{
                background-color: rgba(0,0,0,0.08);
                }
        }
    }
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
}
export default connect(mapStateToProps)(Leftside);