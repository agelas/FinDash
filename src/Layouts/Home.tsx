import React from 'react';
import {AppShell, Navbar, Header, Footer, ActionIcon, Title, useMantineColorScheme, Group} from '@mantine/core';
import { MainLinks, OtherLinks } from './NavLinks';
import NonEssentialBroker from './NonessentialBroker';
import {Sun, MoonStars } from 'tabler-icons-react';

function Home() {
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300}}>
          <Navbar.Section grow mt = "xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <OtherLinks />
          </Navbar.Section>
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          Footer here
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <Group sx={{height: '100%'}} px={20} position="apart">
          <Title order={1}>Stay Un-Broke</Title>
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
            </ActionIcon>
          </Group>
        </Header>
      }
    >
      <NonEssentialBroker />

    </AppShell>
  );
}

export default Home;
