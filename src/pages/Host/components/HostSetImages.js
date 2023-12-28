import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import HostSetImagesUpload from './HostSetImagesUpload';

const HostSetImages = ({ setHotelInfo }) => {
  const inputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageList, setImageList] = useState([]);
  const dummyList = [null, null, null, null];

  const handleDrop = files => {
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedFile(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  const onUploadImg = e => {
    if (!e.target.files) {
      return;
    }

    const image = e.target.files[0];

    setUploadedFile(URL.createObjectURL(image));
  };

  useEffect(() => {
    if (uploadedFile) {
      setImageList(prev =>
        prev[0] === null ? [uploadedFile] : [...prev, uploadedFile]
      );
    }
  }, [uploadedFile]);

  useEffect(() => {
    setHotelInfo(prev => ({ ...prev, images: imageList }));
  }, [imageList]);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    const input = inputRef.current.querySelector('input');
    if (input) {
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.addEventListener('change', onUploadImg);
    }
  }, [inputRef]);

  return (
    <div>
      <StyledImgContainer>
        <StyledThumnailImgContainer>
          <StyledThumnailImgWrap>
            {uploadedFile ? (
              <StyledThumnailImg
                src={uploadedFile}
                alt="uploaded"
                id="my-element"
                onChange={onUploadImg}
              />
            ) : (
              <StyledNoneImg {...getRootProps()}>
                <StyledNoneImgInput {...getInputProps()} />
                <ImgAddIcon />
                {isDragActive ? (
                  <p>이미지를 놓아주세요</p>
                ) : (
                  <p>
                    썸네일로 쓰일 사진을 드롭다운 또는 클릭해서 선택해주세요
                  </p>
                )}
              </StyledNoneImg>
            )}
          </StyledThumnailImgWrap>
        </StyledThumnailImgContainer>
        <StyledSubImgContainer>
          {dummyList.map((el, idx) => {
            return (
              <HostSetImagesUpload
                key={idx}
                idx={idx}
                setImageList={setImageList}
              />
            );
          })}
        </StyledSubImgContainer>
      </StyledImgContainer>
    </div>
  );
};

export default HostSetImages;

const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 400px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  padding: 60px;
  cursor: pointer;

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledThumnailImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

const StyledThumnailImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const StyledThumnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledSubImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0px;
  width: 400px;
  height: 400px;
`;

const ImgAddIcon = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/128/4131/4131814.png',
  width: '110px',
  filter: 'brightness(140%)',
})``;

const StyledNoneImgInput = styled.input`
  width: 100%;
  height: 100%;
`;

const StyledNoneImg = styled.div`
  text-align: center;
`;
