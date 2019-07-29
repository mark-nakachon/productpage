import React from 'react';
import {Card,Icon} from 'antd';
const Coupon = (props) => {
  
    return ( 
        <Card title="Note:" style={{ position: "sticky", top: 0 }} >
        <div>
        <p>200 / day</p>
        <p>If You book for 7 days</p>

        </div>
        <div>
            Rental Price will decrease with increasing Rental Duration
        </div>
        <div>
        <div>

        <Icon type="tag" theme="filled" /> Additional 10% off on Amazon pay
        </div>
        <div>
        <Icon type="dollar"  /> Cash on Delivery

        </div>
        <Icon type="carry-out" theme="filled" />  4 Hour Delivery
        </div>
        </Card>
     );
}
 
export default Coupon;
