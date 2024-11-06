import "@mantine/core/styles.css";
import { AppShell, Burger, MantineProvider } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { theme } from "./theme";
import WebApp from "@twa-dev/sdk";
import HeaderMenu from "./HeaderMenu";

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const user = WebApp.initDataUnsafe.user;
  
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
            <HeaderMenu
              username={user?.username ?? 'KC'}
              photoUrl={user?.photo_url ?? 'https://domain.com/user.jpg'}
            />
          </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>
          Wellcome T Ghostify Panel
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

