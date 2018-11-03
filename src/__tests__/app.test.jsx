import React from 'react';
import { configure, mount, shallow, jest } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from '../routes';
import { Provider } from "react-redux";
import store from "../stores/Root";
import Launch from '../components/Launch';
import Rocket from '../components/Rocket';

configure({ adapter: new Adapter() });

describe('app', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <Routes />
      </Provider>);
  });
});

describe('<Launch />', () => {
  let props;

  beforeEach(() => {
    props = {
      launch: {
        mission_name: "FalconSat",
        rocket: {
          rocket_name: "Falcon 1",
          rocket_id: "falcon1"
        }
      }
    }
  })

  it('should render 6 <div>, an <h2> with class header, and <li> and one `child', () => {
    const wrapper = shallow(<Launch {...props} />);
    expect(wrapper.find('div').length).toBe(6) //change to 3
    expect(wrapper.find('li').length).toBe(1)
    expect(wrapper.find('h2').length).toBe(1)
    // expect(wrapper.props()).className.toEqual('XXX');
    // expect(wrapper.props().children.length).toEqual(1);
  })

  // remove
  it('props should have children', () => {
    const wrapper = shallow(<Launch {...props} />);
    console.log('props:', wrapper.props().children.props.children)
    expect(wrapper.props().children.props.children.length).toBe(5); // change to 3
  })
});

describe('<Rocket />', () => {
  let props;

  beforeEach(() => {
    props = {
      launch: {
        rocket: {
          rocket_id: "falcon1"
        }
      },
      rocket: {
        cost_per_launch: "cost",
        flickr_images: []
      }
    }
  })

  it("should call fetchRocket function", () => {
    const fetchRocket = jest.fn();
    const wrapper = shallow(<Rocket {...props} />);
    wrapper.find('button').simulate('click');
    expect(fetchRocket).toBeCalledWith('falcon1');
  })
  
  it('returns an image file name based on input given to it', () => {
    expect(actual).toEqual(expected);
  })
  
  it('should render 1 <div>', () => {
    const wrapper = shallow(<Rocket {...props} />);
    expect(wrapper.find('div').length).toEqual(1);
  })
});


/* I'm sorry but I couldn't finish.  I did what I can with the time I had.  
I tried to build the tests first and then modify components or modularized accordingly.
My goal was to start with launch and rocket components, and then move on to other components.
*/