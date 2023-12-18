import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import InlineContainer from "../../../components/InlineContainer";
import { useTheme } from "@mui/material/styles";

const NavBarContainer = styled(InlineContainer)(
  ({ theme }) => `
  min-width: 100px; 
  justify-content: space-between;
  background-color: ${theme.palette.primary.main};
  border-bottom: 3px solid;
  border-color: ${theme.palette.primary.dark};

`
);

const NavItemContainer = styled(Box)(
  ({ theme }) => `
	padding: .5rem 1rem;
	&:hover {
    cursor: pointer;
		background: ${theme.palette.secondary.main};
		color: ${theme.palette.common.white};
    transition: all .3s ease-in-out;
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
      <Typography variant="body2" fontWeight={600}>
        {text}
      </Typography>
    </NavItemContainer>
  );
};

export const NavBar = () => {
  const theme = useTheme();
  return (
    <NavBarContainer>
      <InlineContainer>
        <NavItem text="Stats Home" href={"/"} />
        <NavItem text="Players" href={"/players"} />
        <NavItem text="Teams" href={"/teams"} />
        <NavItem text="Leaders" href={"/leaders"} />
        <NavItem text="Compare" href={"/compare"} />
      </InlineContainer>
      <InlineContainer>
        <NavItem text="Settings" href={"/settings"} />
        <NavItem text="Sign Up" href={"/signup"} />
      </InlineContainer>
    </NavBarContainer>
  );
};
