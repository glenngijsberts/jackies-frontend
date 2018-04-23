// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Custom components
import Block from './General/Block'
import Product from './Product'


export default class PlacedOrders extends Component {

    constructor(props) {
        super(props);

        this.goToOrder = this.goToOrder.bind(this);

    }

    goToOrder(id) {
        this.props.history.push(`/orders/${id}`);
    }

    render() {

        return (


            <div className="container mx-auto px-4 pt-6">

                <div className="flex mb-4">
                    <h3 className="uppercase text-lg text-grey-dark">Bestellingen</h3>
                </div>


                <div className="flex mb-4">
                    <div className="w-full">

                        {this.props.orders.filter((order) => order.completed === 0).map((order) => {

                            console.log(order);

                            return (
                                <div className="w-full mb-4" key={order.id}>
                                    <Link to={`/orders/${order.id}`} className="no-underline">
                                        <Product title={order.name} price={order.price} />
                                    </Link>
                                </div>
                            );

                        })}

                    </div>
                </div>

                <div className="flex mb-4">
                    <h3 className="uppercase text-lg text-grey-dark">Afgeronde bestellingen</h3>
                </div>

                <div className="flex mb-4">
                    <div className="w-full">

                        {this.props.orders.filter((order) => order.completed === 1).map((order) => {

                            console.log(order);

                            return (
                                <div className="w-full mb-4" key={order.id}>
                                    <Link to={`/orders/${order.id}`} className="no-underline">
                                        <Product title={order.name} price={order.price} />
                                    </Link>
                                </div>
                            );

                        })}

                    </div>
                </div>

            </div>

        );
    }
};
