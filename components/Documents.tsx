import { useEffect, useState, useRef } from 'react'
import { Group, Menu, Button, Stack, MediaQuery } from '@mantine/core'
import { ChevronIcon } from '@mantine/core'

const Documents = ({ docs }: { docs: string[] }) => {
  const componentRef:any = useRef();
  const [toggleWidth, setToggleWidth] = useState(0);

  useEffect(() => {
    //container width is 50% of the entire screen, so multiply the document's total width.
    setToggleWidth(componentRef.current.offsetWidth * 2);
  }, []);

  return (
    <div style={{ width:'50vw', overflow: 'hidden', position: 'relative'}}>
      
      <MediaQuery
        smallerThan={toggleWidth}
        styles={{ visibility: 'hidden' }}
      >
        <Group ref={componentRef} noWrap={true} style={{display: 'inline-flex'}}>
          {docs.map((element, idx) => (
            <div key={idx} style={{lineHeight: '36px'}}>{element}</div>
          ))}
        </Group>
      </MediaQuery>

      <MediaQuery
        largerThan={toggleWidth}
        styles={{ visibility: 'hidden'}}
      >
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <Menu 
            control={
              <Button 
                rightIcon={<ChevronIcon />} 
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
    </div>
  )
}

export default Documents;