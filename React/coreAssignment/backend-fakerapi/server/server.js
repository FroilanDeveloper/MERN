const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

class User{
  constructor(){
    this.firstname = faker.name.firstName()
    this.lastname = faker.name.lastName()
    this.phoneNumber = faker.phone.number()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
    this._id = faker.datatype.uuid()
  }
}

class Companies{
  constructor(){
    this._id = faker.datatype.uuid()
    this.name = faker.company.companyName()
    this.address = {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}



// express configure Allows us to post
app.use( express.json() );
app.use( express.urlencoded({ extended:true }) )


// req is shorthand for request
// res is shorthand for response
// Read ALL --- GET ALL
// app.get --> takes 2 arguement: (path, function (request, response))
//                        req and res needs to be in order
app.get("/api/users/new", (req, res) => {
  const newUsers = new User()
  res.json( newUsers ); 
});

app.get("/api/companies/new", (req, res) => {
  const newCompanies = new Companies()
  res.json( newCompanies );
});

app.get("/api/user/company", (req, res) => {
  const newUsers = new User()
  const newCompanies = new Companies()
  res.json( {newCompanies, newUsers} );
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );


