import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import InlineContainer from "../../../components/InlineContainer";

const NavItemContainer = styled(Box)(
  ({ theme }) => `
	padding: .5rem 1rem;
	&:hover {
    cursor: pointer;
		background: ${theme.palette.primary.dark};
		color: ${theme.palette.common.white};
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
  return (
    <InlineContainer
      sx={{ minWidth: "100px", backgroundColor: "#FA8320" }}
    ></InlineContainer>
  );
};
