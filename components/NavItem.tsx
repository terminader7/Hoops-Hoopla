import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

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

const NavItem = ({ text, href }) => {
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

export default NavItem;
