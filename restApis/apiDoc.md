- Page 1

# List of City

> http://localhost:9500/location

# List of Restaurants

> http://localhost:9500/restaurants

# Restaurants wrt City

> http://localhost:9500/restaurants?stateId=4

# List of QuickSearch/mealType

> http://localhost:9500/mealType

- Page 2

# List of restaurants wrt meal Type and State Id

(http://localhost:9500/restaurants?mealId=2&&stateId=2)

# List of restaurants wrt meal Type

> http://localhost:9500/restaurants?mealId=3

# Filter on basis of meals + Cuisine

> http://localhost:9500/filters/1?cuisineId=3

# Filter on the basis of meal + cost

> http://localhost:9500/filters/1?lcost=300&hcost=700
> http://localhost:9500/filters/1?lcost=200&hcost=700&sort=-1 (sort cost in descending order)

- Page 3

# Restaurant Detail

> http://localhost:9500/details/2
> (http://localhost:9500/details/63f9b522c057cb4c130f67d9) // incase we need it wrt Object_id

# Menue wrt restaurants

> http://localhost:9500/menu/4

- Page 4

  # Menue Details (POST)

  > http://localhost:9500/menuItem

  {
  "id":[1,2,3]
  }

  # Place Order(POST)

  > http://localhost:9500/placeOrder

  {
  "\_id": "640061a3040a8ebce6cdf191",
  "Order_id": 1,
  "name": "Shubham",
  "email": "shubham@gmail.com",
  "address": "Hno 23,Sector 1",
  "phone": 768768686,
  "cost": 1000,
  "menuItem": [
  3,
  5,
  7
  ]
  }

- Page 5

  # List of all order

  > http://localhost:9500/viewOrder

  # List of all order wrt email

  > http://localhost:9500/viewOrder?email=shubham@gmail.com

  # Update the order (Put)

  > http://localhost:9500/updateOrder/4

  {
  "status": "Pending",
  "bank_name": "SBI-bank",
  "date": "06/03/2023"
  }

  # Delete Order (Delete)

  > http://localhost:9500/deleteOrder/7

/////////////////////////////////////////

Find with Condition

> db.Collection.find({state_id:1}).pretty()
> ex--> db.restaurants.find({state_id:1}).pretty()
> ex2--> db.restaurants.find({state_id:2}).pretty()

- Based on two parameters

  > ex2--> db.restaurants.find({state_id:2,average_rating:4}).pretty()

- For nested arrays
  > ex3--> db.restaurants.find({"mealTypes.mealtype_id":1}).pretty()
