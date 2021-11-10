import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';

const DrawerToggle = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Drawer
        style={{width: "30px"}}
        variant="persistent"
        anchor="top"
        open={true}
      >
      </Drawer>
    </div>
  )
}

export default DrawerToggle
