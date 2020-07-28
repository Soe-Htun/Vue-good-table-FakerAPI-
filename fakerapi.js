var faker=require('faker');
function generateEmployees(){
    var fakeAPI =[]
    for (var i;i<=50; i++){
        var firstName=faker.name.firstName;
        var lastName= faker.name.lastName();
        var city = faker.address.city();
        var phone_no= faker.phone.phoneNumber();
        var email =faker.internet.email();
        var companyName =  faker.company.companyName();
        var userImage= faker.image.avatar();
        fakeAPI.push({
            "id" : id,
            "FirstName": firstName,
            "LastName" : lastName,
            "City" : city,
            "Phone_no" : phone_no,
            "Email":email,
            "CompanyName" : companyName,
            "UserImage" : userImage
        })
    }
    return {'fakeAPI': fakeAPI}
}
module.exports =generateEmployees;