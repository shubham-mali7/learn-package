- Page 1

# List of City

> http://localhost:9500/location

# List of Restaurants

> http://localhost:9500/restaurants

# Restaurants wrt City

# List of QuickSearch/mealType

> http://localhost:9500/mealType

- Page 2

  > List of restaurants wrt meal Type
  > Filter on basis of meals + Cuisine
  > Filter on the basis of meal + cost

- Page 3

  > Restaurant Detail
  > Menue wrt restaurants

- Page 4

  > Menue Details
  > Place Order(POST)

- Page 5

  > List of all order
  > List of all order wrt email
  > Update the order (Put)
  > Delete Order (Delete)

/////////////////////////////////////////

Find with Condition

> db.Collection.find({state_id:1}).pretty()
> ex--> db.restaurants.find({state_id:1}).pretty()
> ex2--> db.restaurants.find({state_id:2}).pretty()

- Based on two parameters
  > ex2--> db.restaurants.find({state_id:2,average_rating:4}).pretty()
