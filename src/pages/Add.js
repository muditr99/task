import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height : 90vh;
  padding-left : 15%;
  padding-top : 20px;
  background-color : #e6fffa;
`

const Outer = styled.div`
  width : 80%;
`

const Inner = styled.div`
  display : flex;
  height : 100px;
  margin : 10px;
  background-color : white;
  border-radius : 10px;
`

const Box = styled.div`
  flex : 1;
  display : flex;
  justify-content : center;
  align-items : center;
`

const Conent  = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
`

const InnerText  = styled.span`
  margin : 1px 0px;
`

const Heading  = styled.h2`
  font-weight : 300;
  font-size : 20px;
`

const Button  = styled.button`
  border-radius : 30px;
  border : none;
  background-color : red;
  color : white;
  padding : 10px;
  cursor : pointer;
`

const Accordian = styled.div`
  background-color : white;
  border-radius : 10px;
  margin : 10px;
  margin-top : -10px;
  padding : 10px;
`

const AccordianHeading = styled.h2`
  font-weight : 300;
  font-size : 18px;
`

const AccordianDesc = styled.p`
  
`

const AccordianContentBox = styled.div`
  display : flex;
  justify-content : space-around;
  align-items : center;
`

const AccordianContent = styled.span`

`


function Add(props) {

  const [expand, setExpand] = useState(false);

  return (
    <div>
    <Inner>
        <Box><Heading>{props.item.name}</Heading></Box>
            <Box>
                <Conent>
                    <InnerText>Gender</InnerText>
                    <InnerText>{props.item.gender}</InnerText>
                </Conent>
            </Box>
            <Box>
                <Conent>
                    <InnerText>Birth Date</InnerText>
                    <InnerText>{props.item.birth_year}</InnerText>
                </Conent>
            </Box>
            <Box>
                <Conent>
                    <InnerText>Height</InnerText>
                    <InnerText>{props.item.height}</InnerText>
                </Conent>
            </Box>
            <Box><Button onClick={() => setExpand(!expand)}>View Details</Button></Box>
    </Inner>
    { expand && 
        <Accordian>
            <AccordianHeading>Description</AccordianHeading>
            <AccordianDesc>
            There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
            </AccordianDesc>
            <AccordianContentBox>
            <AccordianContent>name : {props.item.name}</AccordianContent>
            <AccordianContent>gender : {props.item.gender}</AccordianContent>
            <AccordianContent>dob : {props.item.birth_year}</AccordianContent>
            </AccordianContentBox>
        </Accordian>
        }
    </div>
  )
}

export default Add