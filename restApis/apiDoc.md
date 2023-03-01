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

- For nested arrays
  > ex3--> db.restaurants.find({"mealTypes.mealtype_id":1}).pretty()
