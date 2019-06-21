import React, {Component} from 'react';
// eslint-disable-next-line
import slick from 'slick-carousel';
import $ from 'jquery';

const slickOpts = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  arrows: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
};

class Slick extends Component {
  constructor(props){
    super(props);
    this.opts = props.opts?props.opts: slickOpts;
    this.slickCarousel = React.createRef();
  }
  componentDidMount(){
    $(this.slickCarousel.current).slick(this.opts);
  }
  render (){
    return (
      <section ref={this.slickCarousel} {...this.props.attr}>
        {this.props.children}
      </section>
    );
  }
};

export default Slick;
