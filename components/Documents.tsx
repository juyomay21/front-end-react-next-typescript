import React from 'react'
import { Container, Group, Menu, Button, Stack, MediaQuery } from '@mantine/core'
import { useElementSize } from '@mantine/hooks';
import { ChevronIcon } from '@mantine/core'

const Documents = ({ docs }: { docs: string[] }) => {
  const { ref, width } = useElementSize<HTMLDivElement>();

  return (
    <Container style={{ width:'50vw', overflow: 'hidden', position: 'relative', padding: '0px', margin: '0px'}}>

      {/* Rendering documents */}
      <MediaQuery
        smallerThan={width * 2}
        styles={{ visibility: 'hidden' }}
      >
        <Group ref={ref} noWrap={true} style={{display: 'inline-flex'}}>
          {docs.map((element, idx) => (
            <div key={idx} style={{lineHeight: '36px'}}>{element}</div>
          ))}
        </Group>
      </MediaQuery>

      {/* Rendering Toggle Button and Menu */}
      <MediaQuery
        largerThan={width * 2}
        styles={{ visibility: 'hidden'}}
      >
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <Menu 
            control={
              <Button 
                rightIcon={<ChevronIcon />} 
                variant="gradient"
                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                radius="lg"
                size='sm'
              >
                Documents
              </Button>} 
            style={{maxHeight: 160, overflow: 'scroll'}}
            position={"bottom"}
            placement={"end"}
          >
            <Stack>
              {docs.map((element, idx) => (
                <div key={idx} style={{height: 25}}>{element}</div>
              ))}
            </Stack>
          </Menu>
        </div>
      </MediaQuery>
    </Container>
  )
}

export default Documents;