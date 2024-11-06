import { Avatar, Container, Flex, UnstyledButton, rem } from '@mantine/core';
import { IconAt, IconUserShare } from '@tabler/icons-react';

function HeaderMenu({ username, photoUrl }: { username: string; photoUrl: string }) {
  return (
    <Container size={'xs'}>
      <Flex mih={60} gap="xs" justify="flex-end" align="center" direction="row">
        <Avatar
          variant="filled"
          radius="xl"
          size="sm"
          color="yellow"
          src={photoUrl}
          alt={username}
        />
        <UnstyledButton mr={'xs'} ml={'xs'} style={{ textAlign: 'center', color: 'yellow' }}>
          {username}
          <IconAt style={{ width: rem(24), height: rem(24) }} />
        </UnstyledButton>
        <UnstyledButton mr={'xs'} ml={'xs'} style={{ textAlign: 'center', color: 'yellow' }}>
          <IconUserShare style={{ width: rem(24), height: rem(24) }} />
        </UnstyledButton>
      </Flex>
    </Container>
  );
}

export default HeaderMenu;