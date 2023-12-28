import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const HostSetImagesUpload = ({ idx, setImageList }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const inputRef = useRef(null);

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
    <StyledSubImgWrap>
      {uploadedFile ? (
        <StyledSubImg
          src={uploadedFile}
          alt="uploaded"
          id="my-element"
          onChange={onUploadImg}
        />
      ) : (
        <StyledNoneImg {...getRootProps()}>
          <StyledNoneImgInput {...getInputProps()} />
          <ImgAddIcon />
          {isDragActive ? <p>이미지를 놓아주세요</p> : <p>추가 소개 이미지</p>}
        </StyledNoneImg>
      )}
    </StyledSubImgWrap>
  );
};

export default HostSetImagesUpload;

const StyledSubImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const StyledSubImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
