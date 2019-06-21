import React from 'react';

const HoCWatchMobile = (Component) => {
  const WatchMobile = class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        mobile: window.matchMedia("(max-width: 768px)").matches
      };
      this.watchSize = this.watchSize.bind(this);
    }
    watchSize(){
      this.setState({
        mobile: window.matchMedia("(max-width: 768px)").matches
      });
    }
    componentWillMount(){
      window.removeEventListener('resize', this.watchSize);
    }
    componentDidMount(){
      window.addEventListener('resize', this.watchSize);
    }
    render() {
      return <Component mobile={this.state.mobile}/>
    }
  };
  return WatchMobile;
};

export default HoCWatchMobile;
