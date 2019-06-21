import React from 'react';
import currency from '$db/currency.js';

const HoCGloabl = (Component) => {
  const Global = class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        currency: currency[0].name,
        currencyIcon: currency[0].icon,
        listMode: 'thlist',
        viewMap: false,
        seller: false,
        tags:['casa', 'venta', 'asuncion'],
        tagsNoSelect:['nuevo', 'antiguo', 'alquiler', 'terreno'],
        mobileMenu:false,
      };
      this.setCurrency = this.setCurrency.bind(this);
      this.filterCurrency = this.filterCurrency.bind(this);
      this.setListMode = this.setListMode.bind(this);
      this.setProperty = this.setProperty.bind(this);
    }
    filterCurrency(obj) {
      const search = this.search || 'USD';
      if (search === obj.name) {
        return true;
      } else {
        return false;
      }
    }
    setListMode(mode){
      this.setState({
        listMode: mode
      });
    }
    setProperty(mode){
      this.setState(mode);
    }
    setCurrency(name){
      this.search = name;
      const object = currency.filter(this.filterCurrency, name)[0];
      this.setState({
        currency: object.name,
        currencyIcon: object.icon
      });
    }
    render() {
      const {
        props,
        state,
        setCurrency,
        setListMode,
        setProperty
      } = this;
      return <Component {...props} {...state} setProperty={setProperty} setListMode={setListMode} setCurrency={setCurrency}/>
    }
  };
  return Global;
};

export default HoCGloabl;
