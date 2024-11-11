// src/components/CartDrawer.js
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import CartSidebar from './CartSidebar';

const CartDrawer = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open Cart
            </Button>
            <Drawer
                title="Your Cart"
                placement="right"
                onClose={onClose}
                open={visible}
                width={400} // Adjust the width as needed
            >
                <CartSidebar />
            </Drawer>
        </div>
    );
};

export default CartDrawer;
