import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  width: 300px;
  padding-bottom: 20px;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    /* transform: translateY(-5px); */
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: #555;
`;

export const CardPrice = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  margin-top: 10px;
  gap: 4px;
`;

export const CardAmount = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #0099cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    background-color: #0077b3;
  }
`;
