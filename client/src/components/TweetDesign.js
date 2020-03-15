import React from  'react'
import { Container, Media, Row, Col } from 'reactstrap'
import ReactHtmlParser  from 'react-html-parser'

function TweetDesign(props){
    return(

        <div>
            {props.tweet && (
                 <Container >
                     {
                         props.tweet.user && (
                             <Row style = {{border : "1px solid rgba(130, 147, 160, 0.5)", padding : "20px"}} >
                             <Col md = "1" > 
                                {
                                    props.tweet.user && (<img src = {props.tweet.user.profile_image_url}  style = {{height : "50px", width : "50px", borderRadius : "50%"}} />)
                                }
                             </Col>
                             <Col md = "11" > 
                                     <p>
                                     <strong>{props.tweet.user.name}</strong>&nbsp;@{props.tweet.user.screen_name}
                                     <br></br>
                                     <span>
                                     {
                                         ReactHtmlParser(props.tweet.text)
                                     }
                                     </span>
                                     <spna>
                                         {
                                             (props.tweet.extended_entities && (props.tweet.extended_entities.media && (props.tweet.extended_entities.media.map(med => {
                                                 return (
                                                    <div>
                                                            <img 
                                                    src = {med.media_url}
                                                    style = {{
                                                        width : "100%",
                                                        paddingTop : "20px",
                                                        paddingBottom : "20px",
                                                        borderRadius : "75px"
                                                    }}
                                                 />
                                                    </div>
                                                 )
                                             }))))
                                         }
                                     </spna>
                                </p> 
                             </Col>
                         </Row>
                         )
                     }
                 </Container>
            )}
        </div>
     )
}

export default TweetDesign