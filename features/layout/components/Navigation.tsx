import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import InlineContainer from "../../../components/InlineContainer";
import { useTheme } from "@mui/material/styles";

const NavItemContainer = styled(Box)(
  ({ theme }) => `
	padding: .5rem 1rem;
	&:hover {
    cursor: pointer;
		background: ${theme.palette.secondary.main};
		color: ${theme.palette.common.white};
    transition: all .2s ease-in-out;
	}
`
);

export const NavItem = ({ text, href }) => {
  const router = useRouter();
  return (
    <NavItemContainer
      onClick={() => {
        router.push(href);
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </NavItemContainer>
  );
};

export const NavBar = () => {
  const theme = useTheme();
  return (
    <InlineContainer
      sx={{ minWidth: "100px", backgroundColor: theme.palette.primary.main }}
    ></InlineContainer>
  );
};
