import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import styled from 'styled-components';
import "../App.css";

const Sell = () => {

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      console.log('Selected File:', selectedFile);
    };

    return (
    <div className="container-fluid h-100" style={{ width: "100vw" }}>
        <div className="row" style={{ height: "10vh" }}>
          <Header />
        </div>
        <div className="row" style={{ height: "70vh" }}>
          <Container>
            <MainContainer>
              <SearchContainer>
                <SearchInput type="text" className='custom-font' placeholder="Type here what you want to sell / request / post. Required" />
                <LocationInput type="text" className='custom-font' placeholder="Enter zip code" />
                <RoundedButton>Find my location</RoundedButton>
              </SearchContainer>
              <AddInfoContainer>
                <AddInfoTitle>Additional Information</AddInfoTitle>
                <MultiLineTextInput
                  id="TextArea"
                  placeholder="Enter here any additional information you want to share"
                  onChange={(e) => console.log(e.target.value)}
                />
              </AddInfoContainer>
              <AttachContainer>
                <AddInfoTitle>
                  Attachment
                </AddInfoTitle>
                <FileInputWrapper>
                  <StyledFileInput
                    type="file"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <FileInputLabel htmlFor="fileInput">Drag & Drop or Browse</FileInputLabel>
                </FileInputWrapper>
              </AttachContainer>
              <ButtonContainer>
                <PostRoundedButton href="/login">Post</PostRoundedButton>
                <CancelRoundedButton href="/">Cancel</CancelRoundedButton>
              </ButtonContainer>
            </MainContainer>
          </Container>
        </div>
        <div className="row" style={{ height: "20vh" }}>
          <Footer />
        </div>
    </div>
    );
  };

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  background: #FFFFFF;
  border-radius: 8px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin: auto;
`; 

const MainContainer = styled.div`
    width: 90%;
    background: #FFFFFF;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`; 

const SearchContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 40vw;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #3498db;
  }
`;

const LocationInput = styled.input`
  width: 15vw;
  margin-left: 20px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  &:focus {
    border-color: #3498db;
  }
`;

const RoundedButton = styled.button`
  border: none;
  border-radius: 10px; 
  padding: 10px 10px;
  font-size: 13px;
  margin-left: 20px;
  width: 8vw;
  height: 5vh;
  cursor: pointer;
  background-color: #03A89E;
  color: #000;
  &:hover {
    background-color: #03A89E;
  }
`;

const PostRoundedButton = styled.a`
  text-decoration: none;
  border: none;
  border-radius: 10px; 
  font-size: 13px;
  margin-left: 20px;
  width: 8vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #03A89E;
  color: #000;
  &:hover {
    background-color: #03A89E;
  }
`;

const CancelRoundedButton = styled.a`
  border: 2px solid #ccc;
  text-decoration: none;
  border-radius: 10px; 
  font-size: 13px;
  margin-left: 20px;
  width: 8vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  &:hover {
    background-color: #eee;
  }
`;

const AddInfoContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AddInfoTitle = styled.div`
  width: 10vw;
  flex-direction: column;
  font-size: 12px;
  font-weight: 400;
`;

const MultiLineTextInput = styled.textarea`
  width: 80vw;
  height: 20vh;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  resize: none;
  &:focus {
    border-color: #3498db;
  }
`;

const AttachContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const FileInputWrapper = styled.div`
  margin-top: 0px;
`;

const StyledFileInput = styled.input`
  display: none; 
`;

const FileInputLabel = styled.label`
  background-color: #fffcf6;
  color: #000;
  padding: 20px 100px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: 1px dashed #03A89E;
  &:hover {
    background-color: #03A89E;
  }
`;

  
  export default Sell;



