import React from "react";
import OrderStat from "../../components/orderstat/OrderStat";
import "./widget.scss";
import data from '../../data/data.json';
import Dine from '../../assets/image/dine_in.png';
import Order from '../../assets/image/order.jpg';
import Revenue from '../../assets/image/revenue.png';
import Take_away from '../../assets/image/take_away.jpeg';



let dineInCount = 0;
let takeAwayCount = 0;
for (const order of data.orders) {
    if (order.dine_in) {
        dineInCount++;
    }
    if (order.take_away) {
        takeAwayCount++;
    }
}

// count order numbers
const orderCount = data.orders.length;

// sum billing amounts
const totalBillingAmount = data.orders.reduce((acc, order) => acc + order.billing_amount, 0);

// print the results
console.log("Dine-in orders:", dineInCount);
console.log("Take-away orders:", takeAwayCount);
console.log("Order count:", orderCount);
console.log("Total billing amount:", totalBillingAmount);


const redStyle = {
    color: "red",
  };

  const greenStyle = {
    color: "green",
  };

function Widget_Order() {
  return (
    <>
      <div className="grid">
        <div className="boxs">
          <OrderStat img={Revenue} percantage={'↓ 10%'} title={"Revenue"} amount={totalBillingAmount} color={redStyle}/>
        </div>
        <div className="boxs">
        <OrderStat img={Order} percantage={'↑ 20%'} title={"Orders"} amount={orderCount} color={greenStyle}/>
        </div>
        <div className="boxs">
        <OrderStat img={Dine} percantage={'↑ 10%'} title={"Dine in"} amount={dineInCount}  color={greenStyle}/>
        </div>
        <div className="boxs">
        <OrderStat img={Take_away} percantage={'↓ 5%'} title={"Take away"} amount={takeAwayCount} color={redStyle}/>
        </div>
      </div>
    </>
  );
}

export default Widget_Order;
