""" 
Problema: definir la lógica para calcular la sumatoria total de una OrderList. 
En este momento está en el main.

Reto 1: refactoring --> Arreglar la lógica propuesta usando el enfoque Information Expert 
(Reto de seguimiento) """

products = [{'name': 'Blah', 'price': '100', 'quantity': '3'}, {'name': 'Shampoo', 'price': '200', 'quantity': '2'}, {'name': 'Mouse', 'price': '300', 'quantity': '5'}]

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

class OrderList:
    def __init__(self):
        self.order = []


    def totalSum(self):
        sum = 0
        for order in self.order:
            order_price = int(order.price) * int(order.quantity)
            sum += order_price
        print(f'Valor total: {sum}')

    def makeOrder(self):
        for i in products:
            obj = Product(i['name'], i['price'], i['quantity'])
            self.order.append(obj)
        
        self.totalSum()
    
def main():

    final_order = OrderList()
    final_order.makeOrder()
    

if __name__ == '__main__':
    # Se ejecuta cuando el módulo no es importado
    main()