import React, { Component } from 'react';
import Header from '../Common/Header';
import SingleService from '../Common/singleservice';

//Array with with the elemens to be render
const services = [
    {title: 'E-commerce', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-shopping-cart'},
    {title: 'Responsive Desing', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-laptop'},
    {title: 'Security', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon: 'fa-lock'}

]


//Class that renders the services page
class Services extends Component {
    render(){
        return (
                <div>
                     <section id="services">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                             return (
                                 <SingleService {...service} key={index} />
                             )
                        })}
                    </div>
                    </div>
                </section>
                </div>
        )
    }
}

export default Services;