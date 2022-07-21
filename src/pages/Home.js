import styled from "styled-components"
import ReactPaginate from "react-paginate"
import './Home.css';
import { useState, useEffect } from "react";
import Add from "./Add";

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
  height : 100px;
`


function Home() {

  // const [items, setItems] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);
  const [obj, setObj] = useState({
    items : [],
    pageNumber : 1,
  });


  const handlePageClick = (data) => {
    setObj({
      items : obj.items,
      pageNumber : data.selected + 1,
    });
  }

  useEffect(() => {

    (
      async () => {
        const response = await fetch(`https://swapi.dev/api/people?page=${obj.pageNumber}`,{
      headers : {
        'Content-Type' : 'application/json',
      },
    })

    const data = await response.json(); // data is arr of objects, each obj corresponds to one user.

    // console.log(data.results.slice(0,5).length);

    let arr;

    if(data.results.length > 5){
      arr = data.results.slice(0,5);
    }else{
      arr = data.results;
    }

    setObj({
      items : arr,
      pageNumber : obj.pageNumber,
    });
    
      }
      
    )();

  }, [obj.pageNumber])


  return (
    <Container>
        <Outer>
          {obj.items.map((item, index) => {
            return <div>
            <Add item = {item} key = {`item-${index}`} />
        </div>
          })}

            {/* <Inner>
                <Box><Heading>1</Heading></Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box><Button>View Details</Button></Box>
            </Inner>

            <Inner>
                <Box><Heading>1</Heading></Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box>
                    <Conent>
                        <InnerText>Contact</InnerText>
                        <InnerText>5145</InnerText>
                    </Conent>
                </Box>
                <Box><Button>View Details</Button></Box>
            </Inner> */}

         <div class="pagination">
          <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={"10"}
          onPageChange={handlePageClick}
          />
        </div>

        </Outer>
    </Container>
  )
}

export default Home