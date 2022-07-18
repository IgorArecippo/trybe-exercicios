//PARTE 2
//1
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};
  
const customerInfo = (order) => {
    // const address = 'address';
    const deliveryPerson = order['order']['delivery'].deliveryPerson;
    const phoneNumber = order['phoneNumber'];
    const costumerName = order['name'];
    const street = order['address'].street;
    const number = order.address.number;
    const apartament = order['address'].apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, R. ${street}, Nº ${number}, AP:${apartament}.`)
}
customerInfo(order);

//2
const orderModifier = (order) => {
    const newBuyer = order.name = 'Luiz Silva';
    const newTotal = order.payment.total = '50';
    const pizza = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;

    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizza} e ${drinks} é de R$ ${newTotal},00.`)
}

orderModifier(order);