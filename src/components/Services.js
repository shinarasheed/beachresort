import React, { Component } from 'react';
import { Title } from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaCocktail />,
        title: 'Free Cocktails',
        info:
          '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, explicabo?',
      },

      {
        id: 1,
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, explicabo?',
      },
      {
        id: 1,
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info:
          '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, explicabo?',
      },
      {
        id: 1,
        icon: <FaBeer />,
        title: 'Strongest Beer',
        info:
          '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, explicabo?',
      },
    ],
  };
  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
