import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';


const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  }
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
     this.state = {open: false};
  }	

//Facebook image:
//picture: profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg'

render () { 
    return (
      <div>
      <Paper style={style.paper}>
      <Menu>
        <MenuItem primaryText="Svetlin" leftIcon={<RemoveRedEye />} />
        <MenuItem primaryText="Basic Details" onClick={() => console.log("TEST")} leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Playlists" leftIcon={<ContentLink />} />
        <Divider />
        <MenuItem primaryText="Events" leftIcon={<ContentCopy />} />
        <MenuItem primaryText="Social " leftIcon={<Download />} />
      </Menu>
      </Paper>
      </div>
    );
  }
}


