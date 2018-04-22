// React deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Firebase
import base from '../base';

// Custom components
import Block from './General/Block'
import Product from './Product'

// Import static data orders
import orders from '../Orders';

export default class PlacedOrders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }

        this.getOrders = this.getOrders.bind(this);
        this.goToOrder = this.goToOrder.bind(this);

    }

    componentDidMount() {
        // Sync with firebase database
        this.ref = base.syncState(`/orders`, {
            context: this,
            state: 'orders'
        });
    }

    getOrders() {

        this.setState({
            orders: orders
        });

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

                        {this.state.orders.filter((order) => order.completed === 0).map((order) => {

                            console.log(order);

                            return (
                                <div className="w-full mb-4" key={order.id}>
                                    <Link to="/orders/1" className="no-underline">
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

                        {this.state.orders.filter((order) => order.completed === 1).map((order) => {

                            console.log(order);

                            return (
                                <div className="w-full mb-4" key={order.id}>
                                    <Link to="/orders/1" className="no-underline">
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
