import { Box, Tooltip, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import InlineContainer from "../../components/InlineContainer";
import LockIcon from "@mui/icons-material/LockRounded";

const NavBarContainer = styled(InlineContainer)(
  ({ theme }) => `
  min-width: 100px; 
  justify-content: space-between;
  background-color: ${theme.palette.primary.main};
  border-bottom: 3px solid;
  border-color: ${theme.palette.primary.dark};

`
);

const NavItemContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive?: boolean }>(
  ({ theme, isActive }) => `
	padding: .5rem 1rem;
  background: ${isActive ? theme.palette.secondary.dark : "transparent"};
  color: ${isActive ? theme.palette.common.white : theme.palette.common.black};
	&:hover {
    cursor: pointer;
		background: ${theme.palette.secondary.dark};
		color: ${theme.palette.common.white};
    transition: all .3s ease-in-out;
	}
`
);

export const NavItem = ({ text, href }: { text: string; href: string }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  return text === "Compare" ? (
    <NavItemContainer
      onClick={() => {
        router.push(href);
      }}
      isActive={isActive}
    >
      <Typography variant="body2" fontWeight={600}>
        {text}
      </Typography>
    </NavItemContainer>
  ) : (
    <Tooltip title="Coming Soon" arrow>
      <Box sx={{ padding: ".5rem 1rem", display: "flex", cursor: "pointer" }}>
        <Typography variant="body2" fontWeight={600} sx={{ opacity: 0.4 }}>
          {text}
        </Typography>
        <LockIcon fontSize="small" sx={{ opacity: 0.4 }} />
      </Box>
    </Tooltip>
  );
};

export const NavBar = () => {
  const NavItemArr = [
    { text: "Compare", href: "/" },
    { text: "Stats", href: "/stats" },
    { text: "Players", href: "/players" },
    { text: "Teams", href: "/teams" },
    { text: "Leaders", href: "/leaders" },
  ];

  return (
    <NavBarContainer>
      <InlineContainer>
        {NavItemArr.map((item, index) => (
          <NavItem key={index} text={item.text} href={item.href} />
        ))}
      </InlineContainer>
      <InlineContainer>
        <NavItem text="Settings" href={"/settings"} />
        <NavItem text="Sign Up" href={"/signup"} />
      </InlineContainer>
    </NavBarContainer>
  );
};
