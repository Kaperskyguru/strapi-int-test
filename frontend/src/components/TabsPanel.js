import React from 'react';
import PropTypes from 'prop-types';
import {Typography, Tabs, Tab, AppBar, Box} from '@material-ui/core';
import useStyles from '../style';
import PlanetCard from './PlanetCard';
import CharacterCard from './CharacterCard';
import PlanetModal from './PlanetModal';
import CharacterModal from './CharacterModal';


function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabsNav} position="static">
        <Tabs indicatorColor="none" className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className={classes.tab} label="planets" {...a11yProps(0)} />
          <Tab className={classes.tab} label="characters" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PlanetCard/>
        {/* <PlanetModal/> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CharacterCard/>
        {/* <CharacterModal/> */}
      </TabPanel>
    </div>
  );
}



