import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const RadioBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "disabled",
})<{ active?: boolean; disabled?: boolean }>(
  ({ theme, active, disabled }) => `
      border: 1px solid ${theme.palette.grey[400]};
      cursor: pointer;
      pointer-events: ${disabled ? "none" : "auto"};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${active ? theme.palette.grey[100] : "none"};
      padding: ${theme.spacing(1.5, 2.5)};
      border-radius: ${theme.shape.borderRadius}px;
      box-shadow: ${active ? theme.shadows[3] : "none"};
      border-color: ${
        disabled
          ? theme.palette.grey[300]
          : active
          ? theme.palette.primary.main
          : theme.palette.grey[400]
      };
      height: 80px;
      flex: 1 1 100px;
      width: 300px;
      transition: all 0.3s;
      p {
        color: ${disabled ? theme.palette.grey[400] : "inherit"};
        margin-top: ${theme.spacing(0.5)};
      }
  
  `
);

export default RadioBox;
