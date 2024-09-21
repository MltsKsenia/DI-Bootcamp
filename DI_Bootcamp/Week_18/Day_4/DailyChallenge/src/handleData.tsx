import { User, Product, Order } from './types';

export function handleData(data: (User | Product | Order)[]): string[] {
    return data.map(item => {
        if (isUser(item)) {
            return `Hello ${item.name}, you are ${item.age} years old.`;
        } else if (isProduct(item)) {
            return `Product ID: ${item.id}, Price: $${item.price}`;
        } else if (isOrder(item)) {
            return `Order Summary: ID ${item.orderId}, Amount: $${item.amount}`;
        } else {
            return 'Unknown item type';
        }
    });
}

function isUser(item: any): item is User {
    return item.type === 'user';
}

function isProduct(item: any): item is Product {
    return item.type === 'product';
}

function isOrder(item: any): item is Order {
    return item.type === 'order';
}