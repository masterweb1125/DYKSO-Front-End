import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100vh;
  font-size: 30px;
  background: #FFFFFF;
  border-radius: 8px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin: auto;
`; 

const MainContainer = styled.div`
    height: 80vh;
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
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: 40vw;
  height: 5vh;
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
  height: 5vh;
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
  background-color: #fcc017;
  color: #000;
  &:hover {
    background-color: #eebb00;
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
  background-color: #fcc017;
  color: #000;
  &:hover {
    background-color: #eebb00;
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
  height: 30vh;
  display: flex;
  flex-direction: column;
`;

const AddInfoTitle = styled.div`
  width: 10vw;
  height: 5vh;
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
  height: 15vh;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 15vh;
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
  border: 1px dashed #fcc017;
  &:hover {
    background-color: #fcc017;
  }
`;


const Sell = () => {

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      console.log('Selected File:', selectedFile);
    };

    return (
      <Container>
        <MainContainer>
          <SearchContainer>
            <SearchInput type="text" placeholder="Type here what you want to sell / request / post. Required" />
            <LocationInput type="text" placeholder="Enter zip code" />
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
    );
  };
  
  export default Sell;



