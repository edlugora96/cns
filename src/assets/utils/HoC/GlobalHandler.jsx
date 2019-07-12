import React from 'react';

const HoCGloabl = (Component) => {
  const Global = class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        mobileMenu:false,
      };
      this.setProperty = this.setProperty.bind(this);
    }
    setProperty(mode){
      this.setState(mode);
    }
    render() {
      const {
        props,
        state,
        setProperty
      } = this;
      return <Component {...props} {...state} setProperty={setProperty} />
    }
  };
  return Global;
};

export default HoCGloabl;
