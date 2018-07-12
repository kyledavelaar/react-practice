
import React, { PureComponent } from 'react';
// import axios from 'axios';
import {Motion, spring} from 'react-motion';
import Transition from 'react-motion-ui-pack'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import './App.css';
import Form from './components/Form/Form';
import Display from './components/display/Display';
import Fade from './components/Fade';
import Slide from './components/Slide/Slide';
import TodoList from './components/TodoList/TodoList';
import Link from './components/jest-test/jest';
import Checkbox from './components/checkbox/checkbox';
import ProgressBar from './components/progress-bar/progress-bar';
import DragDrop from './components/DragDrop/DragDrop';

export default class App extends PureComponent {
  state = {
    items: [
      {id: 22, name: 'toy', price: 22},
      {id: 33, name: 'bag', price: 52},
      {id: 44, name: 'tv', price: 99},
    ],
    price: 0,
    clicked: false,
  }
  
  render() {
    const { items, price, clicked } = this.state;
    return (
      <div className="container App">
        <ProgressBar></ProgressBar>
        <DragDrop></DragDrop>

        <div className="wobble-box wobble"></div>
        <div className="slide-drop">
          <p className="text-drop text-drop-active">Drop Text</p>
        </div>

        <Motion 
          // defaultStyle={this.defaultStyle} 
          style={clicked ? this.style : this.defaultStyle}
        >
          {({x, opacity}) => (
            <div
              className='moving-div' 
              style={{
              transform: `translate(${x}vw, 0`,
              opacity,
            }}>
              Moving Div with a lot of test so ellipsisis maybe??????
            </div>
          )}
        </Motion>

        <button onClick={this.toggleEnterState}>Click to Enter</button>

        <Transition
          component={false} // don't use a wrapping component
          enter={{opacity: 1}}
          leave={{opacity: 0}}
        >
          { clicked && <div key="89">hi</div> }
        </Transition>

        <Fade in={this.state.clicked} timeout={1000} />
        <Link>Children Text</Link>
        <Slide />
        <TodoList></TodoList>
        <Checkbox labelOn="On" labelOff="Off"></Checkbox>
        <Form>
          <h1>Form Header</h1>
          <h3>Total Price: {price}</h3>
        </Form>
        { this.renderItems(items) }
      </div>  
    );
  }

  defaultStyle = {x: spring(0), opacity: spring(0)}
  style = {x: spring(50), opacity: spring(1)}

  onDragStart = () => {
    /*...*/
  };
  onDragUpdate = () => {
    /*...*/
  };
  onDragEnd = () => {
    // the only one that is required
  };

  toggleEnterState = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  renderItems(items) {
    return items.map(({name, price}, i) => {
      return (
        <Display 
          key={i}
          name={name}
          price={price}
          onPriceClick={(e) => this.calculatePrice(e)}
        />
      )
    })
  }

  calculatePrice(price) {
    this.setState({
      price
    })
  }
 
}

